'use strict'
import { formValidation } from './components/form/form'
import { dropdownHandler } from './components/portfolio/portfolio'
import { servicesBtnsHandler } from './components/services/services'

// Получить ширину полосы прокрутки
function getScrollbarWidth() {
	const outer = document.createElement('div')
	outer.style.visibility = 'hidden'
	outer.style.overflow = 'scroll'
	outer.style.msOverflowStyle = 'scrollbar'
	document.body.appendChild(outer)

	const inner = document.createElement('div')
	outer.appendChild(inner)

	const scrollbarWidth = outer.offsetWidth - inner.offsetWidth

	outer.parentNode.removeChild(outer)

	return scrollbarWidth
}

// Фиксирование высоты документа
const documentHeight = () => {
	const doc = document.documentElement
	doc.style.setProperty('--height', `${window.innerHeight}px`)
}

window.addEventListener('resize', documentHeight)
documentHeight()

// Получить высоту шапки
const headerHeight = () => {
	const header = document.querySelector('.header')
	if (!header) return
	const doc = document.documentElement
	doc.style.setProperty('--header-height', `${header.offsetHeight}px`)
}

headerHeight()

// Бургер
const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const form = document.querySelector('#form')
let menuIsOpen = false
let formIsOpen = false

const formBtn = document.querySelector('#form-btn')

const openOverlay = target => {
	if (!formIsOpen && !menuIsOpen) {
		document.body.style.paddingRight = `${getScrollbarWidth()}px`
		document.body.classList.add('is-lock')
	}

	if (target === 'form') {
		menu.style.display = 'none'
		form.style.display = 'block'
		formIsOpen = true
	} else if (target === 'menu') {
		form.style.display = 'none'
		menu.style.display = 'block'
		menuIsOpen = true
	}
}

const closeOverlay = () => {
	document.body.style.paddingRight = '0'
	document.body.classList.remove('is-lock')
	formIsOpen = false
	menuIsOpen = false
	form.style.display = 'none'
	menu.style.display = 'none'
}

const handleEscapeKey = event => {
	if (event.key === 'Escape') {
		if (formIsOpen || menuIsOpen) {
			event.preventDefault()
			closeOverlay()
			menuBtn.classList.remove('is-active')
		}
	}
}

if (formBtn) {
	formBtn.addEventListener('click', () => {
		openOverlay('form')
	})
}

if (menuBtn) {
	menuBtn.addEventListener('click', () => {
		menuBtn.classList.toggle('is-active')
		if (menuIsOpen || formIsOpen) {
			closeOverlay()
		} else {
			openOverlay('menu')
		}
	})
}

document.addEventListener('keydown', handleEscapeKey)

// Валидация формы
formValidation('.form')
formValidation('.form--fedback')

servicesBtnsHandler()

dropdownHandler()

window.onload = function () {
	var mainImageLow = document.getElementById('main-image-low')
	var mainImage = document.getElementById('main-image')
	mainImage.style.display = 'block'
	mainImageLow.style.display = 'none'
	console.log('All resources have finished loading.')
}

const closeMenuOnLinkClick = () => {
	const menu = document.querySelector('.menu')
	const links = menu.querySelectorAll('.nav__list a')

	links.forEach(link => {
		link.addEventListener('click', () => {
			closeOverlay()
			menuBtn.classList.remove('is-active')
		})
	})
}

document.addEventListener('DOMContentLoaded', closeMenuOnLinkClick)

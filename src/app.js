'use strict'
import { formValidation } from './components/form/form'
import { servicesSwiper } from './components/services/services'
import { servicesBtnsHandler } from './components/services/services'
import { dropdownHandler } from './components/portfolio/portfolio'
// Get scrollbar width
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

// Fix mobile nav bar
const documentHeight = () => {
	const doc = document.documentElement
	doc.style.setProperty('--height', `${window.innerHeight}px`)
}

window.addEventListener('resize', documentHeight)
documentHeight()

// Get header height
const headerHeight = () => {
	const header = document.querySelector('.header')
	if (!header) return
	const doc = document.documentElement
	doc.style.setProperty('--header-height', `${header.offsetHeight}px`)
}

headerHeight()

// Burger
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
	document.body.style.paddingRight = 0
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
		menuIsOpen || formIsOpen ? closeOverlay() : openOverlay('menu')
	})
}

document.addEventListener('keydown', handleEscapeKey)

// Form validation

formValidation('.form')
formValidation('.form--fedback')

servicesBtnsHandler()

dropdownHandler()

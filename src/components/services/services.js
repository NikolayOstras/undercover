import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

export const servicesSwiper = new Swiper('.services-swiper', {
	modules: [Navigation, Pagination],
	loop: true,
	lazy: true,
	navigation: {
		nextEl: '.button-next',
		prevEl: '.button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
	},
})

export const servicesBtnsHandler = () => {
	const btns = document.querySelectorAll('.service-item')
	if (btns.length) {
		const setActiveClass = btn => {
			btns.forEach(el => {
				el.classList.remove('is-active')
			})
			btn.classList.add('is-active')
		}

		btns.forEach(btn => {
			btn.addEventListener('click', () => {
				setActiveClass(btn)
				const itemId = btn.getAttribute('data-id')
				servicesSwiper.slideTo(itemId)
			})
		})
		servicesSwiper.on('slideChange', () => {
			const activeSlideIndex = servicesSwiper.realIndex
			console.log(activeSlideIndex)
			const activeBtn = document.querySelector(
				`.service-item[data-id="${activeSlideIndex}"]`
			)
			if (activeBtn) {
				btns.forEach(el => {
					el.classList.remove('is-active')
				})
				setActiveClass(activeBtn)
			}
		})
	}
}

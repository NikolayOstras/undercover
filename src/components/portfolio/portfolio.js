export const dropdownHandler = () => {
	const dropdownButton = document.querySelector('.dropdown__button')
	const dropdownList = document.querySelector('.dropdown__list')
	const dropdownItems = document.querySelectorAll('.dropdown__item')
	if (!dropdownButton || !dropdownList || !dropdownItems) return

	const closeDropdown = () => {
		dropdownList.style.display = 'none'
		dropdownButton.classList.remove('is-active')
	}

	dropdownButton.addEventListener('click', () => {
		const computedStyle = window.getComputedStyle(dropdownList)
		if (computedStyle.display === 'none') {
			dropdownButton.classList.add('is-active')
			dropdownList.style.display = 'flex'
		} else {
			closeDropdown()
		}
	})

	dropdownItems.forEach(item => {
		item.addEventListener('click', () => {
			const selectedText = item.textContent
			dropdownButton.textContent = selectedText
			closeDropdown()
		})
	})

	document.addEventListener('click', event => {
		const target = event.target
		if (!target.closest('.dropdown') && dropdownList.style.display !== 'none') {
			closeDropdown()
		}
	})

	document.addEventListener('keydown', event => {
		if (event.key === 'Escape' && dropdownList.style.display !== 'none') {
			closeDropdown()
		}
	})
}

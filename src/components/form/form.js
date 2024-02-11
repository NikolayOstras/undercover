// Helper functions
function showErrorMessage(input, message) {
	const errorContainer = input.nextElementSibling
	errorContainer.textContent = message
	errorContainer.style.display = 'block'
}

function hideErrorMessage(input) {
	const errorContainer = input.nextElementSibling
	errorContainer.textContent = ''
	errorContainer.style.display = 'none'
}

function isValidEmail(email) {
	const emailRegex = /^\S+@\S+\.\S+$/
	return emailRegex.test(email)
}
export const formValidation = formSelector => {
	const form = document.querySelector(formSelector)
	if (!form) return

	const nameInput = form.querySelector('input[type="text"]')
	const emailInput = form.querySelector('input[type="email"]')
	const messageInput = form.querySelector('textarea')

	nameInput.addEventListener('input', () => {
		if (!nameInput.value) {
			showErrorMessage(nameInput, 'Please enter your name.')
		} else {
			hideErrorMessage(nameInput)
		}
	})

	emailInput.addEventListener('input', () => {
		if (!emailInput.value) {
			showErrorMessage(emailInput, 'Please enter your email.')
		} else if (!isValidEmail(emailInput.value)) {
			showErrorMessage(emailInput, 'Invalid email format.')
		} else {
			hideErrorMessage(emailInput)
		}
	})

	messageInput.addEventListener('input', () => {
		if (!messageInput.value) {
			showErrorMessage(messageInput, 'Please enter your message.')
		} else {
			hideErrorMessage(messageInput)
		}
	})

	form.addEventListener('submit', event => {
		event.preventDefault()
		closeOverlay()

		// Additional form submission logic goes here
	})
}

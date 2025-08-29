const popup = {
	init() {
		this.documentListener()
		this.initEvent()
	},
	initEvent() {
		const $popupBtn = $('[data-popup-btn-id]')
		const $closeBtn = $('.modal-close-btn')

		$popupBtn.on('click', function () {
			const popupId = $(this).data('popup-btn-id')
			dropdown.closeAllDropdowns()

			$(`[data-popup-id="${popupId}"]`).removeClass('hidden')
		})

		$closeBtn.on('click', () => {
			this.closeAllPopups()
		})

		if ($('[data-popup-close]')) {
			$('[data-popup-close]').on('click', () => {
				this.closeAllPopups()
			})
		}
	},
	closeAllPopups() {
		$('.modal').addClass('hidden')
	},
	documentListener() {
		$(document).on('click', e => {
			if (
				!$(e.target).closest('.modal-body').length &&
				!$(e.target).closest('[data-popup-btn-id]').length
			) {
				this.closeAllPopups()
			}
		})
	},
}

$(document).ready(function () {
	popup.init()
})

const prompter = {
	prompterModal: null,
	prompterBtn: null,
	closeBtn: null,

	init() {
		this.initEvent()
		this.initDrag()
	},
	initEvent() {
		this.prompterModal = $('.prompter-modal')
		this.prompterBtn = $('#prompter-btn')
		this.closeBtn = this.prompterModal.find('.btn-close')

		this.prompterBtn.on('click', () => {
			this.openPrompterPopup()
			dropdown.closeAllDropdowns()
		})
		this.closeBtn.on('click', () => {
			this.closePrompterPopup()
		})
	},
	initDrag() {
		const $prompterDragBtn = this.prompterModal.find('.prompter-drag-button')
		let isDragging = false
		let startX, startY, initialLeft, initialTop

		$prompterDragBtn.on('mousedown', e => {
			isDragging = true
			startX = e.clientX
			startY = e.clientY

			const currentLeft = parseInt(this.prompterModal.css('left')) || 0
			const currentTop = parseInt(this.prompterModal.css('top')) || 0

			initialLeft = currentLeft
			initialTop = currentTop

			$prompterDragBtn.css('cursor', 'grabbing')
			e.preventDefault()
		})

		$(document).on('mousemove', e => {
			if (!isDragging) return

			const deltaX = e.clientX - startX
			const deltaY = e.clientY - startY

			const newLeft = initialLeft + deltaX
			const newTop = initialTop + deltaY

			this.prompterModal.css({
				left: newLeft + 'px',
				top: newTop + 'px',
			})
		})

		$(document).on('mouseup', () => {
			if (isDragging) {
				isDragging = false
				$prompterDragBtn.css('cursor', 'grab')
			}
		})
	},
	openPrompterPopup() {
		this.prompterModal.removeClass('hidden')
	},
	closePrompterPopup() {
		this.prompterModal.addClass('hidden')
	},
}

$('document').ready(function () {
	prompter.init()
})

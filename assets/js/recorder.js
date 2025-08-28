const recorder = {
	startRecordBtn: $('#start-record'),

	init() {
		this.initEvent()
		this.initAspectRatio()
		this.initLayout()
		this.initChooseCamera()
		this.initStartRecord()
	},

	initEvent() {
		const $hideCameraBtn = $('#recorder-nav-camera')
		const $muteMicBtn = $('#recorder-nav-mic')
		$('#hide-camera').on('click', () => {
			$hideCameraBtn.addClass('disabled')
			dropdown.closeAllDropdowns()
			if (
				$hideCameraBtn.hasClass('disabled') &&
				$muteMicBtn.hasClass('disabled')
			) {
				this.showRecordScreenBlocked()
			}
		})
		$('#mute-mic').on('click', () => {
			$muteMicBtn.addClass('disabled')
			$('.record-alert-mic').removeClass('hidden')
			dropdown.closeAllDropdowns()
			if (
				$hideCameraBtn.hasClass('disabled') &&
				$muteMicBtn.hasClass('disabled')
			) {
				this.showRecordScreenBlocked()
			}
		})

		$('.record-alert-mic .btn').on('click', () => {
			$('#recorder-nav-mic').removeClass('disabled')
			$('.record-alert-mic').addClass('hidden')
			this.showRecordScreen()
		})
		$('.record-alert-mic .close-btn').on('click', function () {
			$('.record-alert-mic').addClass('hidden')
		})
	},
	showRecordScreen() {
		$('#record-screen-blocked').addClass('hidden')
		$('#record-screen').removeClass('hidden')
		this.startRecordBtn.removeAttr('disabled')
	},
	showRecordScreenBlocked() {
		$('#record-screen-blocked').removeClass('hidden')
		$('#record-screen').addClass('hidden')
		this.startRecordBtn.attr('disabled', true)
	},

	initAspectRatio() {
		const $aspectRatioItems = $('.recorder-aspect-ratio-list li')
		$aspectRatioItems.on('click', function (e) {
			$aspectRatioItems.removeClass('active')
			$(this).addClass('active')
			$('#record-screen').removeClass(function (index, className) {
				return (className.match(/(^|\s)aspect-\S+/g) || []).join(' ')
			})
			$('#record-screen').addClass(
				`aspect-${$(this).data('aspect-ratio').replace(':', '-')}`
			)
		})
	},
	initLayout() {
		const $layoutItems = $('.recorder-layout-list input')
		$layoutItems.on('change', function (e) {
			$('#record-screen').removeClass(function (index, className) {
				return (className.match(/(^|\s)\S+-layout-[^\s]+/g) || []).join(' ')
			})
			$('#record-screen').addClass(`${$(this).attr('id')}`)
		})
	},
	initChooseCamera() {
		const $chooseCameraList = $('#choose-camera-list')
		$chooseCameraList.on('click', '.recorder-nav-dropdown-item', function (e) {
			console.log($chooseCameraList.find('.recorder-nav-dropdown-item'))

			$chooseCameraList
				.find('.recorder-nav-dropdown-item')
				.removeClass('selected')
			$(this).addClass('selected')
			const currentText = $(this).find('span').text()
			$(this)
				.closest('.recorder-nav-dropdown-selectable-item')
				.find('.recorder-nav-dropdown-selectable-current')
				.text(currentText)
		})
	},
	initStartRecord() {
		this.startRecordBtn.on('click', function (e) {
			$(this).addClass('hidden')
			$('.record-start-nav').removeClass('hidden')
		})
	},
}

$(document).ready(function () {
	recorder.init()
})

const recorder = {
	init() {
		this.initEvent()
		this.initAspectRatio()
		this.initLayout()
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
	},
	showRecordScreenBlocked() {
		$('#record-screen-blocked').removeClass('hidden')
		$('#record-screen').addClass('hidden')
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
}

$(document).ready(function () {
	recorder.init()
})

const recorderBackground = {
	init() {
		this.initVideo()
	},
	initVideo() {
		const $bgVideoTypeNav = $('.bg-video-type-nav')
		const $bgVideoTypeInput = $('input[name="bg-video-type"]')
		const $bgVideoTypeColorList = $('#bg-video-type-color-list')
		const $bgVideoTypeImageList = $('#bg-video-type-image-list')

		$bgVideoTypeInput.on('change', function () {
			if ($('#bg-video-type-color').is(':checked')) {
				$bgVideoTypeNav.addClass('active')
				$bgVideoTypeColorList.removeClass('hidden')
				$bgVideoTypeImageList.addClass('hidden')
			} else {
				$bgVideoTypeNav.removeClass('active')
				$bgVideoTypeColorList.addClass('hidden')
				$bgVideoTypeImageList.removeClass('hidden')
			}
		})

		$bgVideoTypeColorList.find('li').on('click', function () {
			const $this = $(this)
			const $bgVideoPreview = $('#bg-video-preview')

			$bgVideoTypeColorList.find('li').removeClass('active')
			$this.addClass('active')
			$bgVideoPreview.addClass('hidden')

			if ($(this).closest('.recorder-bg-gradient-list').length > 0) {
				$('#record-screen').css('background-image', $(this).css('background'))
			} else {
				$('#record-screen').css(
					'background-color',
					$(this).css('background-color')
				)
			}
		})

		$bgVideoTypeImageList.find('li').on('click', function () {
			const $this = $(this)
			$bgVideoTypeImageList.find('li').removeClass('active')
			$this.addClass('active')
			const $bgVideoPreview = $('#bg-video-preview')
			$bgVideoPreview.removeClass('hidden')
			$bgVideoPreview.attr('src', $this.find('img').attr('src'))
		})
	},
}

$(document).ready(function () {
	recorderBackground.init()
})

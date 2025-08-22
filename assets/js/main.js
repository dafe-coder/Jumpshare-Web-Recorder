$(document).ready(function () {
	// Switcher
	$(document).on('change', ".switcher input[type='checkbox']", function () {
		const switcherLabel = $(this).closest('.switcher').find('.switcher-label')
		switcherLabel.text(
			$(this).is(':checked')
				? switcherLabel.attr('data-switcher-label-on')
				: switcherLabel.attr('data-switcher-label-off')
		)
	})

	// Recorder
	const $webcam = $('.recorder-box-webcam')
	const $screen = $('.recorder-box-screen')
	const $resizerAll = $('.recorder-resizer')
	const $recorderResizerNavItems = $('.recorder-resizer-nav')

	$webcam.on('click', function (e) {
		$resizerAll.hide()
		$screen.removeClass('active')
		$recorderResizerNavItems.hide()
		if (!$webcam.hasClass('active')) {
			$webcam.addClass('active')
			$recorderResizerNavItems.show()
			$webcam.find('.recorder-resizer').show()
		} else {
			$webcam.removeClass('active')
			$recorderResizerNavItems.hide()
			$webcam.find('.recorder-resizer').hide()
		}
	})

	$screen.on('click', function (e) {
		$resizerAll.hide()
		$webcam.removeClass('active')
		$recorderResizerNavItems.hide()
		if ($screen.hasClass('active')) {
			$screen.removeClass('active')
			$screen.find('.recorder-resizer').hide()
		} else {
			$screen.addClass('active')
			$screen.find('.recorder-resizer').show()
		}
	})
})

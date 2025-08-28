const dropdown = {
	init() {
		this.bootstrap()
		this.documentListener()
	},
	bootstrap() {
		this.dropdownBtns = $('.dropdown-btn')

		this.dropdownBtns.on('click', e => {
			e.stopPropagation()

			const $btn = $(e.currentTarget)
			const $dropdownWrapper = $btn.closest('.dropdown-wrapper')
			this.closeSiblingDropdowns($dropdownWrapper)
			prompter.closePrompterPopup()

			this.toggleDropdown($dropdownWrapper)
		})
	},

	documentListener() {
		$(document).on('click', e => {
			const $target = $(e.target)
			const $closestDropdown = $target.closest('.dropdown-wrapper')

			if (!$closestDropdown.length) {
				this.closeAllDropdowns()
			}
		})
	},

	closeSiblingDropdowns($currentDropdown) {
		const $parent = $currentDropdown.parent()
		const $siblings = $parent.find('> .dropdown-wrapper')

		$siblings.each((index, sibling) => {
			const $sibling = $(sibling)
			if (!$sibling.is($currentDropdown)) {
				this.closeDropdownWithNested($sibling)
			}
		})
	},

	closeAllDropdowns() {
		$('.dropdown-body').addClass('hidden')
		$('.dropdown-wrapper').removeClass('active')
		$('.dropdown-btn').removeClass('active')
	},

	closeDropdown($dropdownWrapper) {
		const $dropdown = $dropdownWrapper || $('.dropdown-wrapper')
		$dropdown.find('.dropdown-body').first().addClass('hidden')
		$dropdown.removeClass('active')
		$dropdown.find('.dropdown-btn').removeClass('active')
	},

	closeDropdownWithNested($dropdownWrapper) {
		const $dropdown = $dropdownWrapper || $('.dropdown-wrapper')

		$dropdown.find('.dropdown-body').first().addClass('hidden')

		$dropdown.find('.dropdown-body').addClass('hidden')
		$dropdown.removeClass('active')
		$dropdown.find('.dropdown-btn').removeClass('active')
	},

	toggleDropdown($dropdownWrapper) {
		const $dropdown = $dropdownWrapper || $('.dropdown-wrapper')
		const $dropdownBody = $dropdown.find('.dropdown-body').first()
		const isHidden = $dropdownBody.hasClass('hidden')

		if (isHidden) {
			$dropdownBody.removeClass('hidden')
			$dropdown.addClass('active')
			$dropdown.find('.dropdown-btn').addClass('active')
		} else {
			this.closeDropdownWithNested($dropdown)
		}
	},

	closeByCloseBtn() {
		$(document).on('click', '.dropdown-body .btn', e => {
			const $btn = $(e.currentTarget)
			const $dropdownBody = $btn.closest('.dropdown-body')

			if (
				$btn.find('svg use[href="#icon-close"]').length ||
				$btn.hasClass('close-btn')
			) {
				e.stopPropagation()
				$dropdownBody.addClass('hidden')
				$dropdownWrapper.removeClass('active')
				$dropdownWrapper.find('.dropdown-btn').removeClass('active')
			}
		})
	},
}

$(document).ready(function () {
	dropdown.init()
	dropdown.closeByCloseBtn()
})

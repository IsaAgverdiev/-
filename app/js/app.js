
document.addEventListener('DOMContentLoaded', () => {
	let select = function () {
		let selectHeader = document.querySelectorAll('.select__header');
		let selectItem = document.querySelectorAll('.select__item');

		selectHeader.forEach(item => {
			item.addEventListener('click', toggleOpen)
		});

		selectItem.forEach(item => {
			item.addEventListener('click', selectChoose)
		});

		function toggleOpen() {
			this.parentElement.classList.toggle('active');
			selectHeader.forEach(item => {
				if (item !== this) item.parentElement.classList.remove('active')
			});
		}

		function selectChoose() {
			let selectText = this.innerText;
			let select = this.closest('.select');
			let currentText = select.querySelector('.select__current');
			currentText.classList.add('select__current--active')
			currentText.innerText = selectText;
			select.classList.remove('active')
		}
	}

	let checkbox = function () {
		let itemsTemp = document.querySelector('.form__cargo-itemsTemp');
		let checkbox = document.querySelector('.form__cargo-checkbox');
		function openItemsTemp() {
			itemsTemp.classList.toggle('form__cargo-itemsTemp--active')
		}
		checkbox.addEventListener('click', openItemsTemp)
	};

	let radioButtons = function () {
		let radioButtons = document.querySelectorAll('.form__time-radio');
		radioButtons.forEach(item => {
			if (item) {
				item.addEventListener('click', disabledBtn)
			};
		});

		function disabledBtn() {
			let id = this.id;
			let timeBtn = document.querySelectorAll('.form__time-btn');
			if (id == 'radio-1') {
				timeBtn[0].classList.remove('form__time-btn--disabled')
				timeBtn[1].classList.add('form__time-btn--disabled')
			} else {
				timeBtn[1].classList.remove('form__time-btn--disabled')
				timeBtn[0].classList.add('form__time-btn--disabled')
			}
		}
	}

	select();
	checkbox();
	radioButtons();
});


document.addEventListener('DOMContentLoaded', () => {
	let select = function () {
		let selectHeader = document.querySelectorAll('.select__header');
		let selectItem = document.querySelectorAll('.select__item')

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
		// function checkedBox() {
		// }
		checkbox.addEventListener('click', openItemsTemp)
	}

	select();
	checkbox();
});

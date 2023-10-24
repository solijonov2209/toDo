let elForm = document.querySelector('.js-form');
let elInput = document.querySelector('.js-input');
let elList = document.querySelector('.js-list');

let array = [];
elForm.addEventListener('submit', function (evt) {
	evt.preventDefault();
	array.push({
		id: array.length + 1,
		text: elInput.value,
		isCompleted: false,
	});
	elInput.value = '';
	elList.innerHTML = '';

	for (let item of array) {
		let elItem = document.createElement('li');
		let elStrong = document.createElement('strong');
		let elSpan = document.createElement('span');
		let elInput = document.createElement('input');
		elStrong.textContent = `ID: ${item.id} `;
		elSpan.textContent = item.text;
		elInput.type = 'checkbox';
		elInput.checked = item.isCompleted;
		elItem.classList.add("item")
		elItem.appendChild(elStrong);
		elItem.appendChild(elSpan);
		elItem.appendChild(elInput);
		elList.appendChild(elItem);
	}
});
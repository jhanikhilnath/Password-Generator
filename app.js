/* Variables */
let lets = 'QWERTYUIOPASDFGHJKLZXCVBNM' + 'qwertyuiopasdfghjklzxcvbnm' + '1234567890' + '[]{}!@#;:';
let pwsel = document.querySelector('.pw');
let mainsel = document.querySelector('main');
let valuesel = document.querySelector('input');
let copysel = document.querySelector('.copy');

/* Main Function for Calc PW */
function generate(no) {
	let pw = '';
	for (let i = 1; i <= no; i++) {
		let op = Math.floor(Math.random() * lets.length);
		pw = pw + lets[op];
	}
	return pw;
}

document.querySelector('form').addEventListener('submit', function (e) {
	e.preventDefault();

	/* 	Making PW into existence */
	let num = Number(valuesel.value);
	if (num >= 4 && num <= 42) {
		pwsel.textContent = generate(num);
	} else {
		alert('Enter More then 4 characters and less than 42 characters');
	}

	/* 	The max and min limit */
	if (pwsel.textContent.length > 32) {
		mainsel.style.width = '52%';
	} else {
		mainsel.style.width = '42%';
	}
	valuesel.value = '';
	copysel.style.display = 'block';
});

copysel.addEventListener('click', function () {
	navigator.clipboard.writeText(pwsel.textContent).then(console.log('Copied!!'));
});

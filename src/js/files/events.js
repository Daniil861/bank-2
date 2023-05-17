import { initStartData } from './script.js';

// Объявляем слушатель событий "клик"

document.addEventListener('click', (e) => {
	let targetElement = e.target;

	const welcomeScreen = document.querySelector('.welcome');

	if (targetElement.closest('.welcome__button')) {
		welcomeScreen.classList.add('_hide');
	}

	if (targetElement.closest('.preloader__button')) {
		location.href = 'main.html';
	}

})









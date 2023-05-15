
import { initStartData } from './script.js';

// Объявляем слушатель событий "клик"

document.addEventListener('click', (e) => {
	let targetElement = e.target;

	const welcomeScreen = document.querySelector('.welcome');

	// initStartData();

	if (targetElement.closest('.welcome__button')) {
		welcomeScreen.classList.add('_hide');
	}


})







"use strict";

function main() {
	const mobileNavigationControl = document.getElementById('mobile-navigation-menu-control');
	const navigationMenu = document.getElementById('navigation-menu');
	
	mobileNavigationControl.addEventListener('click', function() {
		if (this.getAttribute('aria-expanded') === 'true') {
			this.setAttribute('aria-expanded', 'false');
		} else {
			this.setAttribute('aria-expanded', 'true');
		}
		navigationMenu.classList.toggle('is-active');
		console.log('mobileNavigationControl toggle');
	});
}

window.addEventListener('DOMContentLoaded', (event) => {
	console.log('DOM fully loaded and parsed');
	main();
});

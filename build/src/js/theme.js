export function theme () {
	const themeTriggers = document.querySelectorAll('[data-theme]');

	themeTriggers.forEach(trigger => {
		trigger.addEventListener('click', () => {
			let theme = trigger.dataset.theme;
			document.documentElement.className = theme;
		});
	});
}

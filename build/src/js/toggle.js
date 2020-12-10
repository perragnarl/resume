export function toggle () {
	const trigger = document.querySelector('[data-js="trigger"]');
	const target = document.querySelector('[data-js="target"]');

	trigger.addEventListener('click', () => {
		target.classList.add('expanded');
		target.dataset.js = '';
		trigger.remove();
	});
}

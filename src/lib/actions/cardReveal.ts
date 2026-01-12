export function cardReveal(node: HTMLElement) {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// Get a random angle between -15 and 15 degrees
					const angle = (Math.random() - 0.5) * 30;
					
					// Set animation style
					node.style.animation = `cardRevealAnimation 0.6s ease-out forwards`;
					node.style.setProperty('--rotate-angle', `${angle}deg`);
					
					// Unobserve after animation
					observer.unobserve(node);
				}
			});
		},
		{
			threshold: 0.1,
			rootMargin: '0px 0px -50px 0px'
		}
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}

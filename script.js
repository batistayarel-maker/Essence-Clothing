// Aquí puedes agregar interactividad si quieres
console.log("Nexus Clothing cargado ✅");

// Carrusel para BESTSELLER
document.addEventListener('DOMContentLoaded', function() {
	// Animación de entrada para elementos con .fade-in
	document.querySelectorAll('.fade-in').forEach(function(el) {
		el.classList.add('fade-in');
	});

	// Carrusel BESTSELLER con autoplay
	const track = document.querySelector('.carousel-track');
	const items = document.querySelectorAll('.carousel .producto');
	const prevBtn = document.querySelector('.carousel-btn.prev');
	const nextBtn = document.querySelector('.carousel-btn.next');
	let current = 0;
	let autoPlayInterval = null;
	let isPaused = false;

	function updateCarousel() {
		track.style.transform = `translateX(-${current * 100}%)`;
		items.forEach((item, idx) => {
			item.classList.toggle('active', idx === current);
		});
	}

	function startAutoplay() {
		if (autoPlayInterval) return;
		autoPlayInterval = setInterval(() => {
			if (!isPaused) {
				current = (current + 1) % items.length;
				updateCarousel();
			}
		}, 3000);
	}
	function stopAutoplay() {
		clearInterval(autoPlayInterval);
		autoPlayInterval = null;
	}

	// Inicializa el carrusel con el primer elemento activo
	updateCarousel();
	startAutoplay();

	prevBtn.addEventListener('click', function() {
		current = (current - 1 + items.length) % items.length;
		updateCarousel();
	});
	nextBtn.addEventListener('click', function() {
		current = (current + 1) % items.length;
		updateCarousel();
	});

	// Pausar autoplay en hover/touch
	track.addEventListener('mouseenter', function() { isPaused = true; });
	track.addEventListener('mouseleave', function() { isPaused = false; });
	track.addEventListener('touchstart', function() { isPaused = true; });
	track.addEventListener('touchend', function() { isPaused = false; });

	// Swipe para móvil
	let startX = null;
	track.addEventListener('touchstart', function(e) {
		startX = e.touches[0].clientX;
	});
	track.addEventListener('touchend', function(e) {
		if (startX === null) return;
		let endX = e.changedTouches[0].clientX;
		if (endX - startX > 40) {
			prevBtn.click();
		} else if (startX - endX > 40) {
			nextBtn.click();
		}
		startX = null;
	});
});

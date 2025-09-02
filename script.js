// Aquí puedes agregar interactividad si quieres
console.log("Nexus Clothing cargado ✅");

// Carrusel para BESTSELLER
document.addEventListener('DOMContentLoaded', function() {
	const track = document.querySelector('.carousel-track');
	const items = document.querySelectorAll('.carousel .producto');
	const prevBtn = document.querySelector('.carousel-btn.prev');
	const nextBtn = document.querySelector('.carousel-btn.next');
	let current = 0;

	function updateCarousel() {
		track.style.transform = `translateX(-${current * 100}%)`;
	}

	prevBtn.addEventListener('click', function() {
		current = (current - 1 + items.length) % items.length;
		updateCarousel();
	});
	nextBtn.addEventListener('click', function() {
		current = (current + 1) % items.length;
		updateCarousel();
	});

	// Optional: swipe for mobile
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

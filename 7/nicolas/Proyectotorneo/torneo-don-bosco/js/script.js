// CARRUSEL AUTOMÁTICO Y NAVEGACIÓN
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let currentSlide = 0;
    let autoSlideInterval;

    // Función para mostrar slide actual
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    // Siguiente slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Anterior slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // INICIAR CARRUSEL AUTOMÁTICO (15 segundos = 15000ms)
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 15000);
    }

    // PAUSAR CARRUSEL
    function pauseAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // REANUDAR CARRUSEL
    function resumeAutoSlide() {
        pauseAutoSlide();
        startAutoSlide();
    }

    // EVENTOS
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resumeAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resumeAutoSlide();
    });

    // Pausar al hacer hover
    const heroSection = document.querySelector('.hero-section');
    heroSection.addEventListener('mouseenter', pauseAutoSlide);
    heroSection.addEventListener('mouseleave', resumeAutoSlide);

    // INICIAR CARRUSEL
    showSlide(currentSlide);
    startAutoSlide();
});

// Cards Desplegables
document.querySelectorAll('.expandable-card').forEach(card => {
    card.addEventListener('click', function() {
        const content = this.querySelector('.card-content');
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.overflow = 'visible';
        this.style.cursor = 'default';
        this.classList.add('expanded');
    });
});

// Smooth Scroll para Navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Formulario Contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Mensaje enviado correctamente! Gracias por contactarnos.');
    this.reset();
});
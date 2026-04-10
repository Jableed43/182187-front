const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5;
        this.speedY = Math.random() * 0.7 + 0.1; // Velocidad de caída
        this.opacity = Math.random();   
    }

    update() {
        this.y += this.speedY;
        // Si sale de la pantalla, vuelve arriba
        if (this.y > canvas.height) {
            this.y = 0;
            this.x = Math.random() * canvas.width;
        }
    }

    draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function init() {
    for (let i = 0; i < 200; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

init();
animate();





const nav = document.querySelector('.container-nav');
let isScrolling;

window.addEventListener('scroll', () => {
  // 1. Mientras el usuario scrollea, ocultamos la barra
  nav.classList.add('nav-hidden');

  // 2. Limpiamos el temporizador en cada movimiento
  window.clearTimeout(isScrolling);

  // 3. Establecemos un temporizador que se ejecuta cuando el scroll para
  isScrolling = setTimeout(() => {
    // Cuando pasan 150ms sin movimiento, volvemos a mostrarla
    nav.classList.remove('nav-hidden');
  }, 200); // Puedes ajustar este tiempo (ms) a tu gusto
});
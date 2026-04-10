const imagenes = document.querySelectorAll(".grid-galeria img");

let indexActual = 0;

imagenes.forEach((img, index) => {
    img.addEventListener("click", () => {
        abrirModal(index);
    });
});

function abrirModal(index) {
    const modal = document.getElementById("modal");

    modal.style.display = "block";
    indexActual = index;

    cambiarImagen();
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

function cerrarFuera(e) {
    if (e.target.id === "modal") {
        cerrarModal();
    }
}

function siguiente() {
    indexActual = (indexActual + 1) % imagenes.length;
    cambiarImagen();
}

function anterior() {
    indexActual = (indexActual - 1 + imagenes.length) % imagenes.length;
    cambiarImagen();
}

function cambiarImagen() {
    const imgModal = document.getElementById("imgModal");

    imgModal.classList.remove("fade-in");

    setTimeout(() => {
        imgModal.src = imagenes[indexActual].src;
        imgModal.classList.add("fade-in");
    }, 100);
}

document.addEventListener("keydown", function(e) {
    const modal = document.getElementById("modal");

    if (modal.style.display === "block") {
        if (e.key === "ArrowRight") siguiente();
        if (e.key === "ArrowLeft") anterior();
        if (e.key === "Escape") cerrarModal();
    }
});
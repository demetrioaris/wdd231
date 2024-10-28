const imgs = document.querySelectorAll("[data-img-url]");
const slider = document.querySelector(".slider");
const indexContainer = document.querySelector(".index-container");
const arrowButtons = document.querySelectorAll("[data-index-change]");
let currIndex = 0;
let autoSlideInterval;
let isAutoSliding = false;

// Configurar imágenes y botones de índice dinámicamente
imgs.forEach((div, index) => {
    div.style.backgroundImage = `url(./${div.getAttribute("data-img-url")})`;

    const button = document.createElement("button");
    button.addEventListener("click", () => slide(index));
    indexContainer.appendChild(button);
});

const indexButtons = document.querySelectorAll(".index-container > button");
indexButtons[0].style.backgroundColor = "white"; // Marca el primer botón como activo

// Función para cambiar de imagen en el slider
function slide(nextIndex) {
    nextIndex = (nextIndex + imgs.length) % imgs.length; // Ajuste circular de índice

    indexButtons[currIndex].style.backgroundColor = "";
    indexButtons[nextIndex].style.backgroundColor = "white";
    slider.style.transform = `translateX(-${(nextIndex / imgs.length) * 100}%)`;
    currIndex = nextIndex;
}

// Configurar botones de flechas
arrowButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const indexChange = parseInt(button.getAttribute("data-index-change"), 10);
        slide(currIndex + indexChange);
    });
});

// Auto deslizamiento
function startAutoSlide() {
    if (!isAutoSliding) {
        autoSlideInterval = setInterval(() => slide(currIndex + 1), 5000);
        isAutoSliding = true;
    }
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
    isAutoSliding = false;
}

// Iniciar auto deslizamiento y detenerlo al interactuar
startAutoSlide();

document.querySelector(".nav-container").addEventListener("mouseover", stopAutoSlide);
document.querySelector(".nav-container").addEventListener("mouseout", startAutoSlide);

// Restablecer auto deslizamiento en dispositivos táctiles
document.addEventListener("touchstart", (e) => {
    if (!e.target.closest(".nav-container")) {
        startAutoSlide();
    }
});

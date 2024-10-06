export function initializeCommon() {
    document.addEventListener("DOMContentLoaded", () => {
        const hamButton = document.querySelector("#menu");
        const navigation = document.querySelector("nav");

        // Toggle navigation menu
        hamButton.addEventListener("click", () => {
            navigation.classList.toggle("open");
            hamButton.classList.toggle("open");
        });
    });
    document.addEventListener("DOMContentLoaded", () => {
        const bodyId = document.body.id; // Obtener el ID del <body>
        const navLinks = document.querySelectorAll("nav .nav-a");

        navLinks.forEach((link) => {
            // Verificar si el enlace contiene el href correspondiente al id de la página
            if (
                link.getAttribute("href").includes(bodyId.replace("-page", ""))
            ) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    });
}

export function initializeCommon() {
    document.addEventListener("DOMContentLoaded", () => {
        const hamButton = document.querySelector("#menu");
        const navigation = document.querySelector("nav");

        hamButton.addEventListener("click", () => {
            navigation.classList.toggle("open");
            hamButton.classList.toggle("open");
        });

        document.getElementById("currentyear").textContent =
            new Date().getFullYear();
        document.getElementById(
            "lastModified"
        ).textContent = `Last Modified: ${document.lastModified}`;

        const options = navigation.getElementsByTagName("a");

        for (let i = 0; i < options.length; i++) {
            options[i].addEventListener("click", function () {
                const current = document.getElementsByClassName("active");

                if (current.length > 0) {
                    current[0].className = current[0].className.replace(
                        " active",
                        ""
                    );
                }

                this.className += " active";
            });
        }
    });
}

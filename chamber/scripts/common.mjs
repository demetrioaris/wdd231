export function initializeCommon() {
    document.addEventListener("DOMContentLoaded", () => {
        // Menu toggle functionality
        const hamButton = document.querySelector("#menu");
        const navigation = document.querySelector("nav");

        hamButton.addEventListener("click", () => {
            navigation.classList.toggle("open");
            hamButton.classList.toggle("open");
        });

        // Update footer with the current year and last modified date
        document.getElementById("currentyear").textContent =
            new Date().getFullYear();
        document.getElementById(
            "lastModified"
        ).textContent = `Last Modified: ${document.lastModified}`;

        // Navigation bar active function
        const options = navigation.getElementsByTagName("a");

        for (let i = 0; i < options.length; i++) {
            options[i].addEventListener("click", function () {
                const current = document.getElementsByClassName("active");

                // Only try to remove the active class if there is an existing active element
                if (current.length > 0) {
                    current[0].className = current[0].className.replace(
                        " active",
                        ""
                    );
                }

                // Add active class to the clicked element
                this.className += " active";
            });
        }
    });
}

var actual = new Date();

function mostrarCalendario(year, month) {
    var now = new Date(year, month - 1, 1);
    var last = new Date(year, month, 0);
    var primerDiaSemana = now.getDay(); // No adjustment needed, Sunday is 0
    var ultimoDiaMes = last.getDate();
    var dia = 0;
    var resultado = "<tr>"; // No background color here
    var diaActual = 0;
    console.log(ultimoDiaMes);
    var last_cell = primerDiaSemana + ultimoDiaMes;

    // hacemos un bucle hasta 42 (6 filas de 7 días)
    for (var i = 1; i <= 42; i++) {
        if (i == primerDiaSemana + 1) {
            // determinamos en qué día empieza
            dia = 1;
        }
        if (i <= primerDiaSemana || i >= last_cell) {
            // celda vacía
            resultado += "<td>&nbsp;</td>";
        } else {
            // mostramos el día
            if (
                dia == actual.getDate() &&
                month == actual.getMonth() + 1 &&
                year == actual.getFullYear()
            )
                resultado += "<td class='hoy'>" + dia + "</td>"; // Día actual con la clase 'hoy'
            else
                resultado +=
                    "<td style='background-color: silver;'>" + dia + "</td>"; // Solo aplica el fondo en los días
            dia++;
        }
        if (i % 7 == 0) {
            if (dia > ultimoDiaMes) break;
            resultado += "</tr><tr>\n";
        }
    }
    resultado += "</tr>";

    var meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ];

    // Calculamos el siguiente mes y año
    var nextMonth = month + 1;
    var nextYear = year;

    if (month + 1 > 12) {
        nextMonth = 1;
        nextYear = year + 1;
    }

    // Calculamos el anterior mes y año
    var prevMonth = month - 1;
    var prevYear = year;

    if (month - 1 < 1) {
        prevMonth = 12;
        prevYear = year - 1;
    }

    // Actualizamos el contenido del caption y el tbody
    document
        .getElementById("calendar")
        .getElementsByTagName("caption")[0].innerHTML =
        "<div>" +
        meses[month - 1] +
        " / " +
        year +
        "</div>" +
        "<div><a href='javascript:void(0)' onclick='mostrarCalendario(" +
        prevYear +
        "," +
        prevMonth +
        ")'>&lt;</a> " +
        "<a href='javascript:void(0)' onclick='mostrarCalendario(" +
        nextYear +
        "," +
        nextMonth +
        ")'>&gt;</a></div>";

    document
        .getElementById("calendar")
        .getElementsByTagName("tbody")[0].innerHTML = resultado;
}

// Inicializar el calendario con el mes actual
mostrarCalendario(actual.getFullYear(), actual.getMonth() + 1);

document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll(".lazy-image");

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute("data-src");
                img.classList.remove("lazy-image");
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach((image) => {
        imageObserver.observe(image);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let currentImageIndex = 0;
    const imageContainer = document.querySelector(".article-02 img");
    const descriptionContainer = document.querySelector(".article-02 h3");

    // Fetch images and descriptions from the JSON file
    fetch("data/discover.json")
        .then((response) => response.json())
        .then((events) => {
            // Function to update image and description
            function updateImage() {
                const event = events[currentImageIndex];
                imageContainer.src = `images/${event.image}`;
                descriptionContainer.textContent = event.description;
                imageContainer.loading = `lazy`;
                // Move to the next image after 3 seconds
                currentImageIndex = (currentImageIndex + 1) % events.length;
            }

            // Initial load
            updateImage();

            // Update image every 3 seconds with animation
            setInterval(() => {
                imageContainer.classList.remove("fade-in");
                void imageContainer.offsetWidth; // Re-trigger CSS animation
                imageContainer.classList.add("fade-in");
                updateImage();
            }, 10000);
        });
});

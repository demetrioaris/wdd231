export function initializeDirectory() {
    const myBtns = document.querySelectorAll(".button-box button");

    // Muestra la vista de lista cuando la página se carga
    window.onload = function() {
        buttonView(0); // Activa el primer botón (list view)
    };
    
    function buttonView(n) {
        currentShowButton(n);
        // Cambia el orden para que el botón de lista aplique "list" y el de grid aplique "grid"
        const view = n === 0 ? "list" : "grid";  // n = 0 para list, n = 1 para grid
        toggleView(view);
    }
    
    function currentShowButton(n) {
        myBtns.forEach(btn => btn.classList.remove("activebtn"));
        myBtns[n].classList.add("activebtn");
    }
    
    myBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            buttonView(index);
        });
    });
    
    function toggleView(view) {
        const boxDirectory = document.getElementById("directory-box");
    
        if (view === "grid") {
            boxDirectory.classList.add("grid-view");
            boxDirectory.classList.remove("list-view");
        } else {
            boxDirectory.classList.add("list-view");
            boxDirectory.classList.remove("grid-view");
        }
    }
    
    
    
    document.addEventListener("DOMContentLoaded", async () => {
        try {
            const response = await fetch("data/members.json");
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            const container = document.getElementById("directory-box");
    
            let cards = '';
            data.forEach((company) => {
                cards += `
                    <div class="card-box">
                        <img src="${company.logo}" alt="${company.Name} logo">
                        <h3>${company.Name}</h3>
                        <ul>
                            <li><strong>Industry:</strong> ${company.Industry}</li>
                            <li><strong>Address:</strong> ${company["Physical Address"]}</li>
                            <li><strong>Website:</strong> <a href="${company.Website}" target="_blank">${company.Website}</a></li>
                            <li><strong>Office Phone:</strong> ${company["Phone"]}</li>
                            <li><strong>Representative:</strong> ${company.Representative}</li>
                            <li><strong>Member Since:</strong> ${company["Member Since"]}</li>
                            <li><strong>Membership:</strong> ${company["Membership"]}</li>
                        </ul>
                    </div>
                `;
            });
    
            container.innerHTML = cards;
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    });
    
}

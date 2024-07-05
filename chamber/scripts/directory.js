document.addEventListener('DOMContentLoaded', () => {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');
    const nameHeader = document.querySelector('.nameHeader'); // Select the h1 element
    const logoChamber = document.querySelector('.logo-chamber'); // Select the h1 element

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
        nameHeader.classList.toggle('hidden');
        logoChamber.classList.toggle('hidden');
    });
});

var myBtn = document.getElementsByClassName("mybtn");
var index = 0;

function buttonView(n) {
    currentShowButton(index = n);
}

function currentShowButton(n) {
    for (var i = 0; i < myBtn.length; i++) {
        myBtn[i].className = myBtn[i].className.replace(" activebtn", "")
    }
    myBtn[n].className += " activebtn";
}

function list() {
    var boxDirectory = document.getElementById("directory-box");
    boxDirectory.style.display = "block"
}

function grid() {
    var boxDirectory = document.getElementById("directory-box");
    boxDirectory.style.display = "grid"
}


document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch('data/members.json');
    const data = await response.json();

    const container = document.getElementById('directory-box');

    data.forEach(company => {
        const card = document.createElement('div');
        card.className = 'card-box';

        const logo = document.createElement('img');
        logo.src = company.logo;
        logo.alt = company.Name + ' logo';

        const name = document.createElement('h3');
        name.textContent = company.Name;

        // Crear el elemento p para la industria
        const industry = document.createElement('p');
        const industryLabel = document.createElement('span');
        industryLabel.textContent = 'Industry: ';
        industry.appendChild(industryLabel);
        industry.appendChild(document.createTextNode(company.Industry));

        // Crear el elemento p para la dirección
        const address = document.createElement('p');
        const addressLabel = document.createElement('span');
        addressLabel.textContent = 'Address: ';
        address.appendChild(addressLabel);
        address.appendChild(document.createTextNode(company['Physical Address']));

        // Crear el elemento p para el sitio web
        const website = document.createElement('p');
        const websiteLabel = document.createElement('span');
        websiteLabel.textContent = 'Website: ';
        website.appendChild(websiteLabel);
        const websiteLink = document.createElement('a');
        websiteLink.href = company.Website;
        websiteLink.target = '_blank';
        websiteLink.textContent = company.Website;
        website.appendChild(websiteLink);

        // Crear el elemento p para el teléfono
        const phone = document.createElement('p');
        const phoneLabel = document.createElement('span');
        phoneLabel.textContent = 'Office Phone: ';
        phone.appendChild(phoneLabel);
        phone.appendChild(document.createTextNode(company['Office Phone']));

        // Crear el elemento p para el representante
        const representative = document.createElement('p');
        const representativeLabel = document.createElement('span');
        representativeLabel.textContent = 'Representative: ';
        representative.appendChild(representativeLabel);
        representative.appendChild(document.createTextNode(company.Representative));

        // Crear el elemento p para el miembro desde
        const memberSince = document.createElement('p');
        const memberSinceLabel = document.createElement('span');
        memberSinceLabel.textContent = 'Member Since: ';
        memberSince.appendChild(memberSinceLabel);
        memberSince.appendChild(document.createTextNode(company['Member Since']));

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(industry);
        card.appendChild(address);
        card.appendChild(website);
        card.appendChild(phone);
        card.appendChild(representative);
        card.appendChild(memberSince);

        container.appendChild(card);
    });
});


// Footer information
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;
const copyrightYearElement = document.getElementById('currentyear');
const lastModifiedElement = document.getElementById('lastModified');
copyrightYearElement.textContent = currentYear;
lastModifiedElement.textContent = `Last update: ${lastModified}`;

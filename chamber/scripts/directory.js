document.addEventListener('DOMContentLoaded', () => {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');
    //const nameHeader = document.querySelector('.nameHeader'); // Select the h1 element
    //const logoChamber = document.querySelector('.logo-chamber'); // Select the h1 element

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
        //nameHeader.classList.toggle('hidden');
        //logoChamber.classList.toggle('hidden');
    });
});


const myBtns = document.getElementsByClassName("mybtn");
let index = 0;

function buttonView(n) {
    currentShowButton(index = n);
}

function currentShowButton(n) {
    for (let i = 0; i < myBtns.length; i++) {
        myBtns[i].className = myBtns[i].className.replace(" activebtn", "");
    }
    myBtns[n].className += " activebtn";
}

function list() {
    const boxDirectory = document.getElementById("directory-box");
    boxDirectory.style.display = "block";
}

function grid() {
    const boxDirectory = document.getElementById("directory-box");
    boxDirectory.style.display = "grid";
}

for (let i = 0; i < myBtns.length; i++) {
    myBtns[i].addEventListener('click', function () {
        buttonView(i);
    });
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

        const industry = document.createElement('p');
        const industryLabel = document.createElement('span');
        industryLabel.textContent = 'Industry: ';
        industry.appendChild(industryLabel);
        industry.appendChild(document.createTextNode(company.Industry));

        const address = document.createElement('p');
        const addressLabel = document.createElement('span');
        addressLabel.textContent = 'Address: ';
        address.appendChild(addressLabel);
        address.appendChild(document.createTextNode(company['Physical Address']));

        const website = document.createElement('p');
        const websiteLabel = document.createElement('span');
        websiteLabel.textContent = 'Website: ';
        website.appendChild(websiteLabel);
        const websiteLink = document.createElement('a');
        websiteLink.href = company.Website;
        websiteLink.target = '_blank';
        websiteLink.textContent = company.Website;
        website.appendChild(websiteLink);

        const phone = document.createElement('p');
        const phoneLabel = document.createElement('span');
        phoneLabel.textContent = 'Office Phone: ';
        phone.appendChild(phoneLabel);
        phone.appendChild(document.createTextNode(company['Office Phone']));

        const representative = document.createElement('p');
        const representativeLabel = document.createElement('span');
        representativeLabel.textContent = 'Representative: ';
        representative.appendChild(representativeLabel);
        representative.appendChild(document.createTextNode(company.Representative));

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

// Az oldal betöltésekor ellenőrizzük, hogy vannak-e mentett üzenetek
window.addEventListener('load', function() {
    loadOpinions();
});

document.getElementById('opinionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Megakadályozza az oldal újratöltését
    let opinionText = document.getElementById('opinionInput').value;
    if (opinionText.trim() !== '') {
        addOpinion(opinionText);
        saveOpinions(); // Mentjük az új üzenetet
        document.getElementById('opinionInput').value = '';
    }
});
function addOpinion(opinionText) {
    let opinionList = document.getElementById('opinionList');
    
    // Külső konténer az opinion elemeknek
    let opinionContainer = document.createElement('div');
    opinionContainer.classList.add('opinion-container');
    
    // Vélemény szövegének hozzáadása
    let opinionElement = document.createElement('div');
    opinionElement.classList.add('opinion');
    opinionElement.innerText = opinionText;
    opinionContainer.appendChild(opinionElement);
    
    // Törlési gomb hozzáadása
    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'Törlés';
    deleteButton.classList.add('deleteButton');
    deleteButton.style.marginLeft = 'auto'; // Stílus attribútum hozzáadása a jobb eltoláshoz
    deleteButton.style.marginTop = '10px';
    deleteButton.style.marginBottom = '10px';
    deleteButton.addEventListener('click', function() {
        opinionContainer.remove();
        saveOpinions();
    });
    opinionContainer.appendChild(deleteButton);
    
    opinionList.prepend(opinionContainer);
}

function saveOpinions() {
    let opinions = [];
    let opinionElements = document.querySelectorAll('.opinion');
    opinionElements.forEach(function(opinionElement) {
        opinions.push(opinionElement.innerText);
    });
    localStorage.setItem('opinions', JSON.stringify(opinions));
}

function loadOpinions() {
    let opinions = JSON.parse(localStorage.getItem('opinions'));
    if (opinions) {
        opinions.forEach(function(opinionText) {
            addOpinion(opinionText);
        });
    }
}
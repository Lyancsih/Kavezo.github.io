document.getElementById('opinionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Megakadályozza az oldal újratöltését
    let opinionText = document.getElementById('opinionInput').value;
    if (opinionText.trim() !== '') {
        addOpinion(opinionText);
        document.getElementById('opinionInput').value = '';
    }
});

function addOpinion(opinionText) {
    let opinionList = document.getElementById('opinionList');
    let opinionElement = document.createElement('div');
    opinionElement.classList.add('opinion');
    opinionElement.innerText = opinionText;
    opinionList.prepend(opinionElement); // Az új véleményeket az elejére teszi
}
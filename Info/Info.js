const AllButtons = document.getElementsByTagName('button');

for (let button of AllButtons) {
    button.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'lightblue';
    })
    button.addEventListener('mouseout', function() {
        this.style.backgroundColor = ''; // Resets to original color
    })
}

for (let button of AllButtons) {
    button.addEventListener('click', function() {
        if (this.id === 'Células') {
            window.location.href = 'SubInfo/Células/Células.html';
        }

        if (this.id === 'SistemaNervoso') {
            window.location.href = 'SubInfo/Sistema Nervoso/SisNer.html';
        }
    })
}
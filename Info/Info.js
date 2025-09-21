const AllButtons = document.getElementsByTagName('button');
const HomeButton = document.getElementById('HomeButton');

HomeButton.addEventListener('click', function() {
    window.location.href = '../index.html';
})

for (let button of AllButtons) {
    button.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#578ac4ff';
        this.style.color = 'white';
    })
    button.addEventListener('mouseout', function() {
        this.style.backgroundColor = ''; // Resets to original color
        this.style.color = '';
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

        if (this.id === 'Estímulos') {
            window.location.href = 'SubInfo/Estímulos/Estímulos.html';
        }

        if (this.id === 'Átomos') {
            window.location.href = 'SubInfo/Átomos/Átomos.html';
        }
    })
}
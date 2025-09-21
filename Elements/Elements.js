const AllButtons = document.getElementsByTagName('button');
const HomeButton = document.getElementById('HomeButton');

HomeButton.addEventListener('click', function() {
    window.location.href = '../index.html';
})

for (let button of AllButtons) {
    button.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#578ac4ff';
    })
    button.addEventListener('mouseout', function() {
        this.style.backgroundColor = ''; // Resets to original color
    })
}

for (let button of AllButtons) {
    button.addEventListener('click', function() {
        if (this.id === 'K') {
            window.location.href = 'K/K.html';
        }
    })
}
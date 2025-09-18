const AllButtons = document.getElementsByTagName('button');

for (let button of AllButtons) {
    button.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'lightblue';
    })
    button.addEventListener('mouseout', function() {
        this.style.backgroundColor = ''; // Resets to original color
    })
}
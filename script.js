const WelcomeToGenD = document.getElementById('WelcomeToGenD')
const EnterInfoButton = document.getElementById('EnterInfoButton')
const AllButtons = document.getElementsByTagName('Button')
const EnterElementsButton = document.getElementById('EnterElementsButton')

EnterInfoButton.style = ''
EnterElementsButton.style = ''


for (button of AllButtons) {
    button.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#578ac4ff'; // Change to desired hover color
        this.style.color = 'white'; // Change text color on hover
    });

    button.addEventListener('mouseout', function() {
        this.style.backgroundColor = ''; // Reset to original color
        this.style.color = ''; // Reset text color
    });
}

EnterInfoButton.addEventListener('click', function() {
    window.location.href = 'Info/Info.html';
});

EnterElementsButton.addEventListener('click', function() {
    window.location.href = 'Elements/Elements.html';
});

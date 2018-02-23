function attachGradientEvents() {

    let gradient = document.getElementById('gradient-box');
    gradient.addEventListener('mousemove', gradientMove);
    gradient.addEventListener('mouseout', gradientOut);
    let resultTextBox = document.getElementById('result');

    function gradientMove(event) {
        let percentage = (event.offsetX / (event.target.clientWidth - 1)) * 100;
        resultTextBox.textContent = Math.trunc(percentage) + '%';
    }

    function gradientOut() {
        resultTextBox.textContent = '';
    }
}
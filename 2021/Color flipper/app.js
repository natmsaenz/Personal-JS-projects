const colors = ['#B6174B', '#C3EB78', '#F3FFC6', '#EDA4BD', '#EB7BC0', '#FE5F55', '#F7F7FF', '#BDD5EA', '#577399', '#495867'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    //get random number between 0 - 9
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

document.body.style.backgroundColor = colors[randomNumber];
color.textContent = colors[randomNumber];




});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
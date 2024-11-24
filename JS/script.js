const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('min');
const secondHand = document.getElementById('sec');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsAngle = (seconds / 60) * 360 + 90;
    const minutesAngle = (minutes / 60) * 360 + 90;
    const hoursAngle = (hours / 12) * 360 + 90;

    secondHand.style.transform = `rotate(${secondsAngle}deg)`;
    minuteHand.style.transform = `rotate(${minutesAngle}deg)`;
    hourHand.style.transform = `rotate(${hoursAngle}deg)`;
}

setInterval(setDate, 1000);

setDate();

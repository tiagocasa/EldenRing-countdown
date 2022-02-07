const daysEL = document.getElementById("days");
const hoursEL = document.getElementById("hours");
const minutesEL = document.getElementById("minutes");
const secondsEL = document.getElementById("seconds");

const elden = "24 Feb 2022";

function countdown(){
    const eldenDate = new Date(elden);
    const currentDate = new Date();

    const totalseconds = (eldenDate - currentDate) / 1000;

    const days = Math.floor(totalseconds/3600/24);
    const hours = Math.floor(totalseconds/3600) % 24;
    const minutes = Math.floor(totalseconds/60) % 60;
    const seconds = Math.floor(totalseconds) % 60;

    daysEL.innerHTML = days;
    hoursEL.innerHTML = hours;
    minutesEL.innerHTML = minutes;
    secondsEL.innerHTML = seconds;

    console.log(days);
}
// initial call
countdown();

setInterval(countdown, 1000);


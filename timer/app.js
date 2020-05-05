console.log('helo');
const min = 1;
let time = min * 60;

const timer = document.getElementById('timer');

setInterval(updatetimer, 1000);

function updatetimer() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 1 ? '0' + seconds : seconds;
    timer.innerHTML = `${minutes}: ${seconds}`;
    time--;

}

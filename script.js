const minutes=10;
let time=minutes*60;

const countdownEl=document.getElementById("countdown");
setInterval(updateCountdown,1000);

function updateCountdown()
{
    const minutesupdate =Math.floor(time/60);
    let seconds=time%60;
    seconds=seconds < 10?'0'+seconds:seconds;
    countdownEl.innerHTML=`${minutesupdate}:${seconds}`;
    time--;
} 
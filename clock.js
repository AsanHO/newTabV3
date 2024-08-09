const clock = document.querySelector("#clock");

function getNsetClock(){
    const date = new Date()
    clock.innerText = `${date.getHours().toString().padStart(2,"0")}:${date.getMinutes().toString().padStart(2,"0")}:${date.getSeconds().toString().padStart(2,"0")}`;
}

getNsetClock();
setInterval(getNsetClock,1000);


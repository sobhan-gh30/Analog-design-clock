let hours , minutes , seconds
hours = document.querySelector(".hours")
minutes = document.querySelector(".minutes")
seconds = document.querySelector(".seconds")

function displayTime(){
    let time , timeH , timeM , timeS
    time = new Date()
    timeH = time.getHours()
    timeM = time.getMinutes()
    timeS = time.getSeconds()

    hours.style.transform = `rotate(${30*timeH + timeM/2}deg)`
    minutes.style.transform = `rotate(${6 * timeM}deg)`
    seconds.style.transform = `rotate(${6 * timeS}deg)`
}
setInterval(displayTime , 1000)
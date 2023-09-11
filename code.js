const button = document.querySelector(".button")
const hour = document.querySelector(".hour-needle")
const minute = document.querySelector(".minute-needle")
const seconds = document.querySelector(".seconds-needle")
const time = document.querySelector(".time")
const date = document.querySelector(".date")
const day = document.querySelector(".day")
const circle = document.querySelector(".circle")
const arrayDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const arrayMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let mode = "dark"

button.addEventListener('click', ()=>{
    console.log(mode)
    if (mode == "dark"){
        document.documentElement.style.setProperty("--primary-color", "white")
        document.documentElement.style.setProperty("--secondary-color", "black")
        button.innerHTML = "Light Mode"
        mode = "light"
    } else {
        document.documentElement.style.setProperty("--primary-color", "black")
        document.documentElement.style.setProperty("--secondary-color", "white")
        button.innerHTML = "Dark Mode"
        mode = "dark"
    }
})

const currentTime = new Date()
console.dir(currentTime)
let currentHour = currentTime.getHours()
console.log(currentHour)
let currentMinute = currentTime.getMinutes() //  6
if (currentMinute < 10){
    currentMinute = `0${currentMinute}`
}
let currentSecond = currentTime.getSeconds()
currentSecond = currentSecond < 10 ? `0${currentSecond}` : currentSecond
const currentDay = currentTime.getDay()
console.log(currentDay)
const currentDate = currentTime.getDate()
console.log(currentDate)
const currentMonth = currentTime.getMonth()
console.log(currentMonth)

let pmOrAm = currentHour >= 12 ? 'PM' : 'AM'

time.innerHTML = `${currentHour} : ${currentMinute} : ${currentSecond} ${pmOrAm}`
day.innerHTML = `${arrayDay[currentDay]}, ${arrayMonth[currentMonth]}`
circle.innerHTML = `${currentDate}`

console.log(arrayDay[currentDay])

setInterval(()=>{
    currentSecond++

    // Timer
    if (currentSecond == 60){
        currentSecond = 0
        currentMinute++
    }
    if (currentMinute == 60){
        currentMinute = 0
        currentHour++
    }
    if (currentHour == 12){
        currentHour = 0
        currentHour++
    }

    // Adjustments
    if (currentSecond < 10){
        currentSecond = `0${currentSecond}`
    }
    if (currentMinute < 10){
        currentMinute = `0${parseInt(currentMinute)}`
    }

    time.innerHTML = `${currentHour} : ${currentMinute} : ${currentSecond} ${pmOrAm}`

    seconds.style.transform = `rotateZ(${currentSecond * 6}deg)`
    minute.style.transform = `rotateZ(${currentMinute * 6}deg)`
    hour.style.transform = `rotateZ(${(currentHour * 30) + (currentMinute / 2)}deg)`
    //  (360 grados dividido 12 horas del reloj)

}, 1000)

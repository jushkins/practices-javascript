/*
Author: Jushkin Saparmatov
Project: Unit Converter
*/



const input = document.getElementById("input")
const convertBtn = document.getElementById("convert-btn")
const meter = document.getElementById("meter")
const liter = document.getElementById("liter")
const kilos = document.getElementById("kilos")
const error = document.getElementById("error-p")

convertBtn.addEventListener("click", function() {
    const inputNumber = parseFloat(input.value);
    if (isNaN(inputNumber)) {
        error.textContent = "Please enter a valid number"
    } else {
        error.textContent = ""
        const resultMeter = `${inputNumber} meters = ${(inputNumber*3.281).toFixed(3)} feet | ${inputNumber} feet = ${(inputNumber*0.3048).toFixed(3)} meters`
        meter.textContent = resultMeter
        const resultLiter = `${inputNumber} liters = ${(inputNumber*0.264).toFixed(3)} gallons | ${inputNumber} gallons = ${(inputNumber*3.78541178).toFixed(3)} liters`
        liter.textContent = resultLiter
        const resultKilos = `${inputNumber} kilos = ${(inputNumber*2.204).toFixed(3)} pounds | ${inputNumber} pounds = ${(inputNumber*0.45359237).toFixed(3)} kilos`
        kilos.textContent = resultKilos
    }
})


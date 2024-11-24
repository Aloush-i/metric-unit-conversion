let inputNumber = document.getElementById("input-el")
let convertbtn = document.getElementById("convert-btn")
let meterEl = document.getElementById("Meter")
let literEl = document.getElementById("Liters")
let kilogramEl = document.getElementById("Kilograms")

console.log('inputNumber.value')
console.log(inputNumber.value)


    convertbtn.addEventListener("click", function calculate(){
        if ( inputNumber.value > 0 ){

        let result1 = inputNumber.value * 3.281
        let result11 = inputNumber.value * 0.3048
        meterEl.textContent =
        `${inputNumber.value} meters = ${result1.toFixed(3)} feet | ${inputNumber.value} feet = ${result11.toFixed(3)} meters`
        console.log(result1,result11)
    
        let result2 = inputNumber.value * 0.264
        let result22 = inputNumber.value * 3.78541
        literEl.innerText =
        `${inputNumber.value} Liters = ${result2.toFixed(3)} gallons | ${inputNumber.value} gallons = ${result22.toFixed(3)} Liters`
        console.log(result2,result22)
    
        let result3 = inputNumber.value * 2.204
        let result33 = inputNumber.value * 0.453592
        kilogramEl.innerText =
        `${inputNumber.value} kilos = ${result3.toFixed(3)} pounds | ${inputNumber.value} pounds = ${result33.toFixed(3)} kilos`
        console.log(result3,result33)
    }
    })

    



//      1 meter = 3.281 feet | 1 feet = 0.3048 meter
//    1 liter = 0.264 gallon | 1 gallon = 3.78541 liter
//  1 kilogram = 2.204 pound | 1 pound = 0.453592 kilogram

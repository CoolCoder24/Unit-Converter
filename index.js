/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input-el")
const converterBtn = document.getElementById("converter-btn")


/* section 1 */
const lengthEl = document.getElementById("length-el")
const meterToFeet = 3.281


/* section 2 */
const volumeEl = document.getElementById("volume-el")
const literToGallon = 0.264


/* section 3 */
const massEl = document.getElementById("mass-el")
const kiloToPound = 2.204


converterBtn.addEventListener("click", function() {
   let baseValue = inputEl.value
  
   let length = baseValue * meterToFeet
   let volume = baseValue * literToGallon
   let mass = baseValue * kiloToPound
  
   lengthEl.textContent = `${baseValue} meters = ${length.toFixed(2)} feet`
   volumeEl.textContent = `${baseValue} liters = ${volume.toFixed(2)} gallons`
   massEl.textContent = `${baseValue} kilograms = ${mass.toFixed(2)} pounds`
})

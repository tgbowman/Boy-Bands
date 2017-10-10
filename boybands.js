let bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
let vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// Get a reference to the appropriate DOM element for bands
const bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
const veggieElement = document.getElementById("vegetables");

// Execute a for loop that will iterate over the arrays
for (let loopTracker = 0; loopTracker < bands.length; loopTracker += 1) {

  // Get a reference to the current item in the bands array
  const currentBand = bands[loopTracker]

  // Update the innerHTML value of the DOM element for bands
bandElement.innerHTML += `
<li> ${currentBand} </li>
`
  // Get a reference to the current item in the vegetables array
  const currentVeggie = vegetables[loopTracker];

  // Update the innerHTML value of the DOM element for vegetables
  veggieElement.innerHTML += `
  <li> ${currentVeggie} </li>
  `
}
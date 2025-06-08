function calculateChaiIngredients() {
let numberOfCups = parseInt(prompt("Karibu! How many cups of Chai Bora would you like to make?"));

let waterPerCup = 200;
let milkPerCup = 50;
let teaLeavesPerCup = 1; 
let sugarPerCup = 2; 

let water = waterPerCup * numberOfCups;
let milk = milkPerCup * numberOfCups;
let teaLeaves = teaLeavesPerCup * numberOfCups;
let sugar = sugarPerCup * numberOfCups;

console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
console.log(`Water: ${water} ml`);
console.log(`Milk: ${milk} ml`);
console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoon${teaLeaves > 1 ? 's' : ''}`);
console.log(`Sugar (Sukari): ${sugar} teaspoon${sugar > 1 ? 's' : ''}`);
console.log(`\nEnjoy your Chai Bora!`);
}

calculateChaiIngredients();

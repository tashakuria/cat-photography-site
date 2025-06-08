function calculateBodaFare() {
let distanceInKm = parseInt(prompt("Unafika wapi Mkubwa? Kilometer ngapi?"));

const baseFare = 50;
const chargePerKm = 15;

let totalFare = baseFare + (distanceInKm * chargePerKm);

console.log(`Uko kwote? Izo ni ${distanceInKm} km:`);
console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
console.log(`Mpaka Uko: KES ${distanceInKm * chargePerKm}`);
console.log(`Total: KES ${totalFare}`);
console.log(`\nPanda Pikipiki!`);
}
calculateBodaFare();

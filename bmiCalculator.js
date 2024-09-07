const weight = 52;  // weight in kg
const height = 1.5;   // height in meters

const BMI = weight / (height * height);
console.log(BMI.toFixed(2))
if (BMI < 18) {
    console.log("Underweight");
} else if (BMI <= 24.9) {
    console.log("Normal weight");
} else if (BMI <= 29.9) {
    console.log("Overweight");
} else {
    console.log("Obese");
}
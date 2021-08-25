/* const raining = false;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella");
} if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you are ready to go outside!");

const cold = true;

if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are all good!");
} */

const temp = -45;


if (temp <= 0) {
  console.log("Make sure you pick out a scarf")
} else if (temp <= 15) {
  console.log("Short sleeves wont cut it");
} else {
  console.log("Short sleeves are fine");
}

const isCitizen = true;
const age = 30

if (age >= 18 && isCitizen) {
  console.log("You are elligible to vote.")
} else if (isCitizen===false) {
  console.log("Sorry you are not a citizen. Please apply for citizenship.");
} else {
  let ageDiff = 18-age;
  console.log(`Sorry, you must wait atleast ${ageDiff} years to vote`);
}

if (temp <-40 || temp >40) {
  console.log("Maybe going outside isnt such a good idea");
}

let raining = false;

if (!raining) {
  console.log("Leave your umbrella at home")
}
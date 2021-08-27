const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// while loop
let i = 0;
while (i < ingredients.length) {
  console.log(`${i+1}. ${ingredients[i]}`);
  i++
}

// for loop
for (i = 0; i < ingredients.length; i++) {
  console.log(`${i+1}. ${ingredients[i]}`);
}

// reverse for loop
for (i = 7; i >= 0; i--) {
  console.log(`${i+1}. ${ingredients[i]}`);
}
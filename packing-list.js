const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log('Kitchen stuff to pack:');
for (let i = 0; i < packingList.length; i++) {
  console.log(`${i+1}. ${packingList[i]}`);
}
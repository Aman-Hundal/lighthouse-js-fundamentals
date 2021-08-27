//array of arrays - functions challenge 1
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];


// must have capacity >= 20 and venue === school or community centre
const chooseStations = function(stations) {
  const goodStations = []
  for (let sample = 0; sample < stations.length; sample++) {
    if (stations[sample][1] >= 20 && stations[sample][2] === "school" || stations[sample][2] === "community centre") {
      goodStations.push(stations[sample][0]);
    }
  }
  return goodStations;
}

console.log(chooseStations(stations));

//functions challenge 2 - start at x,y (0,0) and go up/down a point for north an south and up down a point for west and east
// north = +1; south = -1; east = +1, west = -1
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']

const finalPosition = function(movesArray) {
  let x = 0;
  let y = 0;
  const position = [];
  for (let cordinate = 0; cordinate < movesArray.length; cordinate++) {
    if (movesArray[cordinate] === "north") {
      y += 1;
    } else if (movesArray[cordinate] === "south") {
      y -= 1;
    } else if (movesArray[cordinate] === "east") {
      x += 1;
    } else if (movesArray[cordinate] === "west") {
      x -= 1;
    }
  }
  position.push(x);
  position.push(y);
  return position
}

console.log(finalPosition(moves));

// ageCalculator

function ageCalculator(name,yearOfBirth,currentYear) {
  let age = currentYear - yearOfBirth;
  return `${name} is ${age} years old.`;
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));

// howManyhundreds
// pass in a number and find how mnay hundreds are in that number

const howManyHundreds = function(num) {
  if (num % 100 === 0) {
    return num / 100;
  } else {
    let x = num/100
    return Math.floor(x)
  }
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);

//area calculator

function calculateRectangleArea(length, width) {
  if (length >= 0 && width >= 0) {
    return length * width
  } else {
    return undefined
  }
}

function calculateTriangleArea(base, height) {
  if (base >= 0 && height >= 0) {
    return base * height / 2
  } else {
    return undefined
  }
}

function calculateCircleArea(radius) {
  if (radius >= 0) {
    return Math.PI * Math.pow(radius, 2)
  } else {
    return undefined
  }
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined

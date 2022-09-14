'use strict';

// Data needed for a later exercise
//const flights =
//  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
/*
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};
*/
////////////////////////////////////////////////////////////////
/***************************CODING CHALLENGE #1***************************/

const game = {
  team1: 'GS',
  team2: 'FB',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martines',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [neuer, ...fieldPlayers] = game.players[0];
const [allPlayers] = [[...game.players[0], ...game.players[1]]];

console.log(allPlayers);

const [players1Final] = [[...game.players[0], 'Thiago', 'Coutinho', 'Perisic']];
console.log(players1Final);

const { team1, x: draw, team2 } = { ...game.odds };

console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(...players);
  console.log(`${players.length} goals were scored`);
};
team1 < team2 && console.log(`${game.team1} is more likely to win!`);
team1 > team2 && console.log(`${game.team2} is more likely to win!`);
printGoals(...game.scored);

/*
const rest1 = {
  name: 'Capri',
  numGuests: 0,
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni',
};
//Or assignment operator
//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;
//rest1.numGuests ||= 10;
//rest2.numGuests ||= 10;

//Nulish assignment operator(null and undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//And assignment opertor
//rest1.owner = rest1.owner && '<ANONYMOUS>';
//rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
*/
/*
restaurant.numGuest = 0;

const guest = restaurant.numGuest || 11;
console.log(guest);

//Nulish: null and undefined
const guestCorrect = restaurant.numGuest ?? 10;
console.log(guestCorrect);
*/
/*
console.log('-----OR-----');
//Use any data type, return any data type, short-circuiting
console.log(3 || 'osman');
console.log('' || 'osman');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Mrb' || 23 || null);

//restaurant.numGuest = 15;
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1);

const guest2 = restaurant.numGuest || 11;
console.log(guest2);

console.log('-----AND-----');

console.log(0 && 'osman');
console.log(7 && 'osman');
console.log('mrb' && 23 && null && 'osman');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mashrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mashrooms', 'spinach');
*/
/*
//Spread, because on right side of =
const arr = [1, 2, ...[3, 4]];

//Rest, because on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(arr, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Objects
const { fri, ...weekDays } = restaurant.openingHours;
console.log(fri, weekDays);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return console.log(sum);
};
add(1, 2, 3, 4, 5);

const x = [1, 2, 3, 4, 5];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
*/
/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 or more arrays

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Iterables: arrays, strings, maps, sets,. NOT objects

const str = 'Osman';
const letters = [...str, 'ı', 'n'];
console.log(letters);
*/
//Real-world example
/*const ingredients = [
  prompt('Lets make pasta! Ingredient1?'),
  prompt('Ingredient2?'),
  prompt('Ingredient3?'),
];
console.log(ingredients);
restaurant.orderPasta(...ingredients);*/
/*
//Objects
const newRestaurant = { foundIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/
/*
//Destructuring Objects
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);

//Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;

console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
*/

/*
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);
*/
/*
[main, secondary] = [secondary, main];
console.log(main, secondary);

//Recieve 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested destructuring
const nested = [2, 4, [5, 6]];
//const [i, , j] = nested;
const [i, , [j, k]] = nested;

//Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/

'use strict';

// Data needed for a later exercise
//const flights =
//  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,
  /*
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  */
  //Same as above
  order(starterIndex, mainIndex) {
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

/*
const question = new Map([
  ['question', 'What is the best programming lamguage?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JS'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);
console.log(question);

//Convert object to map
console.log(Object.entries(openingHours));

const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);

//Quiz app
console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

//const answer = Number(prompt('Your answer:'));

//console.log(question.get(question.get('correct') === answer));

//Convert map to array
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
*/
/*
const rest = new Map();
rest.set('name', 'Calssico Italiano');
rest.set(1, 'Firenze, Italy');

console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open ')
  .set(false, 'We are closed');
//Call elements by key
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

//Check element
console.log(rest.has('categories'));

//Delete element by key
rest.delete(2);
rest.set([1, 2], 'Test');
console.log(rest);

console.log(rest.size);
//Will not work because of scope
rest.set([1, 2], 'Test');
console.log(rest.get([1, 2]));
//Will work
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));

rest.set(document.querySelector('h1'), 'Heading');

//rest.clear();


*/
/*
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
//Add element
ordersSet.add(`Garlic Bread`);
ordersSet.add(`Garlic Bread`);

console.log(new Set('Osman'));
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
//Delete element
ordersSet.delete('Risotto');

//Delete all elements
//ordersSet.clear();

for (const order of ordersSet) console.log(order);

console.log(ordersSet);

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('OsmanYusufAKKUS').size);
*/
/*
//Property names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days:
 `;

for (const day of properties) {
  openStr += `${day},`;
}
console.log(openStr);

//Property names
const values = Object.values(openingHours);
console.log(values);

//Entire object
const entries = Object.entries(openingHours);
console.log(entries);

//[key, value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close} `);
}
*/
/*

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//With optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does no exist');
console.log(restaurant.orderRisottto?.(0, 1) ?? 'Method does no exist');

//Arrays
const users = [{ name: 'Osman', email: 'osman@gmail.com' }];
console.log(users[0]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('User array emty');

*/
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
//For-of loop
for (const item of menu) console.log(item);
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}
for (const [i, a] of menu.entries()) {
  console.log(`${i + 1}: ${a}`);
*/

//console.log([...menu.entries()]);

////////////////////////////////////////////////////////////////////////////
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
/*
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

const x = Object.entries(game.scored);
for (const [key, value] of x) {
  console.log(`Goal ${Number(key) + 1}: ${value}`);
}
let sum = 0;
const y = Object.values(game.odds);
for (const value of y) {
  sum += value / 3;
}
console.log(`Sum of odds: ${sum}`);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
//console.log(game['team1']);
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
*/
/***************************CODING CHALLENGE #3***************************/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
const event = new Set();

for (const x of [...gameEvents.values()]) {
  event.add(x);
}
console.log([...event]);
event.delete([...gameEvents.entries()]);
event.delete(gameEvents.get(64));
console.log([...event]);

const time = [...gameEvents.keys()].pop();
let average = 0;
average = time / gameEvents.size;
console.log(`An event happened, on average, every ${average} minutes.`);

console.log(time);
for (const [key, value] of [...gameEvents.entries()]) {
  key <= 45
    ? console.log(`[FIRST HALF] ${key}: ${value}`)
    : console.log(`[SECOND HALF] ${key}: ${value}`);
}

////////////////////////////////////////////////////////////////////////////
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

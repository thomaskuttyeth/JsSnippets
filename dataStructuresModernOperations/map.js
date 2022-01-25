const rest = new Map();
rest.set("name", "Classicano Italiano");
rest.set(1, "firenze,Italy");
rest
  .set("categories", ["italian", "pizzeria", "vegetarian", "organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "we are open :D")
  .set(false, "We are closed :(");

restName = rest.get("name");

const time = 21;
const statement = rest.get(time > rest.get("open") && time < rest.get("close"));

// checking whether map contains certain key
const hasCategories = rest.has("categories");
// rest.delete(key);
// rest.size ;
// rest.clear() ;

// usign array as the key
const arr = [1, 2];
rest.set(arr, "test");
console.log(rest.get(arr));

// dom with maps
rest.set(document.querySelector("h1"), "Heading");

// maps iteration
const question = new Map([
  ["question", "what is the best progg language? "],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  [4, "Python"],
  ["correct", 3],
  [true, "Correct"],
  [false, "try again"],
]);

console.log(question);

// converting object to map
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

const hoursMap = new Map(Object.entries(openingHours));
// object is not iterable

for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}
/*
const answer = Number(prompt("your answer"));
output = question.get(question.get("correct") === answer);
console.log(output);
*/

// can convert map to array using ...
// question.entries()
// question.keys() ;
//question.values();

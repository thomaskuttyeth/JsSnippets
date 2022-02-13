"use strict";
const gameEvents = new Map([
  [17, "GOAL"],
  [36, "SUBSTITUTION"],
  [47, "GOAL"],
  [61, "SUBSTITUTION"],
  [64, "YELLOW CARD"],
  [69, "RED CARD"],
  [70, "SUBSTITUTION"],
  [72, "SUBSTITUTION"],
  [76, "GOAL"],
  [80, "GOAL"],
  [92, "YELLOW CARD"],
]);

// creat an array 'events' of the different game events that happend (no dupliates)
const distictEvents = new Set();
for (const [time, event] of gameEvents) {
  distictEvents.add(event);
}
// removing the yello card from minute 64. ( remove the entire event)
gameEvents.delete(64);

// print the following string to the console;
// An event happedn, on average every 9 minutes
console.log(
  `An event happend, on average, every ${90 / gameEvents.size} minutes.`
);

// logging into console describing which half the event belongs to
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half}] Half ${min}:${event}`);
}

const eventTimes = [...gameEvents.keys()];
const eventNames = [...gameEvents.values()];

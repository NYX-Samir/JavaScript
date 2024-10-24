// strict equality is used to compare two values for both their value and type. The strict equality operator (===) ensures that the comparison returns true only if the values are of the same type and have the same value. This is different from the loose equality operator (==), which converts the values to a common type before making the comparison.

// Strict equality (===)
console.log(5 === 5);              // true
console.log(5 === '5');           //false
console.log(true === 1);         // false
console.log(null === undefined);// false

// Loose equality (==)
console.log(5 == '5');           // true
console.log(true == 1);         // true
console.log(null == undefined);// true

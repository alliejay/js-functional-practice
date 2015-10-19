

/**
 * Part I: use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback

function forEach(array, callback){

}

// testing your code with console.assert
var total = 1;
forEach([1, 2, 3, 4], function(a){ total *= a; });
// and finally assert; if this fails, the program stops
console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args

}

console.assert( sum(1, 2, 3, 4, 5) === 15 )

// 2. calculate the average of numbers (returns the average (A NUMBER))

function average(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args

}

getAverageNumber(data)

for (var i = 0, i < data.length, i++)


//
var avg = 0;
var lengthOfObject = 0;
for (var i in pizza) {
  avg += pizza[i];
  lengthOfObject++;
}

avg = avg/lengthOfObject;



console.assert( average(2, 4, 6, 8) === 5 )

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE

}

console.assert( largest(2, 4, 6, 8) === 8 )

// 4. find the longest string of the inputs (returns the longest input (A STRING))

var longestWord = 0;
var word = null;

function longest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    for (var i = 0; i <= args[].length; i++) {
      if (longestWord < args[i].length) {
        longestWord = args[i].length;
        word = args[i];
      }
   }
   return word;
}

console.assert( longest("this", "is", "a", "awesome", "function") === "function" );

/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */

// .sort()
var names = ['Toby', 'Sarge', 'Mister'];
names.sort();
console.assert(names.sort("Mister", "Sarge", "Toby"));

// .concat()
var moreNames = names.concat('Chewy', 'Muffin', 'Tiara');
console.assert(moreNames = ['Toby', 'Sarge', 'Mister', 'Chewy', 'Muffin', 'Tiara']);

// .indexOf()
moreNames.indexOf("Chewy");
console.assert(moreNames.indexOf("Chewy") === 3);

// .split()
var animals = "I love animals";
var newArray = animals.split(" ");
console.assert(newArray = ["I", "love", "animals"]);

// .join()
var animals2 = newArray.join(" ");
console.assert(animals2 === "I love animals");

// .pop()
var poppedNames = moreNames.pop();
console.assert(poppedNames = "Tiara");
console.assert(moreNames = ['Toby', 'Sarge', 'Mister', 'Chewy', 'Muffin']);

// .push()
moreNames.push("Tiara", "Bandit");
console.assert(moreNames = ['Toby', 'Sarge', 'Mister', 'Chewy', 'Muffin', 'Tiara', 'Bandit')

// .slice()
var petNames = moreNames.slice(0, -1);
console.assert(petNames = ['Toby', 'Sarge', 'Mister', 'Chewy', 'Muffin', 'Tiara']);

// .splice()
petNames.splice(3, 1, "Bailey");
console.assert(petNames = ['Toby', 'Sarge', 'Mister', 'Bailey', 'Muffin', 'Tiara']);

// .shift()
petNames.shift();
console.assert(petNames = ['Sarge', 'Mister', 'Bailey', 'Muffin', 'Tiara']);

// .unshift()
petNames.unshift("Toby");
console.assert(petNames = ['Toby', 'Sarge', 'Mister', 'Bailey', 'Muffin', 'Tiara']);

// .filter()
var numbers = [5, 57, 64, 35, 23, 270, 69];
function smallNumbers(value) {
  return value <= 50;
}

var filteredNumbers = numbers.filter(smallNumbers);
console.assert(filteredNumbers = [5, 35, 23]);

// .map()
var triple = filteredNumbers.map(function(number) {
  return number * 3;
})
console.assert(triple = [69, 105, 15]);

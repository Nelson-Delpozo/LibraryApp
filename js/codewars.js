function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i * 2;
}

function makeUpperCase(str) {
  // Code here
  return str.toUpperCase()
}

console.log(makeUpperCase("hkhkhkjh"));

function check(a, x) {
  return (a.includes(x))
}

console.log(check("hello", "e"))
console.log(check("hello", "f"))

function filter_list(l) {
  // Return a new array with the strings filtered out
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] == 'string') {
      l.splice(i, 1);
      //have to reduce i by one mid-loop or else two in a row strings will make it past the splice
      i -= 1;
    }
  }
  return (l);
}

// function filter_list(l) {
//   return l.filter(function(v) {return typeof v == 'number'})
// }

console.log(filter_list(['hj', 8, 'jiji', 9, 'hi there', 17, "b", "c", 190, "d", "f"]));


function duplicateEncode(word) {
  let newString = "";
  word = word.toLowerCase();

  for (let i = 0; i < word.length; i++) {
    if (i === word.length - 1) {
      let compare = word.slice(0, i)
      if (compare.includes(word[i])) {
        newString += ")"
      } else newString += "("
    } else {
      let compare = word.slice(i + 1);
      if (compare.includes(word[i])) {
        newString += ")"
      } else newString += "("
    }
  }

  return newString;
}

console.log(duplicateEncode("car"))
console.log(duplicateEncode("delete"))
console.log(duplicateEncode("brother"))

const sampleArray = ['a', 'a', 'b', 'c'];

function findOdd(A) {
  //happy coding!
  const counts = {};
  sampleArray.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
  });
  // console.log(counts)
  for (const [key, value] of Object.entries(counts)) {
    console.log(`${key}: ${value}`);
    if (`${value}` % 2 !== 0) {
      return parseInt(`${key}`)
      // console.log(`${key}`)
    }

  }
}

findOdd(sampleArray)

function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  if (!Number.isInteger(Math.sqrt(sq))) {
    return -1;
  } else {
    for (let i = sq + 1; i > 0; i++) {
      if (Number.isInteger(Math.sqrt(i))) {
        return i;
      }
    }
  }
}

console.log(findNextSquare(121));

function oddOrEven(array) {
  //enter code here
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i]
    console.log(total)
  }
  if (total % 2 === 0) {
    return "even"
  } else {
    return "odd"
  }
}

console.log(oddOrEven([1, 2, 2]));

function validParentheses(parens) {
  // your code here ..
  let fronts = []
  let backs = []
  if (parens.length == 0) {
    return true;
  } else {

    for (let i = 0; i < parens.length; i++) {
      if (parens[i] === "(") {
        fronts.push(parens[i])
      } else backs.push(parens[i])
    }
  }
  if ((fronts.length === backs.length) && (fronts[0] === "(")) {
    return true;
  } else {
    return false;
  }
}

function twoSum(numbers, target) {


  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum([1, 4, 7], 8))


function isPangram(string) {
  let count = 0;
  let arrayFromString = string.toLowerCase().split("");
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  console.log(arrayFromString);

  for (let i = 0; i < alphabet.length; i++) {
    if (arrayFromString.includes(alphabet[i])) {
      count += 1;
    }
  }
  return count >= 26;
}

console.log(isPangram("the quick brown fox jump over the lazy dog"));

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  A.sort(function (a, b) {
    return a - b
  });
  A.filter(function (x) {
    return x > -1
  });

  for (let i = 1; i < 1000000; i++) {
    if (!A.includes(i)) {
      return (i)

    }
  }
}

solution([12, 11, 9, 3, 2, 1, 4, 7, 6, 8, 10])


function findOutlier(integers) {
  let evens = []
  let odds = []
  integers.forEach(function (number) {
    if (number % 2 === 0) {
      evens.push(number)
    } else odds.push(number)
  })
  if (odds.length > evens.length) {
    return evens[0];
  } else return odds[0];

}

console.log(findOutlier([2, 6, 8, 10, 3]));
console.log(findOutlier([1, 3, 9, 10, 7]));
console.log(findOutlier([1, 2, 9, 11, 7]));


function solution2(str) {

  let result = [];
  for (let i = 0; i < str.length; i += 2) {
    if ((str[i + 1]) !== undefined) {
      result.push(str[i] + str[i + 1])
    } else {
      result.push(str[i] + "_")
    }
  }
  return result;
}


console.log(solution2("abcde"));
console.log(solution2("abcdefg"));

console.log(solution("abcde"));


function solution(numbers, left, right) {

  let result = [];


  for (let i = 0; i < numbers.length; i++) {

    let x = (numbers[i]) / (i + 1);

    if (Number.isInteger(x) && x >= left && x <= right) {
      result.push(true)
    } else {
      result.push(false)
    }

  }
  return result;
}

function solution3(number) {
  if (number < 0) {
    return 0;
  }
  let total = 0
  for (let i = 0; i < number; i++) {

    if((i % 3 === 0) || (i % 5 === 0)){
      total += i;
    }

  }
return total;
}

console.log(solution3(10));

function twistedSum(n) {
  let singleDigitsTotal = 0;
  let doubleDigitsTotal = 0;
  let stringOfDoubles = "";
  for(let i = 1; i <= n; i++){
    if(i <= 9){
      singleDigitsTotal += Number(i);
      console.log(singleDigitsTotal)
    }else{
      stringOfDoubles = stringOfDoubles + (String(i));
      console.log(stringOfDoubles)
      let arrayOfDoubles = Array.from(stringOfDoubles);
      // console.log(arrayOfDoubles)
      for(let i = 0; i < arrayOfDoubles.length; i++){
        doubleDigitsTotal += arrayOfDoubles[i];
        console.log(doubleDigitsTotal)
      }
    }
  }
  return singleDigitsTotal + doubleDigitsTotal;
}
// console.log(twistedSum(12));


function formatDuration (seconds) {

  let hours = 0;
  let minutes = 0;
  let segundos = 0;



  console.log(hours, minutes, segundos);
  console.log(seconds);


}

formatDuration(123232324);

// The task
// Your task, is to calculate the minimal number of moves to win the game "Towers of Hanoi", with given number of disks.
//
//   What is "Towers of Hanoi"?
//   Towers of Hanoi, is a simple game consisting of three rods, and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks in a neat stack in ascending order of size on one rod, the smallest at the top, thus making a conical shape.
//
//   The objective of the puzzle is to move the entire stack to another rod, obeying the following simple rules:
//
//   Only one disk can be moved at a time.
//   Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack i.e. a disk can only be moved if it is the uppermost disk on a stack.
//   No disk may be placed on top of a smaller disk.

var hanoi = function(disks) {
  // your code here
};

// DESCRIPTION:
//   Goldbach's conjecture is amongst the oldest and well-known unsolved mathematical problems out there. In correspondence with Leonhard Euler in 1742, German mathematician Christian Goldbach made a conjecture stating that:
//
// "Every even integer greater than 2 can be written as the sum of two primes"
//
// which is known today as the (strong) Goldbach's conjecture.
//
// Even though it's been thoroughly tested and analyzed and seems to be true, it hasn't been proved yet (thus, remaining a conjecture.)
//
// Your task is to implement the function in the starter code, taking into account the following:
//
//   If the argument isn't even and greater than two, return an empty array/tuple.
// For arguments even and greater than two, return a two-element array/tuple with two prime numbers whose sum is the given input.
//   The two prime numbers must be the farthest ones (the ones with the greatest difference)
// The first prime number must be the smallest one.
//   A few sample test cases:
//
//   checkGoldbach(2)/check_goldbach(2) should return []
//
// checkGoldbach(5)/check_goldbach(5) should return []
//
// checkGoldbach(4)/check_goldbach(4) should return [2, 2]
//
// checkGoldbach(6)/check_goldbach(6) should return [3, 3]
//
// checkGoldbach(14)/check_goldbach(14) should return [3, 11]

// Checks Goldbach's conjecture for the given argument
var checkGoldbach = function(number) {
  // Implement your code here
};

// DESCRIPTION:
//   Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.
//
// Legend:
//   -Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
// -Function input: String contains only letters, uppercase letters are unique.
//   Task:
// Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".

function findChildren(dancingBrigade) {

  let dancingArray = dancingBrigade.split("");
  console.log(dancingArray);
  dancingArray = dancingArray.sort();
  console.log(dancingArray);
  let newArray = [];

  for(let i = 0; i < dancingArray.length; i++){
    if(dancingArray[i] === dancingArray[i].toUpperCase()){
      newArray.push(dancingArray[i]);
    }
    for(let i = 0; i < dancingArray.length; i ++){
      if(dancingArray[i] === dancingArray[i].toLowerCase()){
        newArray.splice(newArray.indexOf((dancingArray[i].toUpperCase() + 1)), 0, dancingArray[i]);
      }
    }

  }


  console.log(newArray);
}

findChildren("AaaBCbbcc");

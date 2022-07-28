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


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
  for(let i = 0; i < l.length; i++){
    if(typeof l[i] == 'string'){
      l.splice(i, 1);
      //have to reduce i by one mid-loop or else two in a row strings will make it past the splice
      i -= 1;
    }
  } return (l);
    }

// function filter_list(l) {
//   return l.filter(function(v) {return typeof v == 'number'})
// }

console.log(filter_list(['hj', 8, 'jiji', 9, 'hi there', 17, "b", "c", 190, "d", "f"]));


function duplicateEncode(word){
  let newString = "";
  word = word.toLowerCase();

  for(let i = 0; i < word.length; i++){
    if(i === word.length -1){
      let compare = word.slice(0 , i)
      if(compare.includes(word[i])){
        newString += ")"
      }else newString += "("
    }else {
      let compare = word.slice(i + 1);
      if(compare.includes(word[i])){
        newString += ")"
      }else newString += "("
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
  if(!Number.isInteger(Math.sqrt(sq))){
    return -1;
  }else{
    for(let i = sq + 1; i > 0; i++){
      if(Number.isInteger(Math.sqrt(i))){
        return i;
      }
    }
  }
}

console.log(findNextSquare(121));


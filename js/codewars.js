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

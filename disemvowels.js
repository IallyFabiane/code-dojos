function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}

let statementWithoutVowels = disemvowel('This site is for losers!');
console.log(statementWithoutVowels);
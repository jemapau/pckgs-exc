"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lang;
function lang(str) {
  var translation = str;

  // If the word endup with "on", then the two letters of them are remove.
  if (str.toLowerCase().endsWith("on")) {
    translation = str.slice(0, -2);
  }

  // If the word begins with the letter "a", it will be add "aa" at the end.
  if (str.toLowerCase().startsWith("a")) {
    translation += "aa";
  }

  // If the word has more than ten letters,
  // it has to be divided on two and join with a hyphen.
  var length = translation.length;
  if (length >= 10) {
    var firstHalf = translation.slice(0, Math.round(length / 2));
    var secondHalf = translation.slice(Math.round(length / 2));
    translation = firstHalf + "-" + secondHalf;
    // translation = [firstHalf, secondHalf].join('-')
  }

  function minMay(str) {
    var length = str.length;
    var translation = '';
    var capitalize = true;
    for (var i = 0; i < length; i++) {
      var char = str.charAt(i);
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }

    return translation;
  }

  function reverse(str) {
    return str.split('').reverse().join('');
  }

  // At last, if the original word is a palindrome,
  // any of the before rules counts and it will return the same word but
  // interspersed between capital letter and lower case.
  if (str == reverse(str)) {
    return minMay(str);
  }

  return translation;
}
function palindrome(kata) {
  var balikKata = ''

  for (i = kata.length-1; i >= 0; i--) {
    balikKata += kata[i]
  }
  if (balikKata === kata) {
    return true
  } else {
    return false
  }
}
console.log(palindrome('katak'))
console.log(palindrome('blanket'))
console.log(palindrome('civic'));
console.log(palindrome('kasur rusak'));
console.log(palindrome('mister'));
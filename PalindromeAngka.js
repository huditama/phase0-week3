function angkaPalindrome(num) {
  for (var i = 0; i <= num; i++) {
    num++
    
    var string = '';
    for (var j = String(num).length-1; j >= 0; j--) {
    string += String(num)[j];
    }

    if(String(num) === string) {
    return num
    }
  }
}

console.log(angkaPalindrome(1)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001

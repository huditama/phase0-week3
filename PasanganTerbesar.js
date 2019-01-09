function pasanganTerbesar(num) {
  var numberToString = String(num);
  var compareCounter = 0;

  for (var i = 0; i < numberToString.length; i++){
    var angka = Number(numberToString[i] + numberToString[i+1])
    if (angka > compareCounter){
       compareCounter = angka
    }
  }
  
  return compareCounter
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
function targetTerdekat(arr) {
  var indexO = arr.indexOf('o')
  var distance = 0
  var nearestDistance = arr.length

  if (arr.indexOf('x') === -1) {
    return 0
  }

  for (i = 0; i < arr.length; i++) {
    if (arr[i] === 'x') {
      distance = Math.abs(i - indexO)
      if (distance < nearestDistance) {
        nearestDistance = distance
      }
    }
  }
 return nearestDistance
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
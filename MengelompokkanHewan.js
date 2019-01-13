function groupAnimals(animals) {
  var sort = animals.sort()
  var output = []
  var temp = []
  var firstLetter = animals[0][0]

  for (i = 0; i < animals.length; i++) {
    if (sort[i][0] === firstLetter) {
      temp.push(sort[i])
    } else {
    output.push(temp)
    temp = []
    firstLetter = sort[i][0]
    temp.push(sort[i])
    }
  }
output.push(temp)
return output
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
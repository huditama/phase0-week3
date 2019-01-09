function balikString(word) {
var output = '';
for (var i = word.length - 1; i >= 0; i--)
  output += word[i];
return output;
}

console.log(balikString('Hello world!'))
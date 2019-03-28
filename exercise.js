const array = ["Totam", "ut", "odit","quis", "Maiores", "unde", "EX", "EST", "corporis"]

array.forEach(function(word) {
  if (word.toLowerCase() == word) {
    console.log('lowercase')
  } else if (word.length > 4) {
    console.log('long')
  } else if ((word.length > 4) && (word.toLowerCase() == word)) {
    console.log('long and lowercase')
  } else {
    console.log(word)
  }
})

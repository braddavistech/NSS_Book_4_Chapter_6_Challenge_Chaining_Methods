const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

//html total in one line
document.getElementById("total").innerHTML = integers.sort(function(a, b){return b-a}).filter(integer => integer <= 19).map(function(integer){return integer * 1.5 -1}).reduce(function(a,b) {return a + b});
//Console log in one line
console.log(integers.sort(function(a, b){return b-a}).filter(integer => integer <= 19).map(function(integer){return integer * 1.5 -1}).reduce(function(a,b) {return a + b}));
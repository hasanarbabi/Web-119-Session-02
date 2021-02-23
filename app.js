var array = ["1", "10", "Mkazemiraz", "JS", "HTML", "MFT", "true", "undefined", "null", "Sheep"];

console.log(array);

var item = prompt('What item you want to add or remove?');

var index = array.indexOf(item);

index <= -1 ? array.push(item) : array.splice(index, 1);

console.log(array);

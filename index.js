// let person = {
//   age : 18,
//   name : "<dima>",
//   address : "123 Main St",  

// }


// console.log(person['name']);

let arr = ['orange.png', 'apple.png', 'banana.jpeg', 'kiwi.png'];

DocumentFragment

function array() {
  let last = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes('.png')) {
      last.push(arr[i]);
    }
  }
  return last;
}


console.log(array(arr));


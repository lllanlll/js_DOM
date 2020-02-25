let box = document.getElementsByClassName('test')[0];

let item = box.getElementsByClassName('p-test')[0];

if (item.getAttribute('data-ljh')) alert(item.getAttribute('data-ljh'));

item.setAttribute('data-ljh', 20);

console.log(item.getAttribute('data-ljh'));
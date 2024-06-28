//2.2 Сколько убрать сверху листков, чтобы найти лист с нужной цифрой. На вход подаются числа через пробел
let arr = prompt().split(" ");
console.log(arr.length - arr.lastIndexOf("1")-1);

let number = prompt('введите число');
let tenPercent = number * 0.1;
console.log(`10% от числа ${number} равняется ${tenPercent}`);
let number1 = prompt('введите число 1');
let number2 = prompt('введите число 2');
if(number1 > number2){
    alert('наибольшее число ' + number1);
}else{
    alert('наибольшее число ' + number2);
}
let value = prompt('введите число');
if(value < 20){
    alert('Число меньше 20');
}else if (value > 20){
    alert('Число больше 20');
}else{
    alert('Число равно 20');
}
let userName = prompt('введите ваше имя');
let age = prompt('введите ваш возраст');
if(age > 20){
    alert(`Hello,  ${userName}`);
}else{
    alert(`Hi, ${userName}`);
}
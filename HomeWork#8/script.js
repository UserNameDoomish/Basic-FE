
function summator_positive_elements(someArray){
    let sum = 0;
    for (let i = 0; i < someArray.length; i++) {
        if (someArray[i] > 0) {
            sum += someArray[i];
        }
    }
    return sum;
}

function max_number(someArray){
    let number = 0;
    for(let i = 0; i < someArray.length; i++){
        if (someArray[i] > number) {
            number = someArray[i];
        }
    }
    return number;
}

function circle_area(radius){
    return Math.PI * radius ** 2;
}
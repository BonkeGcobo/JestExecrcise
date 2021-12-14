function stringLength(string){
    if(string.length>=1 && string.length<=10){
        return string.length;
    }
    return "Can't run";
}

revString = string =>{
   let arrString = string.split('').reverse();
   return arrString.join('')     
}

capitalize = string =>{
    let arrString = string.split('');
    arrString[0] = arrString[0].toUpperCase();
    return arrString.join('');
}
class Calculator {
    add = (num1,num2) => num1 + num2; 
    subtract = (num1, num2) => num1 -num2;
    multiply = (num1, num2) => num1*num2;
    divide = (num1, num2) => num1/num2;
}

let calculator = new Calculator();
 module.exports = {stringLength,revString,calculator,capitalize};
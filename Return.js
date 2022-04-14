function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');
/*
variable                   datos
hello          =           Dojo               
*/


function hello() {
    console.log('hello');
    return 15;
}
var result = hello();
console.log('result is', result);
/*
variable                     datos
hello           =           result is, result      
*/


function numPlus(num) {
    console.log('num is', num);
    return num+15;
}
var result = numPlus(3);
console.log('result is', result);
/*
variable                     datos
 numPlus(num)    =     'num is', num
numPlus(3)       =     'result is', result
*/


var num = 15;
console.log(num);
function logAndReturn(num2){
   console.log(num2);   
   return num2;
}
var result = logAndReturn(10);
console.log(result);
console.log(num);
/*
variable                     datos
num             =           15
result          =           LogAndReturn(10)
*/


var num = 15;
console.log(num);
function timesTwo(num2){
   console.log(num2);   
   return num2*2;
}
var result = timesTwo(10);
console.log(result);
console.log(num);
/*
variable                     datos
num             =               15
result          =           timeTwo(10)
*/

function timesTwoAgain(num) {
    console.log('num is', num);
    var y = num*2;
    return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log('result is', result);
/*
variable                     datos
y               =           num*2
result          =           timesTwoAgain(3) + timesTwoAgain(5)
*/


function sumNums(num1, num2) {  
    return num1+num2;
 }
 console.log(sumNums(2,3))
 console.log(sumNums(3,5))
/*
variable                     datos
function sumNums    =        num1, num2
return              =        num1+num2
console.log         =        (sumNums(2,3))
console.log         =        (sumNums(3,5))
*/

function printSumNums(num1, num2) {
    console.log(num1);   
    return num1+num2;
 }
 console.log(printSumNums(2,3))
 console.log(printSumNums(3,5))
 /*
variable                     datos
printSumNums        =       (num1, num2)
console.log         =       (num1)
return              =       num1+num2
console.log         =       (printSumNums(2,3))
console.log         =       (printSumNums(3,5))
*/

function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,5);
console.log('result is', result);
/*
variable                     datos
sum             =           num1 + num2;
console.log     =           ('sum is', sum)
result          =           sumNums(2,3) + sumNums(3,5)
console.log     =          ('result is', result)
*/

function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
console.log('result is', result);
/*
variable                     datos
sumNums         =          (num1, num2)
sum             =          num1 + num2
console.log     =          ('sum is', sum)
result          =           sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3))
console.log     =           ('result is', result)
*/
//adds values
{function add() {
    var addition = 389 + 494;
    document.getElementById("Math").innerHTML = addition;
}

//subtracts values
function sub() {
    var subtraction = 534 - 265;
    document.getElementById("Math2").innerHTML = subtraction;
}

//multiplies values
function mult() {
    var multiplication = 485 * 593;
    document.getElementById("Math3").innerHTML =  multiplication;
}

//divides values
function div() {
    var division = 580 / 5;
    document.getElementById("Math4").innerHTML =  division;
}

//solves entire equation
function more_math() {
    var all = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math5").innerHTML =  all;
}

//gives the remainder after dividing two values
function modulus() {
    var remainder = 25 % 6;
    document.getElementById("Math6").innerHTML = remainder;
}

//gives the neg equilvant of value
function negation() {
    var x = 10;
    document.getElementById("Math7").innerHTML = -x;
}}

//increase number by an increment of 1
function increment() {
    var value = parseInt(document.getElementById('Math8').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('Math8').value = value;
}

//decreases number by an decrement of 1
function decrement() {
    var value = parseInt(document.getElementById('Math9').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('Math9').value = value;
}

//returns a namdom number between 1 and 10, starting @ 1
function random() {
    document.getElementById('Math10').innerHTML = (Math.random()*10)+1;
}

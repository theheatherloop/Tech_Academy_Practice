// declared a global varable
var x = 2;

//used global variable to add two numbers together
function test() {
   var y = x + 1
   console.log(y)
}

//created a function with local varaibles to add two numbers together
function test2() {
    var z = 4
    var y = z + 7
    console.log(y)
}

//used a local variable not included in a function and debugged it with console.log
function test3() {
    var y = z + 7
    console.log(y)
}

//running each function in console.log
test();
test2();
test3();

//made a function using an if and else statement
function age() {
    years = document.getElementById("age").value;
    //if age is over or equal to 21 reply with this
    if (years >= 21){
        Drink = "You are old enough to drink!";
    }
    //if age is younger than 21 reply with this
    else {
        Drink = "You are not old enough to drink!";
    }
    document.getElementById("legal").innerHTML = Drink;
}

//function that displays time of day
function timeF() {
    //creates var with the hour of current day
    var time = new Date().getHours();
    var Reply;
    //if its before noon and after midnight reply with this
    if (time < 12 === time > 0) {
        Reply = "It is morning time!";
    }
    // if its after noon but before 6pm reply with this
    else if (time >= 12 == time < 18) {
        Reply = "It is afternoon!";
    }
    //if its after 6pm but before midnight reply with this
    else {
        Reply = "It is evening time!";
    }
    //return correct reply statment to time element
    document.getElementById("time").innerHTML= Reply
}
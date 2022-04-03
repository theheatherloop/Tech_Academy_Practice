//displays what data type "Something" is 
document.write(typeof "Something")

//shows type coersion by adding the string '5' with the number 9, resulting in a string of '59'
function ex1() {
    const value1 = '5'; 
    const value2 = 9; 
    let sum = value1 + value2; 
    document.getElementById("example").innerHTML = sum;
}

//display NaN since you can not divde 0 by 0 
function ex2() {
    document.getElementById("ex2").innerHTML= 0/0;
}

//checks if the string "Hello" is not a number, since "Hello" isn't a number it displays true
function ex3() {
    document.getElementById("ex3").innerHTML= isNaN("Hello");
}

//checks is the number 8 is not a number, since 8 is a number it displays false
function ex4() {
    document.getElementById("ex4").innerHTML= isNaN(8) ;
}

//shows a number greater than JavaScript is capable of computing, resulting in infintiy 
function ex5() {
    document.getElementById("ex5").innerHTML= 2E456 ;
}

//shows a number smaller than JavaScript is capable of computing, resulting in - infintiy
function ex6() {
    document.getElementById("ex6").innerHTML= -2E847 ;
}

// show the result of a boolean expression
function ex7() {
    document.getElementById("ex7").innerHTML= 12 > 4;
}

console.log(4 + 8);
console.log(4 < 1);

//checks to see if the left side is equal to the right side, resulting in true
function ex8() {
    document.getElementById("ex8").innerHTML= 15 == 15;
}

// checks to see if the left side is equal to the right side, resulting in false
function ex9() {
    document.getElementById("ex9").innerHTML= 13 == 345;
}

// checks if x is equal to and the same data type as y, resulting in true
function ex10() {
    x = 42;
    y = 42;
    z = x === y;
    document.getElementById("ex10").innerHTML= z;
}

//checks if a is equal to and the same daa type as b, resulting in false 
function ex11() {
    a = 1;
    b ="poggle";
    c = a === b;
    document.getElementById("ex11").innerHTML= c ;
}

//checks to see if foo is equal to and the same data type as bar, resulting in false 
function ex12() {
    foo = "two";
    bar = 2;
    foobar = foo === bar;
    document.getElementById("ex12").innerHTML= foobar;
}
//compares two boolean expressions using the and operator, resulting in true
function ex13() {
    document.getElementById("ex13").innerHTML= 15 > 5 && 2 < 65;
}

// compares two boolean expressions using the and operator, resulting in false
function ex14() {
    document.getElementById("ex14").innerHTML= 15 > 5 && 2 < 655;
}

//compares two boolean expressions using the or operator, resulting in true
function ex15() {
    document.getElementById("ex15").innerHTML= 15 <= 15 || 3 > 15 ;
}

// compares two boolean expressions using the or operator, resulting in false
function ex16() {
    document.getElementById("ex16").innerHTML= 15 <= 15 || 15 <= 15;
}

//checks if something is not true, resulting in true
function ex17() {
    document.getElementById("ex17").innerHTML= !(4 > 14);
}

// checks if something is not true, resulting in false
function ex18() {
    document.getElementById("ex18").innerHTML= !(14 > 4);
}
// while i is less than 10 print the sentence and add 1
function looping() {
    let text = "";
    let i = 0;
    while (i < 10) {
    text += "The number is " + i;
    i++;
  }
  document.getElementById("loops").innerHTML = text;
}

// returns the length of the variable text
function get_length() {
    let text = "Your mother was a hamster and your father smelt of elderberries! Now leave before I am forced to taunt you a second time!";
    document.getElementById("len").innerHTML = text.length;
}

// set array of instruments
var Instruments = ["Flute", "Tuba", "Saxophone", "Trumpet", "French horn"];
var list = "";
var x;
//lists all instruments in array
function for_Loop() {
    for (x = 0; x < Instruments.length; x++) {
        list += Instruments[x] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = list;
}

// returns the element at index 2 in the array 
function sale() {
    var apples = ["Granny Smith", "Fuji", "Pink lady", "Honeycrisp", "Envy", "Gala"];
    document.getElementById("Array").innerHTML ="Today's sale item is: " + apples[2];

}

//returns the variety, taste, and uses of the constant 
function constant_function() {
    const apple = {variety: "Gala", taste: "firm, sweet, snappy ", uses: "sauce, salads"};
    document.getElementById("Constant").innerHTML = "A " + apple.variety + "taste " + apple.taste;
}

//created a variable using let in block scope
var x = 35;
document.write(x);
{
    let x = 75;
    document.write("<br>" + x);
}
document.write("<br>" + x);

//returns math.pi 
function myFunction() {
    return Math.PI;
}

//sets returned element to myFunction() 
function my_Function() {
    document.getElementById("returned").innerHTML = myFunction();
}

//a function breaking the loop after it reaches 3 
function breaking() {
    let num = "";
    for (let i = 0; i < 5; i++) {
        if (i == 3) break;
        num += i + "<br>";
    };
    document.getElementById("break").innerHTML = num;
}

//a function continuing a loop after it reaches 3
function contin() {
    let text = "";
    for (let i = 0; i < 5; i++) {
        if (i === 3) continue;
        text += i + "<br>";
    }
    document.getElementById("continue").innerHTML = text;
}
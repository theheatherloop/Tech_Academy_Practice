//adds all parts of the sentence together creating one sentence
function oneFun() {
    var first_part = "I can ride";
    var sec_part = " my bike ";
    var third_part = "with no handlebars!" 
    document.getElementById("one").innerHTML =first_part.concat(sec_part, third_part);
}

//slices charater range out of sentence
function slice_method() {
    var sentence = "Programming is fun";
    var section = sentence.slice(15,18);
    document.getElementById("slice").innerHTML = section;
}

//turns given string into all caps
function all_caps() {
    var caps = document.getElementById("upper").innerHTML;
    document.getElementById("upper").innerHTML = caps.toUpperCase();
}

//finds the position of the  first instance of the word fly
function search () {
    var find = document.getElementById("search").innerHTML;
    var position = find.search("fly");
    document.getElementById("result").innerHTML = position;
}

// turns a number into a string
function numString() {
    var num = 1345;
    document.getElementById("num2string").innerHTML = num.toString();
}

//formats a number to the  specified length of 2
function precision() {
    var num = 14.564578;
    document.getElementById("precision").innerHTML = num.toPrecision(2);
}

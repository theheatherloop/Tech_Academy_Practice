

function getInputValue() {

  // Selecting the input element and get its value 
  let inputVal = document.getElementById("inputId").value;

  // assigned varables  for response
  let first = "Nice to meet you, ";
  let last = "!!";

    // Displaying the value with green font
  document.write(first + inputVal.fontcolor("green") + last);

}


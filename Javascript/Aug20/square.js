function square(num) {
    return num*num; 
}

function calculate() {
    let usrInput = document.getElementById("number").value;
    let output = square(usrInput);
    let outputElement = document.getElementById("output");
    outputElement.value = output;
}
//we will not use ifie here because we dont want to self execute the code
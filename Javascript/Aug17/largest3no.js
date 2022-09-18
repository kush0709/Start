(function(){

    let firstNum = -0.1;
    let secondNum = -0.2;
    let thirdNum = -0.3;
    let largestNum;

    if (firstNum >= secondNum && firstNum >= thirdNum) {
        largestNum = firstNum;     
    }
    else if (secondNum >= firstNum && secondNum >= thirdNum) {
        largestNum = secondNum;     
    }
    else {
        largestNum = thirdNum;
    }
    console.log(largestNum);
})();
(function(){
    function getSumoDigit(number) {    //143
        let sum = 0;
        while (number >= 1) {
            sum = sum + (number%10); // 1 + 4 + 3 
            number = parseInt(number/10); 
        }
        return sum;
    }
    console.log(getSumoDigit(143)); //8
    console.log(getSumoDigit(2189)); //20 
    console.log(getSumoDigit(403)); // 7
    console.log(getSumoDigit(1111)); //4

})();
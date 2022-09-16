(function() {
    
    function getHcf(firstNum , secondNum) {
        let hcf = 1;
        for(let i = 1; i <= firstNum && i <= secondNum ; i++) {
            if (firstNum % i == 0 && secondNum % i == 0) {
                hcf = i;
            }
        }

        return hcf;
    }

    console.log(getHcf(16,8));
    console.log(getHcf(18,15));

})();
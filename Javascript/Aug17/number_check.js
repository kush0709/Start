(function(){

    function numberCheck(num) {
        switch (true) {
            case num > 0:
                return "positive";
            case num < 0:
                    return "negative";
            default:
                return "zero";
        }
    }
console.log(numberCheck(90));
console.log(numberCheck(-90));
console.log(numberCheck(0));

})();
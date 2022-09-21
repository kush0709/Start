(function(){
    function powerBase(base,exponant) {
        if(exponant == 0) return 1;
        let output = 1;
        while (exponant > 0) {
            output = output * base;
            exponant--;
        }
        return output;
    }
console.log(powerBase(5,3));
console.log(powerBase(4,2));
console.log(powerBase(9,0));

})();
(function() {
    
    function getInnerDigit(num) {
        if (num.toString().length > 2) {     //this line is to convert no. into string
        let sum = 0;
        num = parseInt(num/10);
        sum = sum + (num%10);
        while (parseInt(num/100)!=0) {
            num = parseInt(num/10);
            sum = sum + parseInt(num%10);
        }
        return sum;
    }
    else
    {
        return 0;
    }
}
    console.log(getInnerDigit(2124)); //3
    console.log(getInnerDigit(262654)); //19
    console.log(getInnerDigit(206)); //0 
    console.log(getInnerDigit(511)); //1
    console.log(getInnerDigit(14444848444184)); //57
})();
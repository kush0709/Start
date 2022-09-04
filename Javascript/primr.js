(function(){

    function isPrime(num) {
        let counter = 2;
        let prime = false;
        while(counter < num){
            if(num % counter == 0){
                prime = false;
                break;
            }
        }
        return prime
    }


    console.log(isPrime(5));
    console.log(isPrime(7));
    console.log(isPrime(9));



})();


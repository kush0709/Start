(function(){

    function isPrime(num) {
        let counter = 2;
        let prime = true;
        while(counter < num){
            if(num % counter == 0){
                prime = false;
                break;
            }
            counter++;
        }
        return prime;
    }


    console.log(isPrime(5));
    console.log(isPrime(7));
    console.log(isPrime(9));
    console.log(isPrime(13));
    console.log(isPrime(29)); 



})();

 
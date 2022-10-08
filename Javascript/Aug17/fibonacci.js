(function() {
    function fibonacci(number) {
        let previous = 0;
        let current = 1;
        let output = 0;
        console.log(previous);  //0
        console.log(current);  //1

        for (let i = 1; i <= number; i++){
            output = previous + current;
            console.log(output);
            previous = current;
            current = output;
        }
    }
    console.log(fibonacci(10));
})();
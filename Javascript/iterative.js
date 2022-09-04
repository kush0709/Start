(function(){
    // let sum = 0;
    // // //loop
    // // for(let i = 1; i <= 20; i++){
    // //     if (i % 2 == 0) {
    // //     sum += i;
    // // }
    // // }   //sum of even integers
    // // console.log(sum); //110
    let sum = 0;
    let counter = 1;
    while(counter <= 20){
        if (counter % 2 != 0) {
            sum += counter;
        }
        counter++;
    }  // sum of odd number
    console.log(sum); //100
})();
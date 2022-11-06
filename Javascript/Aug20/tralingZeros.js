(function(){
function TrailingZero(num) {
    let zeroes = 0;

    for (let i = 5; parseInt(num/i)>=1; i=i*5) {
        zeroes+= parseInt(num/i);
        
    }
    return zeroes;
}
console.log(TrailingZero(10));
console.log(TrailingZero(5));
console.log(TrailingZero(8));
console.log(TrailingZero(4));
})();
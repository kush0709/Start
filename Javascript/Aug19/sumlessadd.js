// (function(){
//     function sumLessAdd(a,b) {
//         let greater = a > b ? a : b; // pehle dekhenge ki kaun bada hai out of 2
//         let smaller = a < b ? a : b;
//         while (smaller > 0) {   //smaller no. ko 0 lana hai
//             greater++;
//             smaller--;
//         }
//         return greater;
//     }

//     console.log(sumLessAdd(20,10));
//     console.log(sumLessAdd(30,40));
//     console.log(sumLessAdd(145,35));
// })();



// or 



(function(){
    function sumLessAdd(a,b) {
            while(b>0){
                a++;
                b--;
            }
            return a;
        }
    console.log(sumLessAdd(20,1));
    console.log(sumLessAdd(30,1));
    console.log(sumLessAdd(14,5));
})();
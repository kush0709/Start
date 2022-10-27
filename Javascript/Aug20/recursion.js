(function() {
    function tableMath(table , n) {
        for(let i = 1; i <= n; i++){
            console.log(`${table}*${i} is ${table*i}`)
        }    
    }
    tableMath(5,10);
})();
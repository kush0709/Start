(function(){
    function getLcm(num1 , num2){
        let greater = num1>=num2 ? num1 : num2;
        while(true){
            if (greater % num1 == 0  && greater % num2 == 0) {
                break;
            }
            greater++;
        }
        return greater;
    }
    console.log(getLcm(24,36));
    console.log(getLcm(5,10));

})();
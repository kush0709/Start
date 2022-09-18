(function(){
    //coding is fun 13 character
    function reverseString(str){
        let updateString = "";
        for (let i = str.length - 1; i >= 0; i--){
            updateString = updateString + str[i];
        }
        return updateString;   
    }

    console.log(reverseString("coding is fun"));
    console.log(reverseString("Ironman is best "));
})();
(function() {
    function playSchool(temp,raining){
    if(temp>20 && temp <25 && ! raining == false) {
        console.log("go play out"); 
    } else if (temp>18 && temp <20 && raining == true) {
        console.log("go play in");
    } else {
        console.log("stay home");
    }
    }
console.log(playSchool(20,falue))
})();
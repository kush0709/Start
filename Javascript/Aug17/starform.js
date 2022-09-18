(function(){
    function getStar(nofstar) {
        for (let i = 0; i <= nofstar; i++) {
            for (let j = 0; j < i; j++) {
                document.write("*")    
            }
            document.write("<br>")
        }
    }
getStar(5);
})();
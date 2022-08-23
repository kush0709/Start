(function() {
    
    function outerfunc(add) {
        var a = 10;
        var b = 20;
        var output = add(a,b);
        console.log(output)
    }
    
    
    var add = function(a,b) {
        return a+b;
    };
    outerfunc(add);

})();
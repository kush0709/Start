(function(){
    // hoisting moves all variable declaration at the top
    var empName = 34;
    // hoisting works with var keyword only 
    console.log(empName);
    //  var empName is declaration and empName  = 34 is initialisation
    printName() //using it before declaration
    // function declaration is also hoisted
    function printName() {
        console.log(empName);
    }

    //function expression
    var print2
    print2(); //ERROR : print2 is not a function
    var print2 = function(){
        console.log(empName)
    }





})();
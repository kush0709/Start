(function(){
    var b = 10;   //Global scope
    
    function add(){     //Functional scope
        var a = 5;    //inside add function & Local scope
        console.log ("a = " + a);
        console.log ("Add func b = " + b);
        console.log(a+b); 
    }

    function print() {        //Functional scope
        console.log ("Print func b = " + b); 
    }


    //Global scope
    add();
    print();
    console.log ("Globally  b = " + b);


})();
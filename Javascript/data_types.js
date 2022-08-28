(function(){
    //number    
    //explicit data type
    var empid =  Number(12345);
 
    //implicit data type
    var empAge = 33; //  u define empAge here as a  variable

    console.log(typeof(empid));
    console.log(typeof(empAge));

    //j  s is loosely type languuage
    empAge = "45"; // u redefine empAge here as a string variable
    console.log(typeof(empAge)); 


})(); //IIFE
(function(){
//global scope
var company = "ABC Corporation";


//functional scope - var

//block scope - Let & const
// if , switch, for,while, or{} is a block
function getSalary() {
    let salary = 1000000;
    if(salary>100000){
        var tax = 0.1 * salary;
        salary = salary-tax;
    }
    console.log(salary);
    console.log(tax);
}

})();
(function(){

let empName = "kaushal",
    empAge = 33,
    salary = 700000;

    // //IF ELSE
    // if(salary <= 50000) {
    //     console.log("no tax")
    // } else {
    //     console.log("tax")
    // }


    // //Else IF
    // if (salary >= 1000000) {
    //     console.log("30% tax")
    // } else if (salary >= 700000) {
    //     console.log("10% tax")
    // } else {
    //     console.log("No tax")
    // }

    //switch statement
    switch (true) {
        case salary >= 1000000:
            console.log("30% tax")
            break;
        case salary >= 700000:
            console.log("10% tax")
            break;
        default: 
            console.log("No tax")
            break;
    }



})();

(function(){


    function checkMarks(marks) {
        return marks >= 40 ? "passed" : "failed";
    }

    console.log(checkMarks(40));
    console.log(checkMarks(30));
    console.log(checkMarks(50));
    console.log(checkMarks(20));
    console.log(checkMarks(90));

})();

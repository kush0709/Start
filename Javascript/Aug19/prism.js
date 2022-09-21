(function(){
    function prism(radius,perimeter,vol) {
        let semiperimeter = perimeter/2;  //we can do it with direct perimeter as well as we dont need to convert it in semiperimeter
        let height = vol / (semiperimeter*radius);
        return height;
    }
console.log(prism(3,15,270));
})();




// // //radius = area/semiperimeter
// // h = v/a    a = v/h
// h = 2v / (r*p)
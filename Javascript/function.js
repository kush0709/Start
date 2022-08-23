function ifTriangle(a, b, c) {
        if (b+c<=a || a+c<=b || a+b<=c)
        return false;
        else
        return true;
        }
    let a=5, b=12, c=12;
    if (ifTriangle(a, b, c))
console.log("triangle");
else
console.log("non triangle");


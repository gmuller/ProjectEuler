var m = 2;
var n = 1;
var stop = 0;
var prod = 0;
while(stop != 1000){
    var a = Math.pow(m, 2) - Math.pow(n, 2);
    var b = 2 * (m) * (n);
    var c = Math.pow(n, 2) + Math.pow(m, 2);
    console.log("a: " + a + " b: " + b + " c: " + c);
    if (1000 % (a+b+c) == 0){
        var scalar = (1000 / (a+b+c));
        console.log((scalar * a) * (b * scalar) * (scalar*c));
        break;
    } else {
        n++;
        if (n == m) {
            n=1;
            m++;
        }
    }
}

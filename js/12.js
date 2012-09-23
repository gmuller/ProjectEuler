var tri = 0;
var num_divisors = 2;

for (var i = 1; num_divisors < 500; i++) {
    tri = tri + i;
    for (j = 2; j <= tri/2; j++) {
        if (tri % j == 0){ num_divisors++; }
    }

    if (num_divisors < 500) {
        num_divisors = 2;
    }
}
console.log(tri + " has " + num_divisors + " divisors");

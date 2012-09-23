var found=0;

for (i=999; i>=100; i--) {
    for (j=i; j>=100; j--) {
        var prod = i * j;
        if (found < prod) {
            prodBack = prod.toString();
            if (prodBack.length % 2 === 0) {
                prodBack = prodBack.toString().split("").reverse().join("");
                if (prod == prodBack) {
                    found = prodBack;
                    break;
                }
            }
        } else {
            break;
        }
    }
}
    console.log(found);

for (i = 20; ; i=i+20) {
    for(j = 19; j > 10; j--) {
        if (i % j === 0) {
            if (j === 11) {
                console.log(i);
                process.exit(0);
            }
        } else {
            break;
        }
    }
}

var singles = {0:"", 1:"one", 2:"two", 3:"three", 4:"four",
               5:"five", 6:"six", 7:"seven", 8:"eight", 9:"nine",
               10:"ten", 11:"eleven",12:"twelve", 13:"thirteen",
               14:"fourteen", 15:"fifteen", 16:"sixteen", 17:"seventeen",
               18:"eighteen", 19:"nineteen"};
var doubles = {2: 'twenty', 3:'thirty', 4:'forty', 5:'fifty',
               6:'sixty', 7:'seventy', 8:'eighty', 9:'ninety'};
function getLetters(number) {
    var nString = number.toString();
    length = nString.length;
    if (length == 1){
        return singles[nString];
    } else if (length == 2){
        var first = nString.charAt(0);
        if (first == 1) {
            return singles[nString];
        } else {
            return doubles[nString.charAt(0)] + singles[nString.charAt(1)];
        }
    } else if (length == 3) {
        var newNum = parseInt(nString.substring(1, 3), 10);
        console.log(newNum);
        var tweener = 'hundredand';
        if (newNum == 0) { tweener = 'hundred'; }
        return singles[nString.charAt(0)] + tweener  + getLetters(newNum);
    } else if (length == 4) {
        var newNum = parseInt(nString.substring(1, 4), 10);
        return singles[nString.charAt(0)] + 'thousand' + getLetters(newNum)
    }
}

var sum = 0;
for (var i = 1; i <= 1000; i++) {
    sum += getLetters(i).length;
}
console.log(sum);

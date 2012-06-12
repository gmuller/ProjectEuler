var numbers = [];

var fs = require('fs');
var array = fs.readFileSync('18.txt').toString().split("\n");
for(i in array) {
    var digits = array[i].split(" ");
    var numberLine = [];
    for (j in digits) { numberLine.push(parseInt(digits[j]));}
    numbers.push(numberLine);
}

function Node(origin) {
    this.origin = origin;
}

Node.prototype = {
    getMax: function() {
        if (typeof this.calculated !== "undefined") { return this.calculated; }

        if (typeof this.lhs === "undefined" || typeof this.rhs === "undefined"){
            return this.origin;
        }

        var highest;
        if (this.lhs.getMax() > this.rhs.getMax()) {
            highest = this.lhs.getMax();
        } else {
            highest = this.rhs.getMax();
        }
        this.calculated = highest + this.origin;
        return this.calculated;
    }
}

var nodeTree = [];
for (var y = numbers.length-1; y >= 0; y--) {
    var nodes = [];
    for (var x = 0; x < numbers[y].length; x++) {
        node = new Node(numbers[y][x]);
        var index = numbers.length-y-2;
        if (typeof nodeTree[index] !== "undefined") {
            node.lhs = nodeTree[index][x];
            node.rhs = nodeTree[index][x+1];
        }
        nodes.push(node);
    }
    nodeTree.push(nodes);
}

console.log(nodeTree[nodeTree.length-1][0].getMax());

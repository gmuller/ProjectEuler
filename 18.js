Node.prototype = {
    getMax: function() {
        if (typeof this.lhs === "undefined" || typeof this.rhs === "undefined"){
            return this.origin;
        }

        if (this.lhs.getMax() > this.rhs.getMax()) {
            return this.lhs.getMax() + this.origin;
        } else {
            return this.rhs.getMax() + this.origin;
        }
    }
}

var numbers = [[3],[7, 4], [2, 4, 6], [8, 5, 9, 3]];

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
console.log(nodeTree);
console.log(nodeTree[nodeTree.length-1][0].getMax());

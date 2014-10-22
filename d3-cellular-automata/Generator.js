'use strict';
var Generator = function() {

    Generator.prototype.grid = function(rows, cols, state) {
        var nodes = [];
        var edges = [];
        var n = 0;
        var e = 0;
        for (var r = 0; r < rows; r++) {
            for (var c = 0; c < cols; c++) {
                // Create the edges and update the ids
                if (c < cols - 1) {
                    edges.push({id: e, leftId: n, rightId: n + 1, weight: 1});
                    e++;
                }
                if (r < rows - 1) {
                    edges.push({id: e, leftId: n, rightId: n + cols, weight: 1});
                    e++;
                }
                // Create the node and update the id
                nodes.push({id: n, state: state, meta: {row: r, col: c} });
                n++;
            }
        }
        return { nodes: nodes, edges: edges };
    };
    
    Generator.prototype.hex = function(rows, cols, state) {
        var nodes = [];
        var edges = [];
        var n = 0;
        var e = 0;
        for (var r = 0; r < rows; r++) {
            for (var c = 0; c < cols; c++) {
                // Create the edges and update the ids
                if (c < cols - 1) {
                    edges.push({id: e, leftId: n, rightId: n + 1, weight: 1});
                    e++;
                }
                if (r < rows - 1) {
                    edges.push({id: e, leftId: n, rightId: n + cols, weight: 1});
                    e++;
                    if (c > 0 && r % 2 === 0) {
                        edges.push({id: e, leftId: n, rightId: n + cols - 1, weight: 1});
                        e++;
                    }
                    if (c < cols - 1 && r % 2 === 1) {
                        edges.push({id: e, leftId: n, rightId: n + cols + 1, weight: 1});
                        e++;
                    }
                }
                // Create the node and update the id
                nodes.push({id: n, state: state, meta: {row: r, col: (c + (r % 2 === 1 ? 0.5 : 0))} });
                n++;
            }
        }
        return { nodes: nodes, edges: edges };
    };

    return this;
};

//var Generator = new Generator();
//var grid = Generator.grid(3, 3, 'alpha');
//console.log('\nGenerator.grid(3, 3)');
//console.log('{ nodes:\n', grid.nodes, ',');
//console.log('edges:\n', grid.edges, '};');

//var hex = Generator.hex(3, 3, 'alpha');
//console.log('\nGenerator.hex(3, 3)');
//console.log('{ nodes:\n', hex.nodes, ',');
//console.log('edges:\n', hex.edges, '};');


var rotator = require('../lib/rotateMatrix.js');
var assert = require('assert');

// Immediately invoked.
(function runTests() {
    var input;
    var moduleOutput;

    examples = [
        [
    	   [1,2,3,4],
    	   [5,6,7,8],
    	   [9,10,11,12],
    	   [13,14,15,16]
        ],
        [
            [0, 0, 1],
            [0, 0, 0],
            [0, 0, 0]
        ]
    ];

    solutions = [ 
        [
    	   [ 13, 9, 5, 1 ],
           [ 14, 10, 6, 2 ],
           [ 15, 11, 7, 3 ],
           [ 16, 12, 8, 4 ] 
        ],
        [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 1]
        ]
      ];

    

    for (var i = 0; i < examples.length; i++) {
        input = examples[i];
        moduleOutput = rotator(input);
        assert.deepEqual(moduleOutput, solutions[i], 'example ' + i);
    }
}());

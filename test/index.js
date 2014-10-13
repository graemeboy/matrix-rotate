var rotator = require('../lib/rotateMatrix.js'),
	assert = require('assert'),
	givenMatrix,
	correctRotated,
	moduleOutput;

givenMatrix = [
	[1,2,3,4],
	[5,6,7,8],
	[9,10,11,12],
	[13,14,15,16]
];

correctRotated = [ 
	[ 13, 9, 5, 1 ],
  	[ 14, 10, 6, 2 ],
  	[ 15, 11, 7, 3 ],
  	[ 16, 12, 8, 4 ] 
  ];

runTest(givenMatrix, correctRotated, 'Simple 4x4 array');

function runTest(givenMatrix, correctRotated, msg) {
	moduleOutput = rotator(givenMatrix);
	assert.deepEqual(moduleOutput, correctRotated, msg);
}



matrix-rotate
=============

Rotate a 2D JavaScript array in place by 90 degrees, with a simple command.

Example:

````javascript
var rotate = require('matrix-rotate');

var matrix = [
	[1,2,3,4],
	[5,6,7,8],
	[9,10,11,12],
	[13,14,15,16]
];

rotate(matrix);

console.log(matrix);
/*
	Output:
	[ 
		[ 13, 9, 5, 1 ],
	  	[ 14, 10, 6, 2 ],
	  	[ 15, 11, 7, 3 ],
	  	[ 16, 12, 8, 4 ] 
  	];
 */
````

#### Preconditions
* Matrices are square (it cannot rotate a non-square matrix).
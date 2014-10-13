module.exports = function (mat) {
	// Our rotation algorithm involves two steps.
	transpose(mat);
	reverseRows(mat);
	return mat;
}

/**
 * Swap each colum with it's n-i corresponding element
 */
function reverseRows(mat) {
	var n = mat[0].length;
	for (var i = 0; i < n; i++)
		for (var j = 0; j < n; j++)
			if (j%2===0) {
				var temp = mat[i][n - j - 1];
				mat[i][n-j - 1] = mat[i][j]
				mat[i][j] = temp;
			}
}

/**
 * Transpose a 2d matrix
 */
function transpose(mat) {

	// For NxN matrix
	var n = mat[0].length;

	// Walk through columns
	for (var i = 0, j = 0; i < n; i++) {
		j = i;
		// Walk through rows
		while (j < n) {
			if (i != j) {
				var temp = mat[i][j];
				mat[i][j] = mat[j][i];
				mat[j][i] = temp;
			}
			j++;
		}
	}
}
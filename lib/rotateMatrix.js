module.exports = function (matrix) {
	// Our rotation algorithm involves two steps, transposing
	// and reversing.
	transpose(matrix);
	reverseRows(matrix);
	return matrix;
}

/**
 * Swap each colum with it's n-i corresponding element
 */
function reverseRows(matrix) {
  for (i in matrix) {
    matrix[i] = matrix[i].reverse();
  }
}

/**
 * Transpose a 2D matrix
 */
function transpose(matrix) {
	// For NxN matrix
	var n = matrix[0].length;
	var temp;

	// Walk through columns
	for (var i = 0, j = 0; i < n; i++) {
		j = i;
		// Walk through rows
		while (j < n) {
			if (i !== j) {
				temp = matrix[i][j];
				matrix[i][j] = matrix[j][i];
				matrix[j][i] = temp;
			}
			j++;
		}
	}
}
module.exports = function (mat) {
	// Our rotation algorithm involves two steps.
	transpose(mat);
	mat = reverseRows(mat);
	return mat;
}

/**
 * Swap each colum with it's n-i corresponding element
 */
function reverseRows(matrix) {
  for (i in matrix){
    matrix[i] = matrix[i].reverse();
  }
  return matrix;
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
// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9  
// The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

// Function description

// Complete the  function in the editor below.

// diagonalDifference takes the following parameter:

// int arr[n][m]: an array of integers
// Return

// int: the absolute diagonal difference

const matrix = [
  [7, 7, 4],
  [7, 4, 9],
  [8, 3, 7],
];

function diagonalDifference(arr) {
  // Write your code here
  let primDiag = 0;
  let scnDiag = 0;
  let rev = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    primDiag += arr[i][i];
    scnDiag += arr[i][rev];
    rev -= 1;
  }
  return Math.abs(primDiag - scnDiag);
}
console.log(diagonalDifference(matrix));

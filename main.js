//This code navigates and imaginary hoover in an imaginary rectangle room

//hoover
var hoover = {
  position: [0,0]
};

console.log ('Your current position is: + hoover.position');

//This is the room in a grid rectangle
//lets create the room first

function createMatrix(columns,rows) {
  var matrix = [];
  for var i = 0; i< columns; i++) {
    matrix [i] = new Array(rows);

  }
  return matrix
}

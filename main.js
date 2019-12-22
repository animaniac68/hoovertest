//This code navigates and imaginary hoover in an imaginary rectangle room

//hoover
var hoover = {
  position: [0,0]
};

console.log ('Your current position is: + hoover.position');

//his is the room in a grid rectangle where the hoover will do it's 
//life's sole purpose (to clean an imaginary room)

function createGrid(columns,rows) {
  var grid = [];
  for var i = 0; i< columns; i++) {
    grid [i] = new Array(rows);

  }
  return grid
}
//the dirty room has 5 columns and 5 rows.
var dirtyRoom = createGrid (5,5);
console.log (dirtyRoom);

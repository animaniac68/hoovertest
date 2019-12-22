//This code navigates and imaginary hoover in an imaginary rectangle room

//HOOVER
var hoover = {
  position: [0,0]
};

console.log ('Your current position is: + hoover.position');

//GRID
//This is the room as a grid rectangle where the hoover will do it's
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

//CONTROLLS
//Now we need to make the hoover move by creating some controllers,
//the controllers will be cardinal (Naughty Elephants Squirt Water) ;-p
//(I mean North East South West)

function commands(command){
 for var i = 0; i < command.length; i++)
 {
switch (command [i]){

  case 'N':
  moveNorth();
  break;

  case 'E':
  moveEast();
  break;

  case 'S';
  moveSouth();
  break;

  case 'W';
  moveWest;
  break;
}
   console.log (hoover)
 }
}

//This is what happens when you want the hoover to moveNorth,

function moveNorth(){
  console.log('moveNorth was called');

  switch (hoover.position) {

    case 'N': hoover.position[0,0] = hoover.position
    [0,1];
    break;
  }
}
//This is what happens when you want the hoover to moveEast

function moveEast(){
  console.log('moveEast was called');

  switch (hoover.position) {

    case 'E': hoover.position[0,0]= hoover.position
    [1,0];
    break;
  }
}

    case 'S': hoover.position [0,0]= hoover.position
    [0,-1];
    break;

    case 'W': hoover.position [0,0] = hoover.position
    [-1,0];
    break;
  }
}

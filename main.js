//This code navigates and imaginary hoover in an imaginary rectangle room

//HOOVER
var hoover = {
  position: [0,0]
};
//lets make some mess : DIRT
var dirt = {
  position: [0,0]
};


console.log ('Your current position is: + hoover.position');
console.log ('The number of dirt patches cleaned by hoover are: ');

//GRID
//This is the room as a grid rectangle where the hoover will do it's
//life's sole purpose (to clean an imaginary room)

function createGrid(columns,rows) {
  var grid = [];
  for (var i = 0; i< columns; i++) {
    grid [i] = new Array(rows);

//grid = Array.from(grid, item => item | | 0);
  }
  return grid
}
//the dirty room has 5 columns and 5 rows
var dirtyRoom = createGrid (5,5);

//dirt placement

//
// var dirt =
//   dirtyRoom [1][1] = '#';
//   dirtyRoom [3][1] = '#';




console.log (dirtyRoom);

//this checks if there is  dirt at the location of the hoover and will clean the dirt if needed
// function cleanPatch(hoover, dirt){
// if (hoover.location === dirt.location) {
//   dirtyRoom.splice(i,1);
//   break;
// }
// }

// var dirtyRoom = [];
// var index = dirtyRoom.indexOf('D');
// if (index > -1) {
//        arr.splice(index, D);
//      }

//replaces a 'D' with a null if 'H' = 'D'
function cleanPatch (dirt, hoover)
if (hoover.location === dirt.location){
var index = items.indexOf('D');
id (index  !== -1){
  items [index] = null
}
  return null
}


dirtyRoom[hoover.position[0]][hoover.position[1]] = 'H';
dirtyRoom[dirt.position[0]][dirt.position[1]] = 'D';

console.log('dirt removed at + hoover.location')


var travelLog = [];


//CONTROLLS
//Now we need to make the hoover move by creating some controllers,
//the controllers will be cardinal (Naughty Elephants Squirt Water) ;-p
//(I mean North East South West)

function commands(command){
 for (var i = 0; i < command.length; i++)
 {
switch (command [i]){

  case 'N':
  moveNorth();
  break;

  case 'E':
  moveEast();
  break;

  case 'S':
  moveSouth();
  break;

  case 'W':
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
//insert dirt detector
  console.log(hoover);
}
//This is what happens when you want the hoover to moveEast

function moveEast(){
  console.log('moveEast was called');

  switch (hoover.position) {

    case 'E': hoover.position[0,0]= hoover.position
    [1,0];
    break;
  }
//insert dirt detector
console.log(hoover);
}
//This is what happens when you want the hoover to moveSouth

function moveSouth(){
  console.log('moveSouth was called');
  switch (hoover.position){
    case 'S': hoover.position [0,0]= hoover.position
    [0,-1];
    break;
  }
  //insert dirt detector
  console.log(hoover);
}

//This is what happens when you want the hoover to moveWest

function moveWest(){
  console.log('moveWest was called');
  switch (hoover.position){

    case 'W': hoover.position [0,0] = hoover.position
    [-1,0];
    break;
  }
  //insert dirt detector
  console.log(hoover);
}

//This code sets the location of the dirty patches
//this code helps the hoover to detect the dirt at a location

var dirt = {
  location: [0,0],
}


//This code logs the position of the HOOVER




//TESTS
console.log ('test controllers');
commands('NNEEWS');
console.log ('test dirt location')

console.log ('controller testing on grid')

console.log (hoover);
dirtyRoom[hoover.position[0,0]]= 'hoover'

console.log(dirtyRoom);

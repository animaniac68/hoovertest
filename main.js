
//This code allows the input.txt file to be read, each line is an element of the array readInput
var fs = require('fs');
var readInput = fs.readFileSync('input.txt', 'utf8').toString().split("\n");
//**TEST console.log(readInput);

//Read GRID dimensions from input.txt
var gridSize = readInput[0].split(/[ , ]+/);
//**TEST console.log ('The input grid size is: ' + gridSize);
//Read HOOVER position from input.txt
var hoover = {
  position:readInput[1].split(/[ ,]+/).map(Number)};
//**TEST console.log ('The hoover is at start position: ' + hoover.position);
//Read DIRT position from input.txt
var dirt = {
  a: readInput[2].split(/[ , ]+/),
  b: readInput[3].split(/[ , ]+/),
  c: readInput[4].split(/[ , ]+/)
};
//**TEST console.log ('The dirt is at positions: ' + dirt.a +' , ' + dirt.b +' , '+ dirt.c);
//Cardinal Directions read from input.txt
var cardinalInput = readInput[5];
//**TEST console.log (cardinalInput);

//Now lets create the dirty room (grid) for our hoover to roam around in and clean up.
// CREATE Grid
function createGrid(columns, rows) {
	var grid = [];
	for (var i = 0; i < columns; i++) {
		grid [i] = new Array(rows);
	}
	return grid;
};

var myGrid = createGrid(5,5);
//**TEST console.log(myGrid);

//This small piece of code logs the travel movements of the hoover.
var travelLog = [];

//************** MOVEMENT *****************

//This code ensure that the hoover does not move out of the boundaries of the grid.
//If the hoover moves outside the boundary, the position is reset to previous position.
function Stop(movement) {
	if (hoover.position[0] < 0 || hoover.position[0] >= 10) {
		//**TEST console.log('Stop! your reached the border, you cannot move ' + movement);
		hoover.position[0] = 0;
	}
	if (hoover.position[1] < 0) {
		//**TEST console.log('Stop! your reached the border, you cannot move ' + movement);
		hoover.position[1] = 0;
	} else {
		RegisterTravelLogMovement();
	}};

//This code moves the hoover around the grid
function commands(command) {
	for (var i = 0; i < command.length; i++) {
		switch (command[i]) {
//MOVE NORTH
      case 'N':
      hoover.position[0] = hoover.position[0] + 1;
      //**TEST console.log('moveNorth was called');
      RegisterTravelLogMovement();
			break;
//MOVE SOUTH
			  case 'S':
      	hoover.position[0] = hoover.position [0]-1;
        //**TEST console.log('movesSouth was called');
        RegisterTravelLogMovement();
				break;
//MOVE EAST
        case 'E':
        hoover.position[1] = hoover.position[1]+ 1;
      //**TEST console.log('moveEast was called');
        RegisterTravelLogMovement();
				break;
//MOVE WEST
        case 'W':
        hoover.position[1] = hoover.position[1]- 1;
      //**TEST console.log('moveWest was called');
        RegisterTravelLogMovement();
				break;
    }
      Stop ();
      //**TEST console.log(hoover)
  }};

//This code gets the new position of the hoover
function RegisterTravelLogMovement() {
	travelLog.push(hoover.position);
 Dirtbuster();
};

//************* DIRT
//This code counts the number of dirt patches that were cleaned by the hoover
var counter;
counter = 0;

function Dirtbuster () {
if (hoover.position[0] == dirt.a[0] && hoover.position[1]== dirt.a[1]){
counter = counter + 1;
//**TEST console.log('dirt busted! Total busted: '+ counter);
}};

commands(cardinalInput);
//**TEST console.log(travelLog);

//=======================================
//******** OUTPUTS **********************
// **** FINAL HOOVER POSITION *****
console.log(hoover.position);
//**** TOTAL NUMBER OF DIRT CLEANED ****
console.log(counter);
//=======================================

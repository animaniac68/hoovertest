//This code allows the input.txt file to be read, each line is an element of the array readInput
var fs = require('fs');
var readInput = fs.readFileSync('input.txt', 'utf8').toString().split("\n");
console.log('INPUT DATA');
console.log(readInput)

//read GRID dimensions

var gridSize = readInput[0];
console.log ('The input grid size is: ' + gridSize)


console.log('=====================')
//read HOOVER position
var hoover = {
  position:readInput[1]}
console.log ('The hoover is at start position: ' + hoover.position)

console.log('=====================')

//read DIRT position
var dirt1 = readInput[2];
var dirt2 = readInput[3];
var dirt3 = readInput[4];


console.log ('The dirt is at positions: ' + dirt1 +' , ' + dirt2 +' , '+ dirt3)
//=================================
console.log('=====================')
console.log('CARDINAL INPUT:')
//Cardinal Directions read from input
var cardinalInput = readInput[5];
console.log (cardinalInput)

console.log('=======================')

//==============================
console.log('GRID:')

// CREATE Grid
function createGrid(columns, rows) {
	var grid = [];
	for (var i = 0; i < columns; i++) {
		grid [i] = new Array(rows);
	}
	return grid;
}

//TEST creating grid with elements in a similar format to input data

var myGrid = [
['1 5','2 5','3 5','4 5','5 5'],
['1 4','2 4','3 4','4 4', '5 4'],
['1 3','2 3','3 3','4 3', '5 3'],
['1 2','2 2','3 2','4 2', '5 2'],
['1 1','2 1','3 3','4 1', '5 1']];
createGrid(5, 5);

console.log(myGrid);
console.log('=====================')

//  lets  find the location of the Hoover index on myGrid, as the input data is a string that cannot be passed as int due to a blank space in between, we will use the hoover index to navigate around the grid and then call the element string value when the hoover moves.
//
function getIndexOfH(myGrid, hoover) {
  for (var i = 0; i < myGrid.length; i++) {
    var index = myGrid[i].indexOf(hoover);
    if (index > -1) {
      return [i, index];
    }
  }
}
//search the grid with the string input e.g. '1 3' location, then find the corresponding grid index.
var hooverI = getIndexOfH(myGrid, hoover.position);
//test get index of hoover
console.log('The hoover ' + hoover.position + ' is located in myGrid array at ' + hooverI + '.' );

//now do the same for the dirt
// Find the location of the Dirt index on my grid
//=========Dirt1
function getIndexOfD1(myGrid, dirt1) {
  for (var i = 0; i < myGrid.length; i++) {
    var index = myGrid[i].indexOf(dirt1);
    if (index > -1) {
      return [i, index];
    }
  }
}

var dirt1L = getIndexOfD1(myGrid, dirt1);
//test get index of dirt1
console.log('The dirt ' + dirt1 + ' is located in myGrid array at ' + dirt1L + '.' );
//==========Dirt 2
function getIndexOfD2(myGrid, dirt2) {
  for (var i = 0; i < myGrid.length; i++) {
    var index = myGrid[i].indexOf(dirt2);
    if (index > -1) {
      return [i, index];
    }
  }
}
var dirt2L = getIndexOfD2(myGrid, dirt2);
//test get index of dirt2
console.log('The dirt ' + dirt2 + ' is located in myGrid array at ' + dirt2L + '.' );
//=========Dirt 3
function getIndexOfD3(myGrid, dirt3) {
  for (var i = 0; i < myGrid.length; i++) {
    var index = myGrid[i].indexOf(dirt3);
    if (index > -1) {
      return [i, index];
    }
  }
}

var dirt3L = getIndexOfD3(myGrid, dirt3);
//test get index of dirt3
console.log('The dirt ' + dirt3 + ' is located in myGrid array at ' + dirt3L + '.' );


//=======================
var travelLog = [];
console.log('=====================')

//movement of Hoover

//moveNorth
function moveNorth() {
	console.log('moveNorth was called');
	switch (hooverI) {
		case 'N':
    	hooverI[1] = hooverI[1] + 1;
      return newHooverI;
			break;
			}
      RegisterTravelLogMovement();

      console.log(hoover.position)
}
function moveSouth() {
	console.log('moveSouth was called');

	switch (hoover.position) {
		case 'S':
			hooverI[0][1] = hooverI[0]+1[1]
      ;
			break;}

      RegisterTravelLogMovement();

      console.log(hooverI)
}
function moveEast() {
	console.log('moveEast was called');

	switch (commands) {
		case 'E':
			hoover.position[0] = hoover.position[1]
      + 1;
			break;}
      console.log(hoover)
}
function moveWest() {
	console.log('moveWest was called');

	switch (commands) {
		case 'W':
			hoover.position[0] = hoover.position[1]
      - 1;
			break;}
      console.log(hoover)
}

function commands(command) {
	for (var i = 0; i < command.length; i++) {
		switch (command[i]) {
			case 'N':
				moveNorth();
				break;

			case 'S':
				moveSouth();
				break;

        case 'E':
				moveEast();
				break;

        case 'W':
				moveWest();
				break;
    }
  }
}
console.log('=====================')


function RegisterTravelLogMovement() {
	travelLog.push(
		'Hoover moved, Hoovers position is: ' + hooverI
	);
}
//Commands Testing
console.log('COMMANDS TESTING ON GRID');
commands(cardinalInput);

console.log('=================');
//====================
console.log('TRAVEL LOG');

console.log(travelLog);
console.log('=================');

console.log('=================');

//========================
console.log('COMMANDS TESTING ON GRID');

console.log(hooverI);

//place all objects on the grid
myGrid[hooverI[0]][hooverI[1]] = 'H';
myGrid[dirt1L[0]][dirt1L[1]] = 'D';
myGrid[dirt2L[0]][dirt2L[1]] = 'D';
myGrid[dirt3L[0]][dirt3L[1]] = 'D';


console.log(myGrid);

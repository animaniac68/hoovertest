# hoovertest
This terminal program requires node.js installation
please click on this link https://nodejs.org/en/download/ to download node to your machine. 
You will need to download this repository to your machine in order to run it. 
On a Mac:
Open Terminal, set the path to the folder using 'cd'.
type:  node main.js 
Press ENTER

This program allows you to navigate a hoover (like a Roomba) in a rectangle room.
The room is based on a grid where co-ordinates are X,Y.

The size of the room is 5 x 5 where the bottom left corner is 0,0.

There are also locations of the patches of dirt defined by X,Y co-ordinates and an initial hoover position.

You can navigate the hoover using cardinal directions where N = North, E = East, S = South and W = West.

There is an attatched file called input.txt where line 1 = Grid size, line 2 = Hoover's initial location. line 3 - 5 are the patches of Dirt and line 6 are the commands to move the hoover accross the grid. You may edit the initial hoover position, dirt positions and cardial commands. 

The first line of the output states the Hoover's final position. 
The second line states the number of patches cleaned up. 

Enjoy :) 

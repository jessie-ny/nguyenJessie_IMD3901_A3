1.Overview of what you did (i.e., what are the controls? Why this design?)
I created a system that connects two participants via websockets. I created one collaborative multi-user interaction and one competitive multi-user interaction. And both interactions have a 2D and 3D version. 

The collaborative multi-user interaction is inspired by the logic puzzle game minesweeper. In 2D mode there is a 5x6 grid of buttons, and in 3D mode there is a 5x6 grid of boxes. Users can take turns clicking on the grid to change its colour / to reveal whether or not the coordinate they chose is a mine or not.

The competitive multi-user interaction is tic-tac-toe. In 2D mode there is 3x3 grid of buttons, and in 3D mode there is 3x3 grid of boxes. In 2D mode player 1 can click on a button to make it turn green, and player 2 can double click to make it turn blue. In 3D mode player 1 can click on a box to make it turn green, and player 2 can hover over a box to make it turn blue.

For both 3D modes, users on mobile can tilt their screen to use the cursor to interact with boxes. 


2. What was challenging.
It was challenging figuring out how to emit the button/box colour changes to all users. 


3. What went well (i.e., how did you solve the above challenges?).
I was able to solve the challenge mentioned above by implementing the socket.on emit from the class code. 

Furthermore, reading the documentation on updating a component with .setAttribute() (found here:https://aframe.io/docs/1.4.0/introduction/javascript-events-dom-apis.html#retrieving-component-data-with-getattribute), helped me figure out the proper syntax for updating a single property(material) of a multi-property component (a-box) for my 3D mode. 

And refreshing myself on how to set the backgroundColor property of an object in html helped me figure out the syntax for updating the button background colour in 2D Mode. 

4. The URL to your GitHub repository: 



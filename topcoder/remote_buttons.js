	
// A particular computerized piece of home electronics operates through your television set. Input is via your wireless remote control and output is displayed on the TV. 
// To input a string of text into the system, a grid of characters is displayed on the screen with a cursor. 
// To input each character of the string, you move the cursor around using the arrow keys on your remote until the cursor is on the desired character, 
// then you press "SELECT". After all the characters are input, you press "ENTER".

// Here is the grid displayed on your TV screen.
// A B C D E F G 
// H I J K L M N 
// O P Q R S T U 
// V W X Y Z 1 2
// 3 4 5 6 7 8 9
// 0 $ . , - ! ?
// : / + ( ) * @ 
// & % # = < >
// (The last character in the lower right corner is the "space" character)
// The following buttons on your remote control are used for text entry: UP, DOWN, LEFT, RIGHT, SELECT, ENTER. The cursor starts over the character 'A'

// Given a string of text, your task is to determine the minimum number of remote control button presses required to enter the string.

// For example: The string "OFF" can be entered with the following button presses: (although other minimal length sequences are possible)

// The cursor starts at "A"
// Pressing DOWN moves the cursor to "H"
// Pressing DOWN moves the cursor to "O"
// Pressing SELECT inputs the character "O"
// Pressing UP moves the cursor to "H"
// Pressing UP moves the cursor to "A"
// Pressing RIGHT moves the cursor to "B"
// Pressing RIGHT moves the cursor to "C"
// Pressing RIGHT moves the cursor to "D"
// Pressing RIGHT moves the cursor to "E"
// Pressing RIGHT moves the cursor to "F"
// Pressing SELECT inputs the character "F"
// Pressing SELECT again inputs the character "F" a second time.
// Pressing ENTER ends the input of the text "OFF"
// The total number of button presses necessary to enter the text "OFF" is 13.
 
// Definition
    	
// Class:	TVRemoteText
// Method:	numPresses
// Parameters:	String
// Returns:	int
// Method signature:	int numPresses(String text)
// (be sure your method is public)
    
 
// Notes
// -	Cursor movement in the grid does NOT wrap around. You can not go up from the top row, down from the bottom row, left from the leftmost column, or right from the rightmost column.
// -	Your sequence of button presses will always end with pressing the "ENTER" button.
 
// Constraints
// -	text will contain between 1 and 50 characters inclusive.
// -	text will consist of only the characters represented in the grid above (all letters are uppercase).
 
// Examples
// 0)	
    	
// "OFF"
// Returns: 13
// The example from above.
// 1)	
    	
// "HELLO WORLD!"
// Returns: 61
// One minimal length sequence of button presses is shown below as the top line of characters (where each button is abbreviated to one character):
//  DSRRRRUSDSSLLLLDSRRRRRRDDDDDSLLLLLUUUUSLUSRRRSRUSLUSRRDDDDDSE 
// AH IJKLE L  KJIHO PQRSTU18?@~ ><=#%/$4W VO PQR SL KD EFMT18!
//   H     E LL     O           ~         W  O   R  L  D       !
// The middle line of characters shows where the cursor is after each button press that moves the cursor. Note that the cursor starts at "A". The third line of characters shows what is selected when the SELECT (S) button is pressed (the "~" character is used here to represent the "space" character in the grid and text).
// 2)	
    	
// "SQRT(I) > 40 CODING GUY"
// Returns: 128
// 3)	
    	
// "8:00PM RECORD TECHTV - TOPCODER FINALS"
// Returns: 215
// 4)	
    	
// "2B+-2B,THAT=? 3177 $H4K5P3R3"
// Returns: 171

function calc(str) {
  const buttons = [
    ["A", "B", "C", "D", "E", "F", "G"],
    ["H", "I", "J", "K", "L", "M", "N"],
    ["O", "P", "Q", "R", "S", "T", "U"],
    ["V", "W", "X", "Y", "Z", "1", "2"],
    ["3", "4", "5", "6", "7", "8", "9"],
    ["0", "$", ".", ",", "-", "!", "?"],
    [":", "/", "+", "(", ")", "*", "@"],
    ["&", "%", "#", "=", "<", ">", " "],
  ];

  sum = 0;

  str.split("").reduce(
    (p, n) => {
      strLocation = [];
      buttons.forEach((seq, idx) => {
        let h = seq.indexOf(n);
        if (h > -1) {
          strLocation = [idx, h];
          sum = sum + Math.abs(idx - p[0]) + Math.abs(h - p[1]);
          console.log(sum);
        }
      });

      return strLocation;
    },
    [0, 0]
  );

  return sum + str.length + 1;
}

console.log(calc("OFF"));

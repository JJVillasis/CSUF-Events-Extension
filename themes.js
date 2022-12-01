/*----------------------------darktheme.js----------------------------------------------------------
|  Author: Patrick Lin, Nicholas Jones, Sami Bajwa                                                    |
|  Group Name: Some Group Name                                                                        |
|  Emails: pjlin@csu.fullerton.edu, nicholasj898@csu.fullerton.edu, samibajwa@csu.fullerton.edu       |
|  Class: CPSC 254                                                                                    |
|  Instructor: Professor Chen                                                                         |
|  Purpose: This script defines the behavior for the "Change Theme" button to alter the background    |
|  color of the extension as per the user's preferenceds                                              |
|  Dependencies: Google Calendar API, Selenium API                                                    |
|  Known Bugs: N/A                                                                                    |
|  Licensing Information: You are free to use or extend this project for educational purposes         |
|  provided that you (1) retain this notice, and (2) provide clear attribution to the developers of   |
|  the project by adding a link to our Github repository:                                             |
|  https://github.com/Arbalest007/CSUF-Events-Extension                                               |
------------------------------------------------------------------------------------------------------*/

const themeBtn = document.getElementById("btn");
var clickState = localStorage.getItem("clickState");
console.log("Saved Click State = " + clickState);

themeBtn.addEventListener("click", function onClick(event) {
  clickState++;
  clickState %= 7;

  console.log("Click State = " + clickState)

  switch(clickState) {
    case 1:
      document.body.style.backgroundColor = "black";
      break;
    case 2:
      document.body.style.backgroundColor = "brown";
      break;
    case 3:
      document.body.style.backgroundColor = "green";
      break;
    case 4:
      document.body.style.backgroundColor = "rgb(100, 50, 119)";
      break;
    case 5:
      document.body.style.backgroundColor = "rgb(200, 68, 112)";
      break;
    case 6:
      document.body.style.backgroundColor = "rgb(80, 20, 122)";
      break;
    default:
      document.body.style.backgroundColor = "rgb(14, 58, 116)";
      break;
  }

  localStorage.setItem("clickState", clickState);
});

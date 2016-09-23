var colors = require("colors");
// function example1(optional) {
//     if (optional != undefined) {
//         console.log('awesome');
//     } else {
//         example2();
//     }
// }

// function example2() {
//     console.log("This is example 2");
//     example1("not optional");
// }

// example1();

var i = true;

function move(introAlready) {
    if (introAlready == "Haven't intro-ed yet") {
        console.log("Welcome to town");
    } 
    console.log("What do you want to do?".yellow);
    if (i == true) {
        i = false;
        move("I have already been introed");
    }    
}

move("Haven't intro-ed yet");

if(rollDice() == 1 || rollDice() == 2) {
    //..
}
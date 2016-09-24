var readline = require('readline');

var readlineThing = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var game = {
    start: function() {
        initialize();
    },
    restart: function() {
        game.start();
    }
}


function initialize() {
    readlineThing.question("What is your name? ", function(answer) {
        Name(answer);
        console.log('Hi there ' + answer + ", welcome to the game!")
        askClass();
    })
}

function askClass() {
    readlineThing.question("Choose your class: (Mage, Warrior, Thief) ", function(answer) {
        chooseClass(answer);
        askGender();
    })
}

function askGender() {
    readlineThing.question("Choose your gender: ", function(answer) {
        gender(answer);
        scroll();
        // readlineThing.close();
    })
}

var enemies = {
    finalBoss: {
        name: "Alan",
        health: 100,
        skill: {
            attack: function() {
                console.log("get rekt scrub, mlg 360 no scope");
                Player.health = Player.health - 10;
            },
            taunt: function() {
                console.log("go home noob");
            }
        }
    },
    ogre: {
        name: "Shrek",
        health: 20,
        skill: {
            attack: function() {
                console.log("get Shrekt");
                Player.health = Player.health - 5;
            },
            ogreFood: function() {
                console.log("Gotta eat dat food");
                enemies.ogre.health = enemies.ogre.health + 2; 
            }            
        }
    } 
}

var location = {
    town: {
        name: "Falador",
        NPC: [],
        Monsters: null
    },
    woods: {
        name: "The Woods",
        NPC: [],
        Monsters: enemies.finalBoss
    }
} 

var Player = {
    name: "Alan",
    race: "Human",
    class: "Mage",
    gender: "Male",
    currentLocation: location.town.name,
    currentEnemy: null,
    health: 20,    
    skill: {
        1: null,
        2: null,
        3: null
    },
    eat: function() {
        if (Player.health == 19) {
            health = 20;
        } else if (Player.health == 20) {
            console.log("You are on full health. Stop eating.");
        } else {
            health = health + 2;
        }
    }
}

var NPC = {
    priest: {
        heal: function() {
            //do heal
        }
    },
    vendor: {
        shop: function() {
            //do shop
        }    
    }
}

function Name(answer) {
    Player.name = answer;
}

function gender(answer) {
    Player.gender = answer;
}

function rollDice() {
    return Math.floor(Math.random() * 6 + 1);
    //Math.floor = rounds down to the nearest whole number
    //Math.random = choose a random number between 0 and 1

    //Math.round
}

function chooseClass(answer) {
    Player.class = answer;
    Player.skill["1"] = function() {
        console.log("Take this @#%!@#@!#!@!");
        finalBoss.health = finalBoss.health - 10;
    }
    if (Player.class == "Mage") {
        //Player.health = 10;
        Player.skill["2"] = function() {
            console.log("Eat fire");
            finalBoss.health = finalBoss.health - 20;
        }
        Player.skill["3"] = function() {
            console.log("I haz more health");
            if (Player.health > 10) {
                Player.health = 20;
            } else {
                Player.health = Player.health + 10;
            }
        }
        askGender();
    } else if (Player.class == "Thief") {
        //Player.health = 10;
        Player.skill["2"] = function() {
            console.log("Stabby stab stab");
            finalBoss.health = finalBoss.health - 20;
        }
        Player.skill["3"] = function() {
            console.log("Eat my arrow");
            finalBoss.health = finalBoss.health - 15;
        }
        askGender();
    } else if (Player.class == "Warrior") {
        //Player.health = 10;
        Player.skill["2"] = function() {
            console.log("Shanking intensifies");
            finalBoss.health = finalBoss.health - 10;
            console.log("Shanking intensifies");
            finalBoss.health = finalBoss.health - 10;
        }
        Player.skill["3"] = function() {
            console.log("This skill is a placeholder. It does nothing.");
        }
        askGender();
    } else {
        readlineThing.question("Please enter a valid class: ", function(answer) {
            chooseClass(answer);
        })
    }
}

function wait(ms) {
    var start = new Date().getTime();
    for (var end = start; end < start + ms;) {
        end = new Date().getTime();
    }
}

function scroll() {
    console.log("The game begins!")
    wait(1000);
    console.log("You are " + Player.name + ", a great legend in the world of China");
    wait(2000);
    console.log("The government needs you help to fight democracy");
    wait(2000);
    console.log("With your power in the knowledge of a " + Player.class + " and your will to save your country, you accept the challenge!");
    wait(3000);
    director();
};

function move() {

}

function director() {
    console.log(Player);
    console.log(Player.currentLocation);
    var diceThrow = rollDice();
    console.log(diceThrow);
    if (Player.currentLocation == location.woods.name) {        
        if (diceThrow > 0) {
            battle();
        }
    } else if (Player.currentLocation == location.town.name) {
        console.log("Welcome to the town " + location.town.name + "!");
        playerChoice();
    }
}

function battle() {

}

function playerChoice() {
    readlineThing.question("What is your next move?\n", function(answer) {
        if(answer)
    });
    //run 
    //battle
    //move
    //flee
    //whatever...    
}

var NPC = {

}

game.start();


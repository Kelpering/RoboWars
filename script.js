
    /* GAME FUNCTIONS */

// function to start a new game
var startGame = function() {
  // reset player stats
    playerInfo.Reset();

    // fight each enemy robot by looping over them and fighting them one at a time
    for (var i = 0; i<enemyInfo.length; i++){
    // check player stats
        console.log(playerInfo);

    // if player is still alive, keep fighting
        if (playerInfo.health > 0){
      // let user know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert("Welcome to battle bots. Round: " + (i+1));

      // pick new enemy to fight based on the index of the enemyInfo array
            var picked = enemyInfo[i];

      // set health for picked enemy
            picked.health = random(40, 60);
            console.log(picked);


      // pass the pickedEnemyObj object variable's value into the fight function, where it will assume the value of the enemy parameter
            fight(picked);
        }
   
    // if player is not alive, break out of the loop and let endGame function run
        
        else
            {
                break;
            }
        }
  // after loop ends, we are either out of player.health or enemies to fight, so run the endGame function
        
    endGame();

// function to end the entire game

var endGame = function() {
window.alert("game over");
  // check localStorage for high score, if it's not there, use 0
var highscore = localStorage.getItem("highscore") || 0;

  // if player have more money than the high score, player has new high score!
    if (playerInfo.money > highscore)
    {
        localStorage.setItem("highscore", playerInfo.money);
        localStorage.setItem("name", playerInfo.name);

        alert(playerInfo.name + " has the new high score of " + playerInfo.money + ".");
    }

    else
    {
        alert(playerInfo.name + " did not beat the high score of " + highscore + ".");
    }

  // ask player if they'd like to play again

    if (window.confirm("play again?")){startGame();} else {window.alert("Thanks for playing!")};
}
// fight function (now with parameter for enemy's object holding name, health, and attack values)
    var fight = function() {
  // keep track of who goes first


  // randomly change turn order


      // ask user if they'd like to fight or skip using fightOrSkip function

        // if true, leave fight by taking them to the shop and breaking loop


      // remove enemy's health by subtracting the amount we set in the damage variable


      // check enemy's health


        // award player money for winning


        // ask if user wants to use the store before next round


        // if yes, take them to the store() function


        // leave while() loop since enemy is dead


      // remove enemy's health by subtracting the amount we set in the damage variable


      // check player's health


      // player gets attacked first
 


      // remove enemy's health by subtracting the amount we set in the damage variable


      // check player's health

        // leave while() loop if player is dead



        // if true, leave fight by taking them to the shop and breaking loop




      // remove enemy's health by subtracting the amount we set in the damage variable


      // check enemy's health


        // award player money for winning


        // ask if user wants to use the store before next round


        // if yes, take them to the store() function


        // leave while() loop since enemy is dead

    // switch turn order for next round


// go to shop between battles function

  // ask player what they'd like to do


  // check if prompt answer was left blank, user hit "cancel", or provided a number instead


  // convert answer from last prompt to lower case


  // use switch case to carry out action


// function to set name


// function to generate a random numeric value


// function to check if player wants to fight or skip

  // ask user if they'd liked to fight or run


  // convert promptFight from a string to a number



    // confirm user wants to skip


    // if yes (true), leave fight

      // subtract money from playerMoney for skipping, but don't let them go into the negative

      // stop while() loop using break; and enter next fight

      // return true if user wants to leave


/* END GAME FUNCTIONS */

/* GAME INFORMATION / VARIABLES */




/* END GAME INFORMATION / VARIABLES */

/* RUN GAME AGAIN */
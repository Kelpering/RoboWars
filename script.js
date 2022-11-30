
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
      }
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
    var fight = function(enemy) {
  // keep track of who goes first
      var isPlayerTurn = true;

  // randomly change turn order
      if (Math.random() < 0.5) {
        isPlayerTurn=false;}

        while (playerInfo.health > 0 && enemy.health > 0){
          if (isPlayerTurn){

      // ask user if they'd like to fight or skip using fightOrSkip function
            if(fightOrSkip()){
        // if true, leave fight by taking them to the shop and breaking loop
              shop();
              break;
            }
              var damage = random(PlayerInfo.attack - 3, PlayeInfo.attack);
      // remove enemy's health by subtracting the amount we set in the damage variable
              enemy.health = Math.max(enemy.health - damage);
              console.log(playerinfo.name + " attacked " + enemy.name + ". Enemy has: " + enemy.health);

      // check enemy's health
            if(enemy.health < 0){
              window.alert(enemy.name + " died");
              
        // award player money for winning
        playerInfo.money += 20;

        // ask if user wants to use the store before next round
              if(window.confirm("Would you like to visit the store?")) {

        // if yes, take them to the store() function
                shop();
              }
        // leave while() loop since enemy is dead
                break;
            } else {window.alert(enemy.name + "still has " + enemy.health + " health.")}
          }
          else{
      // remove players's health by subtracting the amount we set in the damage variable
      var damage = random(enemy.attack - 3, enemy.attack);
      PlayerInfo -= damage;
      console.log(enemy.name + " attacked " + player.name + ". Enemy has: " + playerInfo.health);

      // check player's health
            if (playerinfo.health < 0){
              window.alert(enemy.name + " died");
              break;
          }
          else{
            window.alert(playerinfo.name + " still has " + player.health + " health.")
          }
      // player gets attacked first



      // remove enemy's health by subtracting the amount we set in the damage variable
      var damage = random(PlayerInfo.attack - 3, PlayeInfo.attack);
              enemy.health = Math.max(enemy.health - damage);
              console.log(playerinfo.name + " attacked " + enemy.name + ". Enemy has: " + enemy.health);

      // check player's health
if (playerinfo.health < 0) {
        // leave while() loop if player is dead
  window.alert("u ded")
  break;}

if(fightOrSkip){
        // if true, leave fight by taking them to the shop and breaking loop
  shop();
  break;
}


      // remove enemy's health by subtracting the amount we set in the damage variable
      var damage = random(PlayerInfo.attack - 3, PlayeInfo.attack);
              enemy.health = Math.max(enemy.health - damage);
              console.log(playerinfo.name + " attacked " + enemy.name + ". Enemy has: " + enemy.health);

      // check enemy's health
      if(enemy.health < 0){

        // award player money for winning
        playerinfo.money +=20;

        // ask if user wants to use the store before next round
        if(confirm("go to shop?"))
        {
          

        // if yes, take them to the store() function
        shop();
      }

        // leave while() loop since enemy is dead
      break;
    } else{
      window.alert("enemy has " + enemy.health + "health");
    // switch turn order for next round
isplayerTurn + !isplayerTurn
    }
  }}}

// go to shop between battles function
  var shop = function () {
  // ask player what they'd like to do
    var choice = window.prompt("Refill, Upgrade, Leave (case sensitive)");

  // check if prompt answer was left blank, user hit "cancel", or provided a number instead
    if(choice === null || choice === "" || !isNaN(choice)){window.alert("provide valid answer")
  // return shop();
  shop();
  }

  // convert answer from last prompt to lower case
  choice = choice.toLowerCase();

  // use switch case to carry out action
switch (choice) {
  case "refill":
    playerInfo.refillHealth();
    break;
  case "upgrade":
  playerInfo.upgradeAttack();
    break;
  case "Leave":
  window.alert("Leaving shop......................");
    break;

  default:
    window.alert("provide correct answer, you picked: " + choice);
    shop();
    break;
}

  }

// function to set name
var getName = function() {
  var name = "";
  while (name==="" || name===null)
  {
    name = prompt("Input name: ");

    console.log(name);
  }
}

// function to generate a random numeric value

var random = function(min, max) {
  var value=Math.floor(Math.random()*(max-min) +min)
  return value;
}

// function to check if player wants to fight or skip
var fightOrSkip = function(){
  // ask user if they'd liked to fight or run
var fightchoice = window.prompt("fight? (fight: 1, skip: 2)")

  // convert promptFight from a string to a number
  fightchoice = parentInt(fightchoice);


    // confirm user wants to skip
if (fightchoice === 2){
  var reassure = window.confirm("skip?");

    // if yes (true), leave fight
    if (reassure){
      // subtract money from playerMoney for skipping, but don't let them go into the negative
      playerInfo.money -= Math.max(playerInfo.money - 10);
      // stop while() loop using break; and enter next fight
      
      // return true if user wants to leave
      return true;
    }
  }
}

/* END GAME FUNCTIONS */
var PlayerInfo = {name:getName(), health:100, attack:10, money:10, reset:function(){this.health = 100; this.money=10; this.attack=10;}, refillHealth:function(){ if(this.money>=7){this.health+=20; this.money-=7; window.alert("healing 20 health")} else {window.alert("cant heal")}}, upgradeAttack:function(){if(this.money>=7){this.money-=7; this.attack+= 6;window.alert("upgrading attack")} else{window.alert("you are too poor to purchase attack")}}};
var enemy = [
  {name:"roberto", attack:random(10,14)}, 
  {name:"amy", attack:random(10,14)}, 
  {name:"roboman", attack:random(10,14)}
];
/* GAME INFORMATION / VARIABLES */




/* END GAME INFORMATION / VARIABLES */

/* RUN GAME AGAIN */
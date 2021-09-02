import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Unit from "./../src/unit.js";
import Hero from "./../src/hero.js";
import Combat from "./../src/combat.js";

function displayStats(hero, enemy) {
  //make html
  const heroHtml = `<h2>${hero.name}</h2>
          <ul>
            <li>Health: ${hero.hp}</li>
            <li>Attack: ${hero.ap}</li>
            <li>Defense: ${hero.dp}</li>
          </ul>`;

  const enemyHtml = `<h2>${enemy.name}</h2>
          <ul>
            <li>Health: ${enemy.hp}</li>
            <li>Attack: ${enemy.ap}</li>
            <li>Defense: ${enemy.dp}</li>
          </ul>`;
  //append it
  $("#hero-stats-display").empty();
  $("#hero-stats-display").append(heroHtml);
  $("#enemy-stats-display").empty();
  $("#enemy-stats-display").append(enemyHtml);
}

function displayIntent(enemy) {
  const intentHtml = `<li class="list-group-item">${enemy.name} will attack for ${enemy.ap}</li>`;
  $("#combat-feed").append(intentHtml);
}

function displayFighting() {
  $("#combat-feed").empty();
  $("#combat-feed").append(`<li><h3>...fighting...</h3></li>`);
}

function displayResults(name, playerDmg, enemyDmg) {
  const resultsHtml = `<li class="list-group-item" >${name} took ${playerDmg} damage!</li><li class="list-group-item">You took ${enemyDmg} damage!</li>`;
  $("#combat-feed").empty();
  $("#combat-feed").append(resultsHtml);
}
function displayRewards(monsterName, level) {
  $("#monster-name-span").text(monsterName);
  const rewardsHtml = `<li class="list-group-item active"><h3>Rewards:</h3></li><li class="list-group-item" >10 gold</li><li class="list-group-item" >You reached Level ${level}</li>`;

  $("#rewards-display").empty();
  $("#rewards-display").append(rewardsHtml);
  $("#combat-screen").hide();
  $("#rewards-screen").show();
}

function displayOptionsResults(message) {
  $("#result-message-span").text(message);
  $("#rewards-screen").hide();
  $("#reward-options-results-screen").show();
}

$(document).ready(function () {
  //globals
  let myHero;
  let myEnemy;
  let myCombat;

  $("#start-form").submit((e) => {
    e.preventDefault();
    const name = $("#name-input").val().trim();
    const heroType = $("input:radio[name=heroType]:checked").val();
    if (heroType === "Warrior") {
      myHero = new Hero(name, 10, 3, 2);
    } else {
      myHero = new Hero(name, 10, 4, 1);
    }
    //start combat
    myEnemy = new Unit("Aardvark", 7, 3, 1);
    myCombat = new Combat(myHero, myEnemy);
    displayStats(myHero, myEnemy);
    displayIntent(myEnemy);
    $("#opening-screen").hide();
    $("#combat-screen").show();
  });

  $("#combat-start-btn").click(() => {
    myEnemy = new Unit("AardvarkBro", 10, 4, 2);
    myCombat = new Combat(myHero, myEnemy);
    displayStats(myHero, myEnemy);
    displayIntent(myEnemy);
    $("#reward-options-results-screen").hide();
    $("#combat-screen").show();
  });

  $("input:checkbox").on("change", function () {
    if ($(this).siblings(":checked").length > 1) {
      this.checked = false;
    }
  });

  $("#options-form").submit((e) => {
    e.preventDefault();
    //get our checked options
    //branch to call the options
    let fightArray = [];
    $("input:checkbox:checked").each(function () {
      if (this.checked) fightArray.push($(this).val());
    });
    if (fightArray.includes("attack")) {
      //call calc fns with attack
      //refactor?
    }

    displayFighting();
    setTimeout(() => {
      // calcPlayerDamage = hero attack() - unit armor  DAMAGE TO THE ENEMY
      // calcEnemyDamge = unit attack() - player armor DAMAGE TO THE PLAYER
      const playerDmg = myCombat.calcPlayerDamage();
      const enemyDmg = myCombat.calcEnemyDamage();
      // unit.reduceHp(calcPlayerDamage)
      // hero.reducehp(calcEnemyDamage());
      myHero.reduceHp(enemyDmg);
      myEnemy.reduceHp(playerDmg);
      if (myEnemy.hp <= 0) {
        myHero.levelUp();
        //item/gold reward updates
        displayRewards(myEnemy.name, myHero.level);
      } else {
        displayStats(myHero, myEnemy);
        // displayOptions()
        displayResults(myEnemy.name, playerDmg, enemyDmg);
        displayIntent(myEnemy);
      }
    }, 1000);

    //next: displayOptions death
  });

  $("#rewards-options-form").submit((e) => {
    e.preventDefault();
    const rewardOption = $("input:radio[name=reward-options]:checked").val();

    let resultMessage = "";
    if (rewardOption === "heal") {
      myHero.reduceHp(-4);
      resultMessage = "healed 4 health";
      displayOptionsResults(resultMessage);
    } else if (rewardOption === "roll") {
      if (Math.random() >= 0.5) {
        //getItem
        resultMessage = "won 10 gold";
        displayOptionsResults(resultMessage);
      } else {
        resultMessage = "lost the roll!";
        displayOptionsResults(resultMessage);
      }
    } else {
      $("#rewards-screen").hide();
      $("#shop-screen").show();
    }
  });
});

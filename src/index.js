import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Unit from "./../src/unit.js";
import Hero from "./../src/hero.js";
import Item from "./../src/item.js";
import Shop from "./../src/shop.js";
import anime from 'animejs/lib/anime.es'

let warAni = anime({
  targets: '#Warrior',
  translateX: 300,
  direction:'alternate',
  easing: 'easeInElastic',
  duration:600,
})
let mageAni = anime({
  targets: '#Mage',
  translateX: 300,
  direction:'alternate',
  easing: 'easeInElastic',
  duration:600,
})
let enemyAni = anime({
  targets: '#aardvark',
  translateX: -300,
  direction:'alternate',
  easing: 'easeInElastic',
  duration:600,
})

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
  warAni.play();
  mageAni.play();
  enemyAni.play();
}

function displayResults(name, playerDmg, enemyDmg) {
  const resultsHtml = `<li class="list-group-item" >${name} took ${playerDmg >= 0 ? playerDmg : 0} damage!</li><li class="list-group-item">You took ${enemyDmg >= 0 ? enemyDmg : 0} damage!</li>`;
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

function displayItems(shop, hero) {
  const itemsHtml = Object.keys(shop.inv)
    .map(
      (id) =>
        `<li id="${id}" class= "list-group-item">${shop.inv[id].name}: ${shop.inv[id].desc}</li>`
    )
    .join("");

  $("#gold-display").text(hero.gold);
  $("#item-shop-display").empty();
  $("#item-shop-display").append(itemsHtml);
}

$(document).ready(function () {
  //globals
  let myHero;
  let myEnemy;
  let myShop;

  $("#start-form").submit((e) => {
    e.preventDefault();
    const name = $("#name-input").val().trim();
    const heroType = $("input:radio[name=heroType]:checked").val();
    if (heroType === "Warrior") {
      myHero = new Hero(name, 15, 3, 2);
      $("#Mage").hide();
      $("#Warrior").show();
    } else {
      myHero = new Hero(name, 10, 4, 1);
      $("#Warrior").hide();
      $("#Mage").show();
    }
    myShop = new Shop();
    let glassSword = new Item("Glass Sword", 0, 6, -1);
    let healthVial = new Item("Health Vial", 10, 0, 1);
    let aardFang = new Item("Aardvark Fang", -5, 4, 1);
    myShop.addItem(glassSword);
    myShop.addItem(healthVial);
    myShop.addItem(aardFang);
    //start combat
    myEnemy = new Unit("Baby Aardvark", 12, 4, 1);
    displayStats(myHero, myEnemy);
    displayIntent(myEnemy);
    $("#opening-screen").hide();
    $("#combat-screen").show();
  });

  $(".combat-start-btn").click(() => {
    myEnemy = new Unit(`Aardvark Avenger ${myHero.level === 1 ? "" : myHero.level - 1}`, (15 + myHero.level* 2), (1 + myHero.level * 2), (1 + myHero.level));
    displayStats(myHero, myEnemy);
    displayIntent(myEnemy);
    $("#combat-feed").empty();
    $("#shop-screen").hide();
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

    let fightArray = [];
    $("input:checkbox:checked").each(function () {
      if (this.checked) fightArray.push($(this).val());
    });

    displayFighting();
    setTimeout(() => {
      let playerDmg;
      if (fightArray.includes("attack")) {
        if (fightArray.includes("special")) {
          playerDmg = myHero.useSpecial() + myHero.attack() - myEnemy.dp;
          // attack and special
        } else {
          playerDmg = myHero.attack() - myEnemy.dp;
          // attack defend
        }
      } else {
        playerDmg = myHero.useSpecial() - myEnemy.dp;
      }

      let enemyDmg;
      if (fightArray.includes("defend")) {
        enemyDmg = myEnemy.attack() - myHero.defend();
      } else {
        enemyDmg = myEnemy.attack() - myHero.dp;
      }

      if (playerDmg > 0) myEnemy.reduceHp(playerDmg);
      
      if (myEnemy.hp <= 0) {
        myHero.levelUp();
        myHero.getGold();
        //item/gold reward updates
        displayRewards(myEnemy.name, myHero.level);
      } else {
        if (enemyDmg > 0) myHero.reduceHp(enemyDmg);
        //are you dead?
        if(myHero.hp <= 0) {
          $("#combat-screen").hide();
          console.log(myHero.level)
          $("#death-counter").after(`<h2>You have been slain by ${myHero.level === 1 ? 'Baby' : 'Avenger'} Aardvark ${myHero.level  === 1 ? "": myHero.level -1}.</h2>`)
          $("#death-screen").show();
        }
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
      myHero.reduceHp(-6);
      resultMessage = "healed 6 health";
      displayOptionsResults(resultMessage);
    } else if (rewardOption === "roll") {
      if (Math.random() >= 0.5) {
        //getItem
        resultMessage = "won 20 gold";
        myHero.getGold();
        myHero.getGold();
        displayOptionsResults(resultMessage);
      } else {
        resultMessage = "lost the roll!";
        displayOptionsResults(resultMessage);
      }
    } else {
      $("#rewards-screen").hide();
      displayItems(myShop, myHero);
      $("#shop-screen").show();
    }
  });

  $("#item-shop-display").on("click", "li", function () {
    const id = this.id;
    const item = myShop.findItem(id);
    if (myHero.gold >= 20) {
      myHero.addItem(item);
      myShop.deleteItem(id);
      displayItems(myShop, myHero);
    }
  });
});

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Unit from './../src/unit.js'
import Hero from './../src/hero.js'
// import Combat from './../src/combat.js'

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
  $("#hero-stats-display").append(heroHtml);
  $("#enemy-stats-display").append(enemyHtml);
}

function displayIntent(enemy) {
  // const intentHtml = ``
}

$(document).ready(function() {
  //globals
  let myHero = new Hero("ASCCI WARRIOR", 10, 3, 1);

  //start combat
  //call constructor
  let myEnemy = new Unit("Slime", 5, 2, 1);
  // displayEnemy()
  displayStats(myHero, myEnemy);
  // displayIntent()
  // displayOptions()
  
  //every turn
  // displayStats()
  // displayIntent()
  // displayOptions()
  // displayResults()





  $('#form1').submit(function(event) {
    event.preventDefault();
    // const input1 = $('#input1').val();
    // const input2 = $('#input2').val();
    // const input3 = $('#input3').val();
    // $('#display').append("<p>" + input1 + input2 + input3 + "</p>");


  });
});
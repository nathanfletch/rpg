import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function displayStats(hero, enemy) {
  //
}

$(document).ready(function() {
  //globals
  let myPlayer = new Hero(10, 3, 1);

  //start combat
  // displayEnemy()
  displayStats()
  displayIntent()
  // displayOptions()
  
  //every turn
  displayStats()
  displayIntent()
  // displayOptions()
  displayResults()





  $('#form1').submit(function(event) {
    event.preventDefault();
    // const input1 = $('#input1').val();
    // const input2 = $('#input2').val();
    // const input3 = $('#input3').val();
    // $('#display').append("<p>" + input1 + input2 + input3 + "</p>");


  });
});
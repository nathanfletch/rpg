import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $('#form1').submit(function(event) {
    event.preventDefault();
    const input1 = $('#input1').val();
    const input2 = $('#input2').val();
    const input3 = $('#input3').val();
    $('#display').append("<p>" + input1 + input2 + input3 + "</p>");
  });
});
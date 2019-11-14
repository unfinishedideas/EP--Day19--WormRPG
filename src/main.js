import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DiceRoller } from './diceroll.js';
import { Player } from './player.js';
import { Party } from './party.js';
import { Task } from './task.js';

$(document).ready(function(){

  const sixSided = new DiceRoller(6);
  const tenSided = new DiceRoller(10);
  const newParty = new Party();

  // Getting Characters
  let player1;
  let player2;
  let player3;
  let p1Roll1 = -5;
  let p1Roll2 = -5;
  let p2Roll1 = -5;
  let p2Roll2 = -5;
  let p3Roll1 = -5;
  let p3Roll2 = -5;
  let type;

  $(".player1Roll1").click(function() {
    p1Roll1 = tenSided.rollDice();
    p1Roll1 += 4;
    $(".player1Roll1").text(p1Roll1);
  });
  $(".player1Roll2").click(function() {
    p1Roll2 = tenSided.rollDice();
    p1Roll2 += 4;
    $(".player1Roll2").text(p1Roll2);
  });

  $(".player2Roll1").click(function() {
    p2Roll1 = tenSided.rollDice();
    p2Roll1 += 4;
    $(".player2Roll1").text(p2Roll1);
  });
  $(".player2Roll2").click(function() {
    p2Roll2 = tenSided.rollDice();
    p2Roll2 += 4;
    $(".player2Roll2").text(p2Roll2);
  });

  $(".player3Roll1").click(function() {
    p3Roll1 = tenSided.rollDice();
    p3Roll1 += 4;
    $(".player3Roll1").text(p3Roll1);
  });
  $(".player3Roll2").click(function() {
    p3Roll2 = tenSided.rollDice();
    p3Roll2 += 4;
    $(".player3Roll2").text(p3Roll2);
  });

  $("#player1create").click(function(){
    player1 = new Player($("#characterName1").val());
    type = $("input:radio[name=character1Class]:checked").val();
    player1.addAttributes(type, p1Roll1, p1Roll2);
    $(".player1").prepend("<h1>" + player1.name + "</h1>" + "<h3>" + player1.type + "</h3><h4> Level: " + player1.level + "</h4>" + "<p> Experience: " + player1.xp + "</p>" + "<h4> Stats:</h4><h5> Tech: " + player1.tech + "<br> Dexterity: " + player1.dex + "<br> Charisma: " + player1.cha + "</h5>" + "<h4> Inventory: " + player1.inventory + "</h4>");
    newParty.addChar(player1);
    $(".player1InputForm").hide();
    $(".player2InputForm").show();
  });

  $("#player2create").click(function(){
    player2 = new Player($("#characterName2").val());
    type = $("input:radio[name=character2Class]:checked").val();
    player2.addAttributes(type, p2Roll1, p2Roll2);
    $(".player2").prepend("<h1>" + player2.name + "</h1>" + "<h3>" + player2.type + "</h3><h4> Level: " + player2.level + "</h4>" + "<p> Experience: " + player2.xp + "</p>" + "<h4> Stats:</h4><h5> Tech: " + player2.tech + "<br> Dexterity: " + player2.dex + "<br> Charisma: " + player2.cha + "</h5>" + "<h4> Inventory: " + player2.inventory + "</h4>");
    $(".player2InputForm").hide();
    $(".player3InputForm").show();
    newParty.addChar(player2);
  });

  $("#player3create").click(function(){
    player3 = new Player($("#characterName3").val());
    type = $("input:radio[name=character3Class]:checked").val();
    player3.addAttributes(type, p3Roll1, p3Roll2);
    $(".player3").prepend("<h1>" + player3.name + "</h1>" + "<h3>" + player3.type + "</h3><h4> Level: " + player3.level + "</h4>" + "<p> Experience: " + player3.xp + "</p>" + "<h4> Stats:</h4><h5> Tech: " + player3.tech + "<br> Dexterity: " + player3.dex + "<br> Charisma: " + player3.cha + "</h5>" + "<h4> Inventory: " + player3.inventory + "</h4>");
    $(".player3InputForm").hide();
    $(".characters").show();
    $("#startGameBtn").show();
    newParty.addChar(player3);
  });

  $("#startGameBtn").click(function(){
    $(".gamePlayBox").show();
    $("#startGameBtn").hide();
  });

  // Gameplay
  function playGame(newParty) {

    const task1 = new Task("cha", 20);
    

  }


});

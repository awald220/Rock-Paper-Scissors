$(document).ready(function(){
    var config = {
        apiKey: "AIzaSyCajZLrdmZ7wqYy62g26GpyOeRPhUAdDDc",
        authDomain: "rock-paper-scissors-f04de.firebaseapp.com",
        databaseURL: "https://rock-paper-scissors-f04de.firebaseio.com",
        projectId: "rock-paper-scissors-f04de",
        storageBucket: "rock-paper-scissors-f04de.appspot.com"
    };

    firebase.initializeApp(config);

    // Assign the reference to the database to a variable named 'database'
    var database = firebase.database();

    var chat = "";

    $("#submit").on("click", function(event){
        event.preventDefault();

        chat = $("#chatText").val().trim();

        database.ref().push({
            chat: chat, 
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
        // $("#chatText")[0].reset();
    })

    database.ref().on("child_added", function (childSnapshot){


    })

    // vars to determine score and users choices
    var playerChoice = "";
    var computerChoice = ["rock", "paper", "scissors"];
    var computerGuess = "";
    var wins = 0;
    var losses = 0;
    var ties = 0;

    // when player 1 presses rock this happens
    $("#rock").on("click", function(){
        console.log(computerGuess)
        playerChoice = "rock"
        getCompChoice()
    });
    //when player 1 presses paper this happens
    $("#paper").on("click", function(){
        console.log(playerChoice)
        playerChoice = "paper"
        getCompChoice()
    });
    //when player 1 presses scissors this happens
    $("#scissors").on("click", function(){
        console.log(playerChoice)
        playerChoice = "scissors"
        getCompChoice()
    });

    function getCompChoice(){
        var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)]
    }

    // // when player 2 presses rock this happens
    // $("#rock2").on("click", function(){
    //     console.log(otherPlayer)
    //     otherPlayer = "rock"
    // });
    // //when player 2 presses paper this happens
    // $("#paper2").on("click", function(){
    //     console.log(otherPlayer)
    //     otherPlayer = "paper"
    // });
    // //when player 2 presses scissors this happens
    // $("#scissors2").on("click", function(){
    //     console.log(otherPlayer)
    //     otherPlayer = "scissors"
    // });
    
    //determines if rock wins, looses or ties
    if (playerChoice === "rock"){
        if (computerGuess === "rock"){
            ties++;
        }
        if (computerGuess === "paper"){
            losses++;
        }
        if (computerGuess === "scissor"){
            wins++
        }
    };

    //determines if paper wins, looses, or ties
    if (playerChoice === "paper"){
        if (computerGuess === "rock"){
            wins++;
        }
        if (computerGuess === "paper"){
            ties++;
        }
        if (computerGuess === "scissor"){
            losses++
        }
    };

    //determines if scissors wins, looses, or ties
    if (playerChoice === "scissors"){
        if (computerGuess === "rock"){
            losses++;
        }
        if (computerGuess === "paper"){
            wins++;
        }
        if (computerGuess === "scissor"){
            ties++
        }
    };

    console.log("Wins: " + wins)
    console.log("Losses: " + losses)
    console.log("Ties:" + ties)
    

}); //document.ready dont delete
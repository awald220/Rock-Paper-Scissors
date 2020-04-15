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

    var playerChoice = "";
    var otherPlayer = "";
    var wins = 0;
    var losses = 0;
    var ties = 0;

    $("#rock").on("click", function(){
        console.log("rock")
        playerChoice = "rock"
    })

    $("#paper").on("click", function(){
        console.log("paper")
        playerChoice = "paper"
    })
    
    $("#scissors").on("click", function(){
        console.log("scissors")
        playerChoice = "scissors"
    })
    
    if (playerChoice === "rock"){
        if (otherPlayer === "rock"){
            ties++;
        }
        if (otherPlayer === "paper"){
            losses++;
        }
        if (otherPlayer === "scissor"){
            wins++
        }
    };

    if (playerChoice === "paper"){
        if (otherPlayer === "rock"){
            wins++;
        }
        if (otherPlayer === "paper"){
            ties++;
        }
        if (otherPlayer === "scissor"){
            losses++
        }
    };

    if (playerChoice === "scissors"){
        if (otherPlayer === "rock"){
            losses++;
        }
        if (otherPlayer === "paper"){
            wins++;
        }
        if (otherPlayer === "scissor"){
            ties++
        }
    };

}); //document.ready dont delete
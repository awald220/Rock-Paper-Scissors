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


}); //document.ready dont delete
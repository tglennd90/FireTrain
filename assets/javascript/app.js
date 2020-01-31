// Globals //
// ============================================= //

    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyA2HlMAPxQG_zjC6ZU8hwfzr7NwdQf5Y7k",
        authDomain: "firetrain-7873c.firebaseapp.com",
        databaseURL: "https://firetrain-7873c.firebaseio.com",
        projectId: "firetrain-7873c",
        storageBucket: "firetrain-7873c.appspot.com",
        messagingSenderId: "531047566817",
        appId: "1:531047566817:web:278ec7e864005057a4d6a0"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var database = firebase.database();

    // Element Grabbers //
    // ============================================= //

        // Current Train Schedule //
        // ============================================= //
        var tBody = $("#tBody");

        // Add Train Form //
        // ============================================= //
        var trainName = $("#trainName");
        var destination = $("#destination");
        var firstTrain = $("#firstTrain");
        var frequency = $("#frequency");

    // Arrays //
    // ============================================= //

    // Objects //
    // ============================================= //

    // Variables //
    // ============================================= //
    var format = "HH:mm";
    var tableRow = $("<tr>");
    var tableData = $("<td>");

// Functions //
// ============================================= //

    // Submit Button onClick //
    // ============================================= //
    $("#submitBtn").on("click", function(event) {
        event.preventDefault()

        var newTrainName = trainName.val().trim();
        var newDestination = destination.val().trim();
        var newFirstTrain = firstTrain.val().trim();
        var newFrequency = frequency.val().trim();

        database.ref().push({
            name: newTrainName,
            destination: newDestination,
            firstTrain: newFirstTrain,
            frequency: newFrequency,
        });
    });

// Calls //
// ============================================= //
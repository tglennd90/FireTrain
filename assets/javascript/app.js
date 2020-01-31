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

    database.ref().on("child_added", function(childSnapshot) {

        // Log everything that's coming out of snapshot
        console.log(childSnapshot.val().name);
        console.log(childSnapshot.val().destination);
        console.log(childSnapshot.val().firstTrain);
        console.log(childSnapshot.val().frequency);
  
        // full list of items to the well
        // $("#full-member-list").append("<div class='well'><span class='member-name'> " + childSnapshot.val().name +
        //   " </span><span class='member-email'> " + childSnapshot.val().email +
        //   " </span><span class='member-age'> " + childSnapshot.val().age +
        //   " </span><span class='member-comment'> " + childSnapshot.val().comment +
        //   " </span></div>");
  
      });

// Calls //
// ============================================= //
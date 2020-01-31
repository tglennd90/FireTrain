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
    var tBody = $("#tBody");

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

        resetForm();
    });

    // Reset Add Train Form //
    // ============================================= //

    function resetForm() {

        trainName.val(" ");
        destination.val(" ");
        firstTrain.val(" ");
        frequency.val(" ");

    }

    // Firebase Pull //
    // ============================================= //
    
    database.ref().on("child_added", function(childSnapshot) {

        var tFirst = childSnapshot.val().firstTrain;
        var tConverted = moment(tFirst, "HH:mm").subtract(1, "years");
        var tDiff = moment().diff(moment(tConverted), "minutes");
        var tArrival = childSnapshot.val().frequency;
        var tRemainder = tDiff % tArrival;
        var tMinsTill = tArrival - tRemainder;
        var tNext = moment().add(tMinsTill, "minutes");
  
        tBody.append("<tr><td class='train-name'> " + childSnapshot.val().name +
          " </td><td class='train-destination'> " + childSnapshot.val().destination +
          " </td><td class='train-frequency'> " + childSnapshot.val().frequency +
          " </td><td class='train-arrival'> " + tNext.format("hh:mm") +
          " </td><td class='train-away'> " + tMinsTill +
          " </td></tr>");
  
      });

// Calls //
// ============================================= //
//var targetNumber = [50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 80, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];

//var crystalNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var counter = 0;
var wins = 0;
var losses = 0;

var targetNumber = Math.floor(Math.random() * 51) + 50;

$(document).ready(function () {

    var crystalNumber1 = Math.floor(Math.random() * 13)
    $("#blue").attr("value", crystalNumber1);
    var crystalNumber2 = Math.floor(Math.random() * 13)
    $("#green").attr("value", crystalNumber2);
    var crystalNumber3 = Math.floor(Math.random() * 13)
    $("#purple").attr("value", crystalNumber3);
    var crystalNumber4 = Math.floor(Math.random() * 13)
    $("#red").attr("value", crystalNumber4);

    console.log(crystalNumber1);
    console.log(crystalNumber2);
    console.log(crystalNumber3);
    console.log(crystalNumber4);
    console.log(targetNumber);

    $("#playerResult").text(counter);
    $("#computerResult").text(targetNumber);
   

    $("#blue").on("click", function () {
        counter = counter + crystalNumber1;
        $("#playerResult").text(counter)
        console.log(targetNumber)
        console.log(counter)
        results()
    });

    $("#green").on("click", function () {
        counter = counter + crystalNumber2;
        $("#playerResult").text(counter)
        results()
    });

    $("#purple").on("click", function () {
        counter = counter + crystalNumber3;
        $("#playerResult").text(counter)
        results()
    });

    $("#red").on("click", function () {
        counter = counter + crystalNumber4;
        $("#playerResult").text(counter)
        results()
    });

    function results() {
        if (targetNumber == counter) {
            wins++;
            $(".wins").text("Wins: " + wins);
            console.log("added to wins")
            resetGame()
        } else if(targetNumber < counter) {
            losses++;
            $(".losses").text("Losses: " + losses);
            console.log("added to L")
            resetGame()
        }
    };

    function resetGame() {
        $("#playerResult").text("0")
        targetNumber = Math.floor(Math.random() * 51) + 50;
        $("#computerResult").text(targetNumber);

        counter = 0;
       
        var crystalNumber1 = Math.floor(Math.random() * 13)
    $("#blue").attr("value", crystalNumber1);
    var crystalNumber2 = Math.floor(Math.random() * 13)
    $("#green").attr("value", crystalNumber2);
    var crystalNumber3 = Math.floor(Math.random() * 13)
    $("#purple").attr("value", crystalNumber3);
    var crystalNumber4 = Math.floor(Math.random() * 13)
    $("#red").attr("value", crystalNumber4);
    }

});

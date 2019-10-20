// VARIABLES
//===============================
var win = 0;
var loss = 0;
var targetNumber = 0;
var counter = 0;
var numberOptions = [];
var crystals = ["assets/images/amethyst.jpg", "assets/images/bluecrystal.jpg", "assets/images/rosequartz.jpg", "assets/images/opal.jpg"];

// FUNCTIONS
//===============================
function randomArr(){
    //Each crystal should have a random hidden value between 1 - 12.
    //generate 4 random numbers between 1-12 and push to numberOptions array
    for (let index = 0; index < 4; index++) {
        const element = Math.floor(Math.random()*12)+1;
        numberOptions.push(element);
    }
    console.log(numberOptions);
}

function createCrystals(){    
    
    //create a crystal for each numberOption
    for (let index = 0; index < numberOptions.length; index++) {
        //for each iteration, creat an imageCrystal
        var imageCrystal = $("<img>");
        
        //add class to cyrstal
        imageCrystal.addClass("crystal-image");

        //assign a crystal img
        imageCrystal.attr("src", crystals[index]);

        //assign random value to crystal
        imageCrystal.attr("data-crystalvalue", numberOptions[index]);

        //print crystals to screen
        $("#crystals").append(imageCrystal);
    }
}

function restartGame(){
    //reset variables
    counter = 0;
    numberOptions = [];

    //random target number between 19-120
    targetNumber = Math.floor(Math.random() * 120)+19;

    //write targetNumber to screen
    $("#number-to-guess").text(targetNumber);
    // console.log(targetNumber);

    //write counter to screen
    $("#score").text(counter);

    //write score to screen
    $("#wins").text(win);
    $("#losses").text(loss);

    //call randomArr function
    randomArr();

    //clear crystals from previous round, if any
    $("#crystals > img").remove();

     //call createCrystal function
     createCrystals();

}

// MAIN PROCESS
//===============================
//call function
restartGame();

//add onclick function to every crystal
$("#crystals").on("click", ".crystal-image", function() {
    //grab value of crystal and convert to integer
    var crystalValue = ($(this).attr("data-crystalvalue"));
    console.log($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    //add crystal value clicked to counter 
    counter += crystalValue;

    //write counter to screen
    $("#score").text(counter);

    //if counter = targetNumber, user wins & game restarts
    if(counter === targetNumber){
        win++;
        alert("You Win! " + counter + " is equal to " + targetNumber );
        restartGame();
    }
    //else if counter > targetNumber, user loses & game restarts
    else if (counter > targetNumber){
        loss++;
        alert("You Lose! " + counter + " is larger than " + targetNumber );
        restartGame();
    }
})
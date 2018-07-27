var words = ["plumber", "mushroom", "koopa", "goomba", "tanooki", "triforce", "zelda", "link", "navi", "epona", "sonic", "hedgehog", "tails", "rings", "robotnik", "halo", "master chief", "spartan", "cortana", "covenant", "kratos", "valkyries", "Lysandra", "blades of chaos", "boy", "kirby", "meta knight", "dedede", "waddle dee", "master hand", "cloud", "sephiroth", "squall", "lightning", "tidus", "pikachu", "bulbasaur", "squirtle", "ash", "charmander", "glados", "wheatley", "cake", "companion cube", "turrets"];

    // var score = 0;



    // User gets 10 guesses
    var guesses = 10;
    var wins = 0;
    var losses = 0;
    var lettersCorrect = 0;
    var display = [];
    var result = "bjkajklb;j";

var chosenWord = "";
var chosenWord = words[parseInt(Math.random()*words.length)];
    console.log(chosenWord);
 
    var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "];
    var usedUp = [];
    var wordInPlay = [];
    wordLength = chosenWord.length;
    //word to array
    for(var i = 0; i < wordLength; i++) {
        wordInPlay[i] = chosenWord[i];
    }
    
     //foreach to print out the total spaces for the word
     wordInPlay.forEach(printBlanks);
     console.log(display);

    function printBlanks(value) {
    
        if(value === " ") {
            display[value] = " "
            //showWord.textContent += " ";
        }
        else {
            display[value] = " _ ";
            //showWord.textContent += " _ ";
        }
        
    }

    // onkeyup function
 document.onkeyup = function(event) {
   // grabs key user typed
    var userKey = event.key;

    var showWord = document.getElementById("wordDisplay");
    var showWins = document.getElementById("wins");
    var showLosses = document.getElementById("losses");
    var alreadyUsed = document.getElementById("used");
    var winLose = document.getElementById("winLose");
    var totalGuesses = document.getElementById("totalGuesses");
    var userChoice = document.getElementById("guesses")
   
    
   

    
   
     // checks to see if the user typed a letter and if they have already chosen that letter
     if (choices.indexOf(userKey) >= 0 && usedUp.indexOf(userKey) < 0){      
       usedUp.push(userKey);
       alreadyUsed.textContent = "";
       guesses--;
       totalGuesses.textContent = guesses;
       if(winLose.textContent === "You Win! Try Again " || winLose.textContent === "You Lose, Try Again "){
         winLose.textContent = "";
         userChoice.textContent = "";
         userChoice.textContent += userKey + ", ";
       }
       else {
         userChoice.textContent += userKey + ", ";
       }
       


       if(chosenWord.indexOf(userKey) >=0) {
         wordInPlay.forEach(fillWord);
       }
               
       if(guesses <= 0) {
         losses++;
         showLosses.textContent = losses;
         winLose.textContent = "You Lose, Try Again ";
         chosenWord = words[parseInt(Math.random()*words.length)];
         console.log(chosenWord);
         guesses = 10;
         usedUp = [];
         return;
       }
       else if (lettersCorrect === chosenWord.length) {
         //win
         wins++;
         showWins.textContent = wins;
         winLose.textContent = "You Win! Try Again ";
         chosenWord = words[parseInt(Math.random()*words.length)];
         console.log(chosenWord);
         guesses = 10;
         usedUp = [];
         return;
       }
     }
     else if(choices.indexOf(userKey) < 0){
       alreadyUsed.textContent = "That is not a valid character";
     }
     else {
       alreadyUsed.textContent = "Oops! You already used the letter: " + userKey;
     }

    //functions
    function fillWord(value) {
        var pos = wordInPlay.indexOf(value);
        if(chosenWord[pos] === userKey) {
            if(value !== result.charAt(pos)){
                result += userKey;
                console.log(result);
                
            }

            showWord.innerHTML = display.join() + " ";
            
        }
        else{
            display[pos] = " _ ";
            showWord.innerHTML = display.join();
            
        }
    }



} //End of onkeyup function




// questionElement.textContent = ;

// scoreEle.textContent = score;
// document.onkeyup = function(e) {
//     if(e.key === "h"){
//         sound.play();
//         }
//         else if(e.key === "s"){
//             sound.pause();
//         }
    
//         var response = e.key;
//         if(response === words[questionIndex].a) {
//             alert("Correct");
//             score++;
//             scoreEle.textContent = score;
//         }
//         else {
//             alert("Wrong");
//             var sound = new Audio();
//             sound.src = "honk.wav";
//             document.onkeyup = function(e){

//         }
        
//         if(questionIndex < words.length) {
//             questionIndex++;
//             questionEl.textContent = words[questionIndex].q;
            
//         }
//         else {
//             alert("Game Over");   
//         }
//     }
// }

    // words.forEach(askQuestion);

    // function askQuestion(value, index, arr) {
    //     var correct = 0;
    //     var wrong = 0;
    //     var response = confirm(arr[index].q);
    //     if(response === arr[index].a && response === "t") {
    //         correct++;
    //         score++;
    //         console.log(arr[index].a);
    //         console.log(score);
    //         console.log("----------------------");
    //     }
    //     else{// if(response === arr[index].a && response === "f") {
    //         wrong++;
    //         score--;
    //         console.log(arr[index].a);
    //         console.log(score);
    //         console.log("----------------------")
    //     }
    // }

  // Let's start by grabbing a reference to the <span> below.


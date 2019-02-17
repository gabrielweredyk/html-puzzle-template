function check(level){
    //This should be the input box
    var input = document.getElementById('input');
    //This should be a blank paragraph
    var wrong = document.getElementById('wrong');
    var guess = input.value;
    var ans = null;
    var nex = null;
    if(level == 1){
        //ans should be set to the correct answer to your question
        ans = "answer";
        //nex should be the url to the next puzzle
        nex = "url";
    }
    //detects when the user presses enter
    var key = event.which || event.keyCode;
    if(key == 13){
        //if the user is right they will proceed
        if (guess == ans){
            window.location = nex;
        }
        //if they're wrong it will tell them they're wrong
        else {
            wrong.innerHTML = "Incorrect!";
        }
    }
}

function hint(level){
    //the button that asks the user if they want a hint
    var but = document.getElementById('hint-button');
    //a blank paragraph
    var clue = document.getElementById('hint');
    
    if (level == 1){
        // the clue that you provide to the user
        clue.innerHTML = "hint";
    }
    // make sure that you replace "Hint Off" and "Hint On" with what ever phrase you want it to say or else they will not operate
    if (but.innerHTML == "Hint Off"){
        but.innerHTML = "Hint On";
    }
    else {
        but.innerHTML = "Hint Off"
        clue.innerHTML = "";
    }   
}

// the variable 'level' should be whatever level your puzzle is on right now
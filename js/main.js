let turn = 0;  //turn of the player 0/1
let cellNumber = 0; //cell numbers 1-9 
let counter = 0;//counts the number of turns
let temp = [1,2,3,4,5,6,7,8,9];


document.querySelector("#turn").innerHTML = "Player 1's turn!";
document.querySelector("#reset").addEventListener('click',reset);
document.querySelector("#check").addEventListener('click',getCellNumber);

function reset(){ //reset all the values
    turn = 0;
    counter = 0;
    cellNumber = 0;
    temp = [1,2,3,4,5,6,7,8,9];
    document.querySelector("#n1").innerHTML = "1";
    document.querySelector("#n2").innerHTML = "2";
    document.querySelector("#n3").innerHTML = "3";
    document.querySelector("#n4").innerHTML = "4";
    document.querySelector("#n5").innerHTML = "5";
    document.querySelector("#n6").innerHTML = "6";
    document.querySelector("#n7").innerHTML = "7";
    document.querySelector("#n8").innerHTML = "8";
    document.querySelector("#n9").innerHTML = "9";
    document.querySelector("#turn").innerHTML = "Player 1's turn!";
    document.querySelector("#turn").color = "black";
}

function getCellNumber(){ //first function
    cellNumber = document.querySelector("input").value;
    if(cellNumber < 1 || cellNumber > 9){
        window.alert("The cell Number must be between 1 and 9(inclusive)")
        cellNumber = 0;
    }
    else{
        changeValue();
    }

}

function changeValue(){ //second function. It changes the value to the players choice.
    if(temp[cellNumber-1] == "O" || temp[cellNumber-1] == "X"){
        window.alert("That slot is already taken!. Please choose a different cell number.");
    }
    else if(turn == 0){
        temp[cellNumber-1] = "O";
        cellNumber = `${cellNumber}`;
        document.querySelector(`#n${cellNumber}`).innerHTML = "O";
        document.querySelector("#turn").innerHTML = "Player 2's turn!"
        turn = 1;
    }
    else{
        temp[cellNumber-1] = "X";
        cellNumber = `${cellNumber}`;
        document.querySelector(`#n${cellNumber}`).innerHTML = "X";
        document.querySelector("#turn").innerHTML = "Player 1's turn!"
        turn = 0;
    }
    checkForVictory()
}

function checkForVictory(){
    counter += 1;
    if(counter == 9){
        document.querySelector("#turn").innerHTML = "TIE!!!";
        displayVictory();
    }
    //row check
    if((temp[0] == temp[1])&& (temp[1] == temp[2])){ //row1 check
        if(temp[0] =="O"){
            document.querySelector("#turn").innerHTML = "PLAYER 1 WINS!!!";
            displayVictory();
        }
        else{
            document.querySelector("#turn").innerHTML = "PLAYER 2 WINS!!!";
            displayVictory();
        }
    }

    if((temp[3] == temp[4])&& (temp[4] == temp[5])){ //row2 check
        if(temp[3] =="O"){
            document.querySelector("#turn").innerHTML = "PLAYER 1 WINS!!!";
            displayVictory();
        }
        else{
            document.querySelector("#turn").innerHTML = "PLAYER 2 WINS!!!";
            displayVictory();
        }
    }

    if((temp[6] == temp[7])&& (temp[7] == temp[8])){ //row3 check
        if(temp[6] =="O"){
            document.querySelector("#turn").innerHTML = "PLAYER 1 WINS!!!";
            displayVictory();
        }
        else{
            document.querySelector("#turn").innerHTML = "PLAYER 2 WINS!!!";
            displayVictory();
        }
    }

    //column check
    if((temp[0] == temp[3])&& (temp[3] == temp[6])){ //column1 check
        if(temp[0] =="O"){
            document.querySelector("#turn").innerHTML = "PLAYER 1 WINS!!!";
            displayVictory();
        }
        else{
            document.querySelector("#turn").innerHTML = "PLAYER 2 WINS!!!";
            displayVictory();
        }
    }

    if((temp[1] == temp[4])&& (temp[4] == temp[7])){ //column2 check
        if(temp[1] =="O"){
            document.querySelector("#turn").innerHTML = "PLAYER 1 WINS!!!";
            displayVictory();
        }
        else{
            document.querySelector("#turn").innerHTML = "PLAYER 2 WINS!!!";
            displayVictory();
        }
    }

    if((temp[2] == temp[5])&& (temp[5] == temp[8])){ //column3 check
        if(temp[2] =="O"){
            document.querySelector("#turn").innerHTML = "PLAYER 1 WINS!!!";
            displayVictory();
        }
        else{
            document.querySelector("#turn").innerHTML = "PLAYER 2 WINS!!!";
            displayVictory();
        }
    }

    //diagonal check
    if((temp[0] == temp[4])&& (temp[4] == temp[8])){ //top-left to bottom-right diagonal check
        if(temp[0] =="O"){
            document.querySelector("#turn").innerHTML = "PLAYER 1 WINS!!!";
            displayVictory();
        }
        else{
            document.querySelector("#turn").innerHTML = "PLAYER 2 WINS!!!";
            displayVictory();
        }
    }

    if((temp[2] == temp[4])&& (temp[4] == temp[6])){ //top-right to bottom-left diagonal check
        if(temp[2] =="O"){
            document.querySelector("#turn").innerHTML = "PLAYER 1 WINS!!!";
            displayVictory();
        }
        else{
            document.querySelector("#turn").innerHTML = "PLAYER 2 WINS!!!";
            displayVictory();
        }
    }
}

function displayVictory(){
        document.querySelector("#turn").color = "red";
        if(window.confirm("This game has reached an end. Reset?")){
            reset();
        }
}
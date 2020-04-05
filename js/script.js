function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'kamień';
    }else if (argMoveId == 2){
        return 'papier';
    }else if (argMoveId == 3){
        return 'nożyce';
    }

    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
}

function displayResult(argComputerMove, argPlayerMove){
    console.log('computer: ' + argComputerMove, '|||||||| player: ' + argPlayerMove);

    if (argComputerMove == argPlayerMove){
        printMessage('REMIS!, odśwież i zagraj ponownie!');

    }else if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Wygrałeś!, odśwież i zagraj ponownie!');

    }else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Przegrałeś, odśwież i zagraj ponownie!');

    }else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Przegrałeś, odśwież i zagraj ponownie!');

    }else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Wygrałeś!, odśwież i zagraj ponownie!');

    }else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Wygrałeś, odśwież i zagraj ponownie!');

    }else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Przegrałeś!, odśwież i zagraj ponownie!');

    }else{
        printMessage('Odśwież i zagraj ponownie podając poprawny ruch!');
    }
}


let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/*if(randomNumber == 1){
    computerMove = 'kamień';
}else if (randomNumber == 2){
    computerMove = 'papier';
}else if ( randomNumber == 3){
    computerMove = 'nożyce';
}*/

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

/*if(playerInput == '1'){
    playerMove = 'kamień';
}else if (playerInput == '2'){
    playerMove = 'papier';
}else if (playerInput == '3'){
    playerMove = 'nożyce';
}*/

printMessage('Twój ruch to: ' + playerMove);
displayResult(computerMove, playerMove);
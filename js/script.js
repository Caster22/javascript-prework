{
    const playGame = function (moveNumber) {
        clearMessages();

        const playerInput = moveNumber;

        const getMoveName = function (argMoveId) {
            if (argMoveId == 1) {
                return 'kamień';
            } else if (argMoveId == 2) {
                return 'papier';
            } else if (argMoveId == 3) {
                return 'nożyce';
            }

            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }

        const displayResult = function (argComputerMove, argPlayerMove) {
            console.log('computer: ' + argComputerMove, '/ player: ' + argPlayerMove);

            if (argComputerMove == argPlayerMove) {
                printMessage('REMIS!, zagraj ponownie!');

            } else if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
                printMessage('Wygrałeś!, zagraj ponownie!');

            } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
                printMessage('Przegrałeś!, zagraj ponownie!');

            } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
                printMessage('Przegrałeś!, zagraj ponownie!');

            } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
                printMessage('Wygrałeś!, zagraj ponownie!');

            } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
                printMessage('Wygrałeś!, zagraj ponownie!');

            } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
                printMessage('Przegrałeś!, zagraj ponownie!');

            } else {
                printMessage('Odśwież i zagraj ponownie podając poprawny ruch!');
            }
        }


        const randomNumber = Math.floor(Math.random() * 3 + 1);

        console.log('Wylosowana liczba to: ' + randomNumber);

        const computerMove = getMoveName(randomNumber);

        printMessage('Mój ruch to: ' + computerMove);

        console.log('Gracz wpisał: ' + playerInput);

        const playerMove = getMoveName(playerInput);

        printMessage('Twój ruch to: ' + playerMove);
        displayResult(computerMove, playerMove);

    }

    document.getElementById('button-rock').addEventListener('click', function () {
        playGame(1);
    });
    document.getElementById('button-paper').addEventListener('click', function () {
        playGame(2);
        ;
    });
    document.getElementById('button-scissors').addEventListener('click', function () {
        playGame(3);
        ;
    });
}
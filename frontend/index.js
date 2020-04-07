<<<<<<< HEAD
var gameIsFinished = false;
=======
>>>>>>> aee6bd3948d6f93b03c10a6fcfd1bf53ff42ed69
var counter = 0;
var ctrl = undefined;
var img = document.getElementsByClassName('image');
var filledBlocksO = [];
var filledBlocksX = [];
var i = 0;
var j = 0;
var v1 = [1, 2, 3];
var v2 = [1, 4, 7];
var v3 = [1, 5, 9];
var v4 = [2, 5, 8];
var v5 = [3, 6, 9];
var v6 = [3, 5, 7];
var v7 = [4, 5, 6];
var v8 = [7, 8, 9];
var line = '';
var winningLine = [];
var newScore;
var actualScore;

function buttonHandler(btn) {
    btn.disabled = true;
}

function setPlayer(choosePlayerBtn) {
    if (gameIsFinished === false) {
        if (choosePlayerBtn.value == 'X') {
            ctrl = true;
            buttonHandler(choosePlayerBtn);
        }
        if (choosePlayerBtn.value == 'O') {
            ctrl = false;
            buttonHandler(choosePlayerBtn);
        }
    }
}

function isWinner(blocksFilled, ID) {
    let combination = [];
    combination[0] = blocksFilled.filter(e => v1.indexOf(e) !== -1).length === v1.length;
    combination[1] = blocksFilled.filter(e => v2.indexOf(e) !== -1).length === v2.length;
    combination[2] = blocksFilled.filter(e => v3.indexOf(e) !== -1).length === v3.length;
    combination[3] = blocksFilled.filter(e => v4.indexOf(e) !== -1).length === v4.length;
    combination[4] = blocksFilled.filter(e => v5.indexOf(e) !== -1).length === v5.length;
    combination[5] = blocksFilled.filter(e => v6.indexOf(e) !== -1).length === v6.length;
    combination[6] = blocksFilled.filter(e => v7.indexOf(e) !== -1).length === v7.length;
    combination[7] = blocksFilled.filter(e => v8.indexOf(e) !== -1).length === v8.length;

    combination.forEach((e, index) => {
        if (ID === 1) {
            actualScore = 'placarX';
        } else
            actualScore = 'placarO';
        if (e) {
            gameIsFinished = true;
            line = line.concat('v', index + 1);
            document.getElementById(actualScore).innerHTML = parseInt(document.getElementById("placarX").innerHTML)+1;
            endGame(combination, line, ID);
        }
    });
}

function clearScore(){
    newScore = document.getElementsByClassName("placar");
    [...newScore].forEach(e => {
        e.innerHTML = 0;        
    }); 
}

function blockTest(block) {
    if (!block.innerHTML && gameIsFinished === false) {
        if (ctrl == true) {
            let newBlock = document.createElement("img");
            newBlock.setAttribute('class', 'image');
            newBlock.setAttribute('src', 'r.png');
            block.appendChild(newBlock);
            filledBlocksO[i] = parseInt(newBlock.parentElement.id);
            counter++;
            console.log("ROUND : ", counter);
            if (counter > 4) {
                isWinner(filledBlocksO, 0);
            }
            i++;
            ctrl = !ctrl;
        } else if (ctrl == false) {
            let newBlock = document.createElement("img");
            newBlock.setAttribute('class', 'image');
            newBlock.setAttribute('src', 'b.png');
            block.appendChild(newBlock);
            filledBlocksX[j] = parseInt(newBlock.parentElement.id);
            counter++;
            console.log("ROUND : ", counter);
            if (counter > 4) {
                isWinner(filledBlocksX, 1);
            }
            j++;
            ctrl = !ctrl;
        }
        if (counter == 9) {
            console.log("FIM DE JOGO");
        }
    } else if (gameIsFinished === false) {
        console.log("BLOCO JÁ PREENCHIDO");
    } else {
        console.log("Clique em 'REINICIAR' para começar um novo jogo!");
    }
}

function clearScreen() {
    let eachBlock;
    eachBlock = document.getElementsByClassName('bloco');
    [...eachBlock].forEach(e => {
        e.innerHTML = '';
    });
    console.log(".......REINICIANDO JOGO.......");
    counter = 0;
    gameIsFinished = false;
    filledBlocksX = []
    filledBlocksO = []
    line = '';
    winningLine = [];
    let resetBlock = document.querySelectorAll('.blocoVencedor');

    resetBlock.forEach(e => {
        e.classList.replace('blocoVencedor', 'bloco');
        e.innerHTML = '';
    });
}

function endGame(winnerLine, line, ID) {

    if (gameIsFinished === true) {

        (ID === 1) ? console.log("VENCEDOR: X") : console.log("VENCEDOR: O");
        switch (line) {
            case 'v1':
                winningLine = v1;
                break;
            case 'v2':
                winningLine = v2;
                break;
            case 'v3':
                winningLine = v3;
                break;
            case 'v4':
                winningLine = v4;
                break;
            case 'v5':
                winningLine = v5;
                break;
            case 'v6':
                winningLine = v6;
                break;
            case 'v7':
                winningLine = v7;
                break;
            case 'v8':
                winningLine = v8;
                break;
        }
        console.log(`Linha vencedora: ${line} : ${winningLine}`);
        [...winningLine].forEach(e => {
            document.getElementById(e).classList.replace('bloco', 'blocoVencedor');
        });
    }

}
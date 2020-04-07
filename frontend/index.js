var counter = 0;
var ctrl = undefined;

var img = document.getElementsByClassName('image');

var filledBlocksR = [];
var filledBlocksB = [];
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


function buttonHandler(btn) {
    btn.disabled = true;
}

function setPlayer(choosePlayerBtn) {
    if (choosePlayerBtn.value == 'X') {
        console.log("X");
        ctrl = true;
        buttonHandler(choosePlayerBtn);
    }
    if (choosePlayerBtn.value == 'O') {
        console.log("O");
        ctrl = false;
        buttonHandler(choosePlayerBtn);
    }
}

function isWinner(blocksFilled, ID) {
    console.log(v1, "v1", blocksFilled.filter(e => v1.indexOf(e) !== -1).length === v1.length);
    console.log(v2, "v2", blocksFilled.filter(e => v2.indexOf(e) !== -1).length === v2.length);
    console.log(v3, "v3", blocksFilled.filter(e => v3.indexOf(e) !== -1).length === v3.length);
    console.log(v4, "v4", blocksFilled.filter(e => v4.indexOf(e) !== -1).length === v4.length);
    console.log(v5, "v5", blocksFilled.filter(e => v5.indexOf(e) !== -1).length === v5.length);
    console.log(v6, "v6", blocksFilled.filter(e => v6.indexOf(e) !== -1).length === v6.length);
    console.log(v7, "v7", blocksFilled.filter(e => v7.indexOf(e) !== -1).length === v7.length);
    console.log(v8, "v8", blocksFilled.filter(e => v8.indexOf(e) !== -1).length === v8.length);
    console.log("blocks", blocksFilled);
    //console.log("VENCEDOR ID :: ", ID);
}


function blockTest(block) {

    if (!block.innerHTML) {
        if (ctrl == true) {
            let newBlock = document.createElement("img");
            newBlock.setAttribute('class', 'image');
            newBlock.setAttribute('src', 'r.png');
            block.appendChild(newBlock);
            filledBlocksR[i] = newBlock.parentElement.id;
            counter++;
            if (counter > 4) {
                isWinner(filledBlocksR, 0);
            }
            i++;
            console.log("ROUND : ", counter);
            ctrl = !ctrl;
        } else if (ctrl == false) {
            let newBlock = document.createElement("img");
            newBlock.setAttribute('class', 'image');
            newBlock.setAttribute('src', 'b.png');
            block.appendChild(newBlock);
            filledBlocksB[j] = newBlock.parentElement.id;
            counter++;
            if (counter > 4) {
                isWinner(filledBlocksB, 1);
            }
            j++;
            console.log("ROUND : ", counter);
            ctrl = !ctrl;
        }
        if (counter == 9) {
            console.log("FIM DE JOGO");
        }
    } else {
        console.log("BLOCO JÁ PREENCHIDO");
    }
}

function clearScreen() {
    let eachBlock;
    eachBlock = document.getElementsByClassName('bloco');
    [...eachBlock].forEach(e => {
        e.innerHTML = '';
    });
    counter = 0;
}

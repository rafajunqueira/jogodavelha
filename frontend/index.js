var playerX = document.getElementById("playerX");
var playerO = document.getElementById("playerO");

var counter = 0;
var ctrl = undefined;
var gameOn;

var img = document.getElementsByClassName('image');

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

function blockTest(block) {

    if (!block.innerHTML) {
        if (ctrl == true) {
            let newBlock = document.createElement("img");
            newBlock.setAttribute('class', 'image');
            newBlock.setAttribute('src', 'r.jpg');
            block.appendChild(newBlock);
            counter++;
            console.log("ROUND : ", counter);
            ctrl = !ctrl;
        } else if (ctrl == false) {
            let newBlock = document.createElement("img");
            newBlock.setAttribute('class', 'image');
            newBlock.setAttribute('src', 'b.jpg');
            block.appendChild(newBlock);
            newBlock
            counter++;
            console.log("ROUND : ", counter);
            ctrl = !ctrl;
        }
        if (counter == 9) {
            console.log("FIM DE JOGO");
            img2.removeAttribute("hidden");
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
    cout = 0;
    
}

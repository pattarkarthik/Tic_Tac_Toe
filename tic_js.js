console.log("hiiiiiiiiiii");

var btns = document.querySelectorAll(".btn");
var allButtons = Array.from(btns);
var progress = document.querySelector('.progress');
progress.innerText = "X's Turn";
function gamePlay() {
    let restart = document.querySelector('.restart').addEventListener('click', () => {
        allButtons.forEach(ele => {
            ele.innerText = null;
        })
    })

    allButtons.forEach(ele => {
        ele.addEventListener('click', () => {

            if (progress.innerText === "X's Turn" && ele.innerText == '') {
                ele.innerText = 'X';
                if (winCheck()) {
                    progress.innerText = "X is the winner";
                    return;
                }
                else {
                    progress.innerText = "O's Turn";
                }
            }
            else if (ele.innerText == "") {
                ele.innerText = 'O';
                if (winCheck()) {
                    progress.innerText = "O is the winner";
                    return;
                }
                else {
                    progress.innerText = "X's Turn";
                }
            }

        })
    })
}

gamePlay();

function winCheck() {
    let matches = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (const match of matches) {
        const [a, b, c] = match;
        // console.log(a,b,c);
        // console.log(a,b,c,allButtons[a].innerText);
        if (allButtons[a].innerText && (allButtons[a].innerText === allButtons[b].innerText &&
            allButtons[a].innerText === allButtons[c].innerText)) {
            console.log("winner");
            return true;
        }
    }
    return false;
}
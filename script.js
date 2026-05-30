const cells = document.querySelectorAll(".cell");

const checkBtn = document.getElementById("checkBtn");
const resetBtn = document.getElementById("resetBtn");
const newGameBtn = document.getElementById("newGameBtn");
const message = document.getElementById("message");

const puzzles = [
{
    puzzle: [
        1, "", 3, "",
        "", 4, "", 2,
        2, "", 4, "",
        "", 3, "", 1
    ],

    answer: [
        1,2,3,4,
        3,4,1,2,
        2,1,4,3,
        4,3,2,1
    ]
},

{
    puzzle: [
        "",2,"",4,
        3,"",1,"",
        "",1,"",3,
        4,"",2,""
    ],

    answer: [
        1,2,3,4,
        3,4,1,2,
        2,1,4,3,
        4,3,2,1
    ]
}
];

let currentAnswer = [];

function loadPuzzle() {

    const randomPuzzle =
        puzzles[Math.floor(Math.random() * puzzles.length)];

    currentAnswer = randomPuzzle.answer;

    cells.forEach((cell, index) => {

        cell.style.backgroundColor = "";

        if (randomPuzzle.puzzle[index] !== "") {

            cell.value = randomPuzzle.puzzle[index];
            cell.disabled = true;
            cell.style.backgroundColor = "#dddddd";

        } else {

            cell.value = "";
            cell.disabled = false;
        }
    });

    message.textContent = "";
}

newGameBtn.addEventListener("click", loadPuzzle);

resetBtn.addEventListener("click", () => {

    cells.forEach((cell, index) => {

        if (!cell.disabled) {
            cell.value = "";
        }

        cell.style.backgroundColor = "";
    });

    message.textContent = "";
});

checkBtn.addEventListener("click", () => {

    let isCorrect = true;

    cells.forEach((cell, index) => {

        if (parseInt(cell.value) !== currentAnswer[index]) {

            if (!cell.disabled) {
                cell.style.backgroundColor = "red";
            }

            isCorrect = false;

        } else {

            if (!cell.disabled) {
                cell.style.backgroundColor = "lightgreen";
            }
        }
    });

    if (isCorrect) {

        message.textContent =
            "🎉 Correct! You solved it!";

        message.style.color = "green";

    } else {

        message.textContent =
            "❌ Wrong answer!";

        message.style.color = "red";
    }
});

loadPuzzle();
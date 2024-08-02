const canvas = document.getElementById('ladderCanvas');
const ctx = canvas.getContext('2d');

const ladderWidth = 10;
const ladderHeight = 6;
const cellWidth = 50;
const cellHeight = 50;

const ladder = [
    [0, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 0],
];

function drawLadder() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < ladderHeight; i++) {
        for (let j = 0; j < ladderWidth; j++) {
            ctx.strokeRect(j * cellWidth, i * cellHeight, cellWidth, cellHeight);
            if (ladder[i][j] === 1) {
                ctx.beginPath();
                ctx.moveTo(j * cellWidth, i * cellHeight + cellHeight / 2);
                ctx.lineTo((j + 1) * cellWidth, i * cellHeight + cellHeight / 2);
                ctx.stroke();
            }
        }
    }
}

function simulateLadder() {
    let position = 0;
    for (let i = 0; i < ladderHeight; i++) {
        if (position > 0 && ladder[i][position - 1] === 1) {
            position -= 1;
        } else if (position < ladderWidth - 1 && ladder[i][position] === 1) {
            position += 1;
        }
    }
    alert(`ボールの最終位置は: ${position + 1}`);
}

drawLadder();

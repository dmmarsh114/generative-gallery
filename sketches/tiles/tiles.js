let tileSize = 50;
let x = 0;
let y = 0;

function setup() {
    let canvas = createCanvas(500, 500);
    canvas.parent(document.getElementById('artContainer'));
    frameRate(10);

    let button = createButton('reset');
    button.parent(document.getElementById('button'));
    button.mousePressed(resetSketch);

    colorMode(HSB);
    rectMode(CENTER);
    noFill();
    background(0);
}

function resetSketch() {
    background(0);
    x = 0;
    y = 0;
}

function drawSquares(x, y) {
    for (let k = 0; k < random(4, 15); k++) {
        // 90, 180, 270
        stroke(y % 360, 80, 70);
        rect(x + tileSize / 2, y + tileSize / 2, tileSize - (k + random(0, 40)));
    }
}

function drawCircle(x, y) {
    for (let k = 0; k < random(4, 10); k++) {
        // 90, 180, 270
        stroke(x % 360, 100, 100);
        ellipse(x + tileSize / 2, y + tileSize / 2, tileSize - (k + random(5, 40)));

    }
}

function draw() {
    if (y < height) {

        let num = random();
        if (num < 0.2) {
            drawCircle(x, y);
        } else {
            drawSquares(x, y);
        }

        if (x > width) {
            x = 0;
            y += tileSize;
        } else {
            x += tileSize;
        }

    }
}
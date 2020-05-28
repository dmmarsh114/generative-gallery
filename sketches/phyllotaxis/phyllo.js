/*
    PLAYING AROUND WITH THIS CODE
        Try changing:
            * c (the distance between the dots)
            * size (of the dots)
            * fill (some presets are already written)
            * angleFactor
                - the default should be 0 (for a total of 137.5)
                - try -0.2 (for a total of 137.3)
                - or 0.1 (137.6)
            * n (the number of dots):
                - let n = 0; n++
                - try let n = 2286; if (n > 0) { n-- }
                - try n += 10 (might need to lower the value of c)
            * change the shape (ellipse, rect, triangle, etc)
                - try changing the rotation with a
                - drawing two shapes w/ one rotating looks cool (esp at 137.9 and 137.2)
*/

let n = 0;
let c = 8;
let angleFactor;
let size = 8;
let maxCount = 600;
let colorStyle;
let shapeStyle;

function setup() {
    let canvas = createCanvas(500, 500);
    canvas.parent(document.getElementById('artContainer'));

    frameRate(15);

    colorMode(HSB);
    angleMode(DEGREES);

    angleFactor = random(-0.5, 0.5);
    colorStyle = random(100, 360);
    shapeStyle = random();

    background('black');
}

function drawPhyllo() {
    let a = n * (137.5 + angleFactor);
    let r = c * sqrt(n);

    let x = r * cos(a);
    let y = r * sin(a);

    noStroke();
    fill(n % colorStyle, 90, 90);
    if (shapeStyle > 0.4) {
        ellipse(x, y, size);
    } else {
        rotate(a);
        rect(x, y, size);
    }

    if (n <= maxCount) {
        n++;
    }
    if (n == maxCount) {
        resetSketch();
        drawPhyllo();
    }
}

function resetSketch() {
    background('black');
    n = 0;
    angleFactor = random(-0.5, 0.5);
    colorStyle = random(100, 360);
    shapeStyle = random();
}

function draw() {
    translate(width / 2, height / 2);
    drawPhyllo();
}
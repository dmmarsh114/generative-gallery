/*
    this project was inspired by this video: 
    https://www.youtube.com/watch?v=KWoJgHFYWxY

    the phyllotaxis pattern used here is based on the equations found in this paper: 
    http://algorithmicbotany.org/papers/abop/abop-ch4.pdf

*/

let spacing = 100;

let c = 2;
let size = 2;

function setup() {
    let canvas = createCanvas(800, 450);
    canvas.parent(document.getElementById('artContainer'));


    // let button = createButton('draw again');
    // button.parent(document.getElementById('button'));
    // button.mousePressed(resetSketch);
}

function resetSketch() {
    background(0);
    ellipseMode(CORNER);

    for (let i = 0; i < width; i += 100) {
        for (let j = 10; j < height; j += spacing + 10) {

            // draw spirals
            push();
            translate(i + spacing / 2, j + spacing / 2); // move to the center of each tile
            colorMode(HSB);
            ellipseMode(CENTER);

            let n = 0;
            let angleFactor = random(-0.5, 0.5);

            while (n < 500) {

                // phyllotaxis pattern: 

                let a = n * (137.5 + angleFactor);
                let r = c * sqrt(n);

                let x = (r * cos(a));
                let y = (r * sin(a));

                fill((i + 150) % 256, (j + 150) % 256, n % 256);
                // fill(i % 256, 255, 255);
                noStroke();
                ellipse(x, y, size);

                n++;
            }
            pop();
        }
    }
}

function draw() {
    noLoop();

    resetSketch();
}
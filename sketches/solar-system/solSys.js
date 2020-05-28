let planets = [];

let sun;
let mercury, venus, earth, mars;
let jupiter, saturn, neptune, uranus;
let pluto;

function setup() {
    let canvas = createCanvas(800, 450);
    canvas.parent(document.getElementById('spaceContainer'));

    /*
        Orbital speeds (km/s)
        M - 48 
        V - 35
        E - 30
        M - 24
        J - 13
        S - 10
        U - 7
        N - 5
        P - 5
    */

    sun = new Planet(0, 20, 'yellow');

    mercury = new Planet(40, 3, 'gray', 0.02);
    venus = new Planet(55, 3, 'orange', 0.01);
    earth = new Planet(75, 7, 'blue', 0.012);
    mars = new Planet(105, 7, 'red', 0.01);
    jupiter = new Planet(150, 12, 'coral', 0.005);
    saturn = new RingedPlanet(200, 9, 'tan', 0.004);
    uranus = new Planet(300, 9, 'lightblue', 0.003);
    neptune = new Planet(250, 9, 'indigo', 0.0025);
    pluto = new Planet(350, 2, 'white', 0.0025);

    planets.push(mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto);
}

function draw() {
    // config draw
    background(0);
    noStroke();
    ellipseMode(CENTER);
    translate(width / 2, height / 2);

    sun.show();

    for (let i of planets) {
        i.orbit();
        i.show();
    }
}
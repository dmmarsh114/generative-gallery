class Planet {
    constructor(distance, radius, color, orbitalSpeed = random(0.001, 0.005), angle = random(0, 10)) {
        this.distance = distance;
        this.radius = radius;
        this.color = color;
        this.angle = angle;
        this.orbitalSpeed = orbitalSpeed;
    }

    show() {
        push();
        rotate(this.angle);
        translate(this.distance, 0);
        noStroke();
        fill(this.color);
        ellipse(0, 0, this.radius * 2);
        pop();
    }

    orbit() {
        // draw orbital plane
        stroke('white');
        noFill();
        ellipse(0, 0, this.distance * 2);

        // animate orbit
        this.angle = this.angle + this.orbitalSpeed
    }
}

class RingedPlanet extends Planet {

    show() {
        push();
        stroke('white');
        rotate(this.angle);
        translate(this.distance, 0);
        // draw rings
        rotate(PI / 4);
        ellipse(0, 0, this.radius * 4, this.radius / 2);
        pop();
        // draw planet as normal
        super.show();
    }
}
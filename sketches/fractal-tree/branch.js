function Branch(begin, end) {
    this.begin = begin;
    this.end = end;
    this.grown = false;

    this.show = function () {
        stroke('white');
        line(this.begin.x, this.begin.y, this.end.x, this.end.y);
    }

    this.newBranch = function (angle) {
        // find the direction of the previous branch
        let dir = p5.Vector.sub(this.end, this.begin);

        dir.mult(0.67); // this shortens the branch
        dir.rotate(angle);

        // add the direction to the end of the branch to find new endpoint
        let newEnd = p5.Vector.add(this.end, dir);

        let branch = new Branch(this.end, newEnd);
        return branch;
    }
}
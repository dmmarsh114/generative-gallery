let speed = 5;
let isGrowing = true;

let length = 100;
let tree = [];
let leaves = [];

let count = 0;

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent(document.getElementById('treeContainer'));
  frameRate(speed);

  resetSketch();

  let button = createButton('grow again');
  button.parent(document.getElementById('button'));
  button.mousePressed(resetSketch);
}

function resetSketch() {
  isGrowing = true;
  count = 0;
  tree = [];
  leaves = [];

  let rootBegin = createVector(width / 2, height);
  let rootEnd = createVector((width / 2) + random(-15, 15), height - length);

  let root = new Branch(rootBegin, rootEnd);
  tree[0] = root;
}

function grow() {
  if (isGrowing) {
    // add two branches off of each branch
    for (let i = tree.length - 1; i >= 0; i--) {
      if (!tree[i].grown) {
        tree.push(tree[i].newBranch(PI / random(3, 10)));
        tree.push(tree[i].newBranch(-PI / random(3, 10)));
      }
      tree[i].grown = true;
    }
    count++;

    // add leaves
    if (count === 5) {
      for (let i = 0; i < tree.length; i++) {
        if (!tree[i].grown) {
          let leaf = tree[i].end.copy();
          leaves.push(leaf);
        }
      }
    }
  }
}

function draw() {
  background(0, 0, 0, 0); // transparent background
  // create circular mask for canvas
  fill('black');
  ellipseMode(CENTER);
  ellipse(width / 2, height / 2, width, height);

  strokeWeight(2);

  // display tree
  for (let i = 0; i < tree.length; i++) {
    tree[i].show();
  }

  // display leaves
  for (let i = 0; i < leaves.length; i++) {
    fill(255, 0, 100, 100);
    strokeWeight(1);
    ellipse(leaves[i].x, leaves[i].y, 12, 12);
  }

  if (count === 5) {
    isGrowing = false;
  }

  grow();
}
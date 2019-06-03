// object = each circle in the class
// objectMaker = makes a new object from the class className
// objectNum is number of number of objects made with the class

let wanderers = [];
var objectNum = 300;

var spacing = 1;
let size = 2;
var r = 30;
var g;
var b = 255;


var wanderAmt = 1;
var mx = 1;
var my = 1;


function setup() {
  createCanvas(400, 400);
  background(0);

  for (let i = 0; i < objectNum; i = i + 1) {
    x = i * spacing;
    y = i * spacing;
    
    g = map(i, 0 , objectNum, 0, 255) ;
    
    print(g);

    wanderers[i] = new Wanderers(x, y, 
                                 r, g, b);
  }
}

function draw() {
  // for (let wanderer of wanderers) {
  //   wanderer.show();
  // }

  for (let i = 0; i < wanderers.length; i++) {
    wanderers[i].show();
    wanderers[i].move();
  }

}

// ----------------------------------------

class Wanderers {
  constructor(x, y, 
              r, g, b) {
    this.x = x;
    this.y = y;
    
    this.g = g;

  }
  move() {
    if (mouseX > this.x) {
      this.x = this.x + mx;
    } else {
      this.x = this.x - mx;
    }
    if (mouseY > this.y) {
      this.y = this.y + my;
    } else {
      this.y = this.y - my;
    }

    this.x = this.x + random(-wanderAmt, wanderAmt)
    this.y = this.y + random(-wanderAmt, wanderAmt)
  }

  show() {
    noStroke();
    fill(r, this.g, b);
    ellipse(this.x, this.y, size);
  }
}
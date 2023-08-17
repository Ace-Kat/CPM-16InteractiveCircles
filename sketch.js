let circles = [];
let windows = [];
let superstructureTitle;
let baseTitle;

function setup() {
  createCanvas(windowWidth, windowHeight);

  superstructureTitle = new Title(width / 2, windowHeight / 4 - 140, "Superstructure");
  baseTitle = new Title(width / 2, windowHeight - 350, "Base");

  // Create superstructure circles
  for (let i = 0; i < 5; i++) {
    let x = map(i, 0, 4, 100, width - 100);
    let y = windowHeight / 4;
    circles.push(new Circle(x, y, 90, 'superstructure', `Super ${i + 1}`));
  }

  // Create base circles
  for (let i = 0; i < 5; i++) {
    let x = map(i, 0, 4, 100, width - 100);
    let y = 3 * windowHeight / 4;
    circles.push(new Circle(x, y, 90, 'base', `Base ${i + 1}`));
  }


  circles[0].changeLabel('Artistic Intention');
  circles[1].changeLabel('Decline of the Aura');
  circles[2].changeLabel('Cult vs. Exhibition Value');
  circles[3].changeLabel('The Purpose of Art');
  circles[4].changeLabel('Ethics, Artist Ownership & Agency');
  circles[5].changeLabel('Physical Infrastructure');
  circles[6].changeLabel('Data Set');
  circles[7].changeLabel('Working Conditions of Artists');
  circles[8].changeLabel('Who\'s the artist');
  circles[9].changeLabel('Venture Capital');

}

function draw() {
  background(255);

  superstructureTitle.display();
  baseTitle.display();

  for (let circle of circles) {
    circle.display();
  }

  for (let window of windows) {
    window.display();
  }
}

function mouseClicked() {
  for (let circle of circles) {
    if (circle.contains(mouseX, mouseY)) {
      windows.push(new Window(circle));
      redraw(); // Redraw the canvas after interaction
      break;
    }
  }
}

class Circle {
  constructor(x, y, r, group, label) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.group = group;
    this.label = label;
  }

  contains(x, y) {
    let d = dist(x, y, this.x, this.y);
    return d < this.r;
  }

  display() {
    noStroke();
    fill(this.group === 'superstructure' ? 'blue' : 'green');
    ellipse(this.x, this.y, this.r * 2);
    fill(255);
    textSize(14);
    textAlign(CENTER, CENTER);
    text(this.label, this.x, this.y);
  }

  changeLabel(newLabel) {
    this.label = newLabel;
  }
}

class Window {
  constructor(circle) {
    this.circle = circle;
    this.showCloseButton = true;
  }

  display() {
    let centerX = width / 2;
    let centerY = height / 2;

    fill(220);
    rect(centerX - 600, centerY - 300, 1200, 600); // Adjust the window size and position
    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(`${this.circle.label}`, centerX, centerY - 220);

    if (this.showCloseButton) {
      this.displayCloseButton(30, 30); // Position close button at top left corner
    }
  }

  displayCloseButton(x, y) {
    fill(150);
    rect(x, y, 60, 30);
    fill(0);
    textSize(16);
    textAlign(CENTER, CENTER);
    text('Close', x + 30, y + 15);
  }

  closeWindow() {
    this.showCloseButton = false;
  }
}

class Title {
  constructor(x, y, text) {
    this.x = x;
    this.y = y;
    this.text = text;
  }

  display() {
    fill(0);
    textSize(30);
    textAlign(CENTER, CENTER);
    text(this.text, this.x, this.y);
  }
}

function mousePressed() {
  for (let window of windows) {
    if (window.showCloseButton && mouseX >= 30 && mouseX <= 90 &&
        mouseY >= 30 && mouseY <= 60) {
      windows.pop();
      redraw(); // Redraw the canvas after closing
      break;
    }
  }
}

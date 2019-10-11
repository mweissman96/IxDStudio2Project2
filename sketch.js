var codaReg, codaBold;
var addButtonTextColor, addButtonBorderColor;
var firstButtonHeight;
var page;

function preload(){
  codaReg = loadFont('assets/Coda-Regular.ttf');
  codaBold = loadFont('assets/Coda-ExtraBold.ttf');
  //lightButtonImage = loadImage('assets/lightToggle.png');
}

function setup() {
  createCanvas(640,1136);
  colorMode(RGB);
  addButtonTextColor = 100;
  addButtonBorderColor = 190;
  firstButtonHeight = 368;
  page = 1;
}

function draw() {
  // Visually Establish Screen Dimensions
  background(255);
  fill(255);
  rectMode(CORNER);
  strokeWeight(2);
  stroke(0);
  rect(0,0,640,1136);

  // Output Logo (I can't get the text to be italic D:)
  textSize(80);
  textAlign(LEFT);
  //textStyle(ITALIC);
  textFont(codaReg);
  strokeWeight(5);
  fill(0);
  text('ECO', 75, 150);
  textFont(codaReg);
  strokeWeight(0);
  fill(50, 220, 50);
  text('DELIVERY', 230, 150);
  fill(255);
  textFont('Arial');

  // Drawing Screens
  if (page == 1) drawP1();
  if (page == 2) drawP2();
  if (page == 3) drawP3();
  if (page == 4) drawP4();
  if (page == 5) drawP5();
  if (page == 6) drawP6();
  if (page >= 7) drawP99();
}

function drawP1() {
  drawAddButton(368);
  drawGoButton(468);
}

function drawP2() {
  rectMode(CENTER);
  stroke(0);
  strokeWeight(3);
  rect(320,481,450,235);
  textSize(28);
  textAlign(CENTER);
  fill(0);
  strokeWeight(0.5);
  text("Please enter the destination:", 320, 420);
  fill(255);
  strokeWeight(1);
  rect(320,480,350,45);
  strokeWeight(1.5);
  line(155,470,155,490);
  fill(50, 220, 50);
  strokeWeight(0.5);
  rect(320,548,100,45);
  fill(255);
  strokeWeight(0);
  textSize(22);
  text("OK", 320, 555);
}

function drawP3() {
  drawDestButton(368, "Destination 1");
  drawAddButton(468);
  drawGoButton(568);
}

function drawP4() {
  strokeWeight(0);
  fill(255);
  rectMode(CENTER);
  rect(320, 100, 620, 150);

  fill(0);
  textAlign(CENTER);
  textSize(36);
  text('Some time later...', 320, 568);
}

function drawP5() {
  drawDestButton(368, "Destination 1");
  drawDestButton(468, "Destination 2");
  drawDestButton(568, "Destination 3");
  drawDestButton(668, "Destination 4");
  drawAddButton(768);
  drawGoButton(868);
}

function drawP6() {
  drawDestButton(368, "Destination 1");
  drawDestButton(468, "Destination 2");
  drawDestButton(568, "Destination 3");
  drawDestButton(668, "Destination 4");
  drawAddButton(768);
  drawGoButton(868);

  stroke(255,0,0);
  strokeWeight(6);
  line(560, 568, 560, 668);

  line(554, 660, 560, 668);
  line(566, 660, 560, 668);
  line(554, 660, 566, 660);
}

function drawP99() {
  background(0);
}

function drawDestButton(buttonHeight, name) {
  rectMode(CENTER);
  stroke(0);
  strokeWeight(2);
  rect(320, buttonHeight, 400, 75);
  ellipse(560, buttonHeight, 30, 30);

  // Add Destination Button Content
  strokeWeight(0);
  textSize(36);
  textAlign(CENTER);
  textFont(codaReg);
  fill(0);
  text(name, 320, buttonHeight + 13);
  fill(255);
  textFont('Arial');
}

function drawAddButton(buttonHeight) {
  rectMode(CENTER);

  // Add Destination Button Shape
  stroke(190);
  strokeWeight(2);
  rect(320, buttonHeight, 400, 75);

  // Add Destination Plus Sign
  strokeWeight(3);
  stroke(addButtonTextColor);
  line(159, buttonHeight + 1, 189, buttonHeight + 1);
  line(174, buttonHeight - 14, 174, buttonHeight + 16);
  stroke(addButtonBorderColor);
  strokeWeight(2);

  // Add Destination Button Content
  strokeWeight(0);
  textSize(36);
  textAlign(CENTER);
  textFont(codaReg);
  fill(100);
  text('        Add Destination', 320, buttonHeight + 13);
  fill(255);
  textFont('Arial');
}

function drawGoButton(buttonHeight) {
  rectMode(CENTER);
  stroke(0);
  fill(50, 220, 50);
  strokeWeight(0.5);
  rect(320,buttonHeight,100,45);
  fill(255);
  strokeWeight(0);
  textSize(22);
  text("GO!", 320, buttonHeight+7);
}

function mouseClicked()
{page++;}

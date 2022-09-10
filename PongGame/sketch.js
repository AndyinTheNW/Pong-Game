// BALL PARAMETERS

let xBall = 300;
let yBall = 200;
let dBall = 15;
let rBall = dBall /2;
let vxBall = 10;
let vyBall = 7;

// RECT1 PARAMETERS  

let xRect1 = 0;
let yRect1 = 150;
let wRect1 = 10;
let hRect1 = 100;
let vyRect1 = 5;

// RECT2 PARAMETERS

let xRect2 = 588;
let yRect2 = 150;
let wRect2 = 10;
let hRect2 = 100;
let vyRect2;

// GAME SCORES

let rect1Points = 0;
let rect2Points = 0;

// GAME SOUNDS

let racket;
let point;
let soundtrack;

// ELEMENTAR FUNCTIONS

function preload()
{
  soundtrack = loadSound("soundtrack.mp3");
  point = loadSound("point.mp3");
  racket = loadSound("racket.mp3");
}

function setup() {
  createCanvas(600, 400);
   //soundtrack.loop();
}

function draw() {
  
  background(0);
  
  // FUNCTIONS - SHOW
  
  showBall ();
  
  showRect1(xRect1, yRect1);
  
  showRect2(xRect2, yRect2);
  
  showPoints1 (rect1Points,150,26);
  
  showPoints2 (rect2Points,450,26);
  
  // FUNCTIONS - MOVE
  
  moveBall ();
  
  moveRect1 ();
  
   if (keyIsDown(87)) {
        yRect1 -= 10;
    }
    if (keyIsDown(83)) {
        yRect1 += 10;
    }
  
  moveRect2 ();
  
  // FUNCTIONS - VERIFICATIONS
  
  verifyBallCollision();
  
  verifyRect1Collision();
  
  verifyRect2Collision();
  
  verifyScorePoint();
}

function showBall()
{
  circle(xBall, yBall, dBall);
}

function showRect1(x,y)
{
  rect(x, y, wRect1, hRect1);
}

function showRect2 (x,y){
  rect (x, y, wRect2, hRect2);
}

function showPoints1(points,x,y)
{
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(x-20, y-16, 40, 20);
  fill(255);
  text(points, x, y);
}

function showPoints2(points,x,y)
{
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(x-20, y-16, 40, 20);
  fill(255);
  text(points, x, y);
}

function moveBall()
{
  xBall += vxBall;
  yBall += vyBall;
}

function moveRect1(){}

                          



function moveRect2() {
  vyRect2 = yBall - yRect2 - wRect2 /2 - 50;
  yRect2 += vyRect2
}

 function verifyRect1Collision (){
  if (xBall - rBall < xRect1 + wRect1 && yBall - rBall < yRect1 + hRect1 && yBall + rBall > yRect1)
  {
    vxBall *= -1;
    racket.play ();
  }
  }

 function verifyRect2Collision (){
  if (xBall - rBall > xRect2 - wRect2 && yBall - rBall < yRect2 + hRect2 && yBall + rBall > yRect2)
  {
    vxBall *= -1;
    racket.play ();
  }
 }

function verifyBallCollision ()
{
  if (xBall+rBall > width || xBall-rBall < 0)
  {
    vxBall *= -1;
  }

  if (yBall+rBall > height || yBall-rBall < 0)
  {
    vyBall *= -1;
  }
}

function verifyScorePoint()
{
  if (xBall+rBall > width)
  {
    rect1Points += 1;
    point.play();
  }
  if(xBall-rBall < 0)
  {
    rect2Points += 1;
    point.play();
  }
}
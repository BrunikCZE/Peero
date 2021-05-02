function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);
  frameRate(144);
}
function draw() {
  strokeWeight(2);
  translate(width/2, height/2);
  background(123,104,238);
  
  var radius = int(min(width, height) / 2);
  var numPoints = 60;
  var angle = TWO_PI/numPoints;
  
  var secondsRadius = radius * 0.72;
  var minutesRadius = radius * 0.60;
  var hoursRadius = radius * 0.50;
  var clockDiameter = radius * 1.8;
  
  
  fill(1);
  noStroke();
  ellipse(0, 0, clockDiameter, clockDiameter);
  
  //výpočet pro ručičky
  var s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  var m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  var h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;
  
  
  // ciferník - tečky
  strokeWeight(2);
  stroke(123,104,238);
  beginShape(POINTS);
  var i = 0;
  while (i < numPoints ) {
      x = cos(angle*i) * secondsRadius; 
      y = sin(angle*i) * secondsRadius;
      vertex(x, y);
      i++;
  }
  endShape(); 
  //datum
  x = cos(PI + HALF_PI) * secondsRadius - 100;
  y = sin(PI + HALF_PI) * secondsRadius + 200;
  stroke(123,104,238);
  strokeWeight(4);
  let da = day();
  let mo = month();
  let ye = year();
    textSize(height/20);
    fill(255)
    text(da + "." + mo + ". " + ye, x, y);
  
  //ručičky
  stroke(220, 20, 60)
  strokeWeight(1);
  line(0, 0, cos(s) * secondsRadius, sin(s) * secondsRadius);
  
  stroke(100);
  strokeWeight(2);
  line(0, 0, cos(m) * minutesRadius, sin(m) * minutesRadius);
  
  stroke(100);
  strokeWeight(4);  
  line(0, 0, cos(h) * hoursRadius, sin(h) * hoursRadius);
  
  //čísla
  fill(123,104,238);
  textSize(20);
  strokeWeight(0.1);
  
  x = cos(PI + HALF_PI) * secondsRadius - 10;
  y = sin(PI + HALF_PI) * secondsRadius - 10;
  text("12", x, y);
  
  x = cos(TWO_PI) * secondsRadius + 10;
  y = sin(TWO_PI) * secondsRadius + 5;
  text("3", x, y);
  
  x = cos(HALF_PI) * secondsRadius - 7;
  y = sin(HALF_PI) * secondsRadius + 20;
  text("6", x, y);
  
  x = cos(PI) * secondsRadius - 25;
  y = sin(PI) * secondsRadius + 5;
  text("9", x, y);
}

//responsivita - refresh
function windowResized(){
  createCanvas(window.innerWidth, window.innerHeight);
  background(123,104,238);
  xs = width / 2;
  ys = height / 2;
  r = min(width, height) / 2 - 50;
}
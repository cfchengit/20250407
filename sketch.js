let circles = [];

function setup() {
  // 產生一個全視窗的畫布
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('p5-container'); // 將畫布附加到指定的容器中
  // 畫布的顏色為#f5ebe0
  background('#f5ebe0');  

  // 產生40個圓
  for (let i = 0; i < 40; i++) {
    let circle = {
      x: random(width),
      y: random(height),
      size: random(30, 50),
      color: color(random(255), random(255), random(255))
    };
    circles.push(circle);
  }
}

function draw() {
  // 清除畫布並重設背景
  background('#f5ebe0');

  // 計算滑鼠影響的大小變化
  let sizeOffset = map(mouseX, 0, width, 20, 80);

  // 繪製所有圓
  for (let circle of circles) {
    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, circle.size + sizeOffset);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

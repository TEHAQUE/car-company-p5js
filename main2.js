const ballsSketch = (p) => {
  let balls = [];
  const ballCount = 150;

  p.setup = () => {
    const ballsContainer = p.select(".balls");
    const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    canvas.parent(ballsContainer);

    for (let i = 0; i < ballCount; i++) {
      let ball = {
        x: p.random(p.width),
        y: p.random(p.height),
        size: p.random(10, 30),
        xSpeed: p.random(-2, 2),
        ySpeed: p.random(-2, 2),
        color: p.color(p.random(255), p.random(255), p.random(255)),
      };
      balls.push(ball);
    }
  };

  p.draw = () => {
    p.clear();
    for (let ball of balls) {
      p.noStroke();
      p.fill(ball.color);
      p.ellipse(ball.x, ball.y, ball.size);

      ball.x += ball.xSpeed;
      ball.y += ball.ySpeed;

      if (ball.x < 0 || ball.x > p.width) ball.xSpeed *= -1;
      if (ball.y < 0 || ball.y > p.height) ball.ySpeed *= -1;
    }
  };
};

new p5(ballsSketch);

let model1;
let rotationY = 0;
let targetRotationY = 0;
let scaleFactor = 1;
let targetScaleFactor = 1;
let positionX = 0;
let positionY = 0;
let positionZ = 0;
let targetPositionX = 0;
let targetPositionY = 0;
let targetPositionZ = 0;
let easing = 0.05;
let sound;

function preload() {
  model1 = loadModel("./assets/armorsup.obj", true);
  sound = loadSound("assets/lego-breaking.mp3");
}

function setup() {
  const canvasContainer = document.getElementById("canvas-container");
  const canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.parent(canvasContainer);

  document.querySelector("#btn0").addEventListener("click", () => {
    setModelView(14.1, 4.5, 0, 0, 0);
    sound.play();
  });
  document.querySelector("#btn1").addEventListener("click", () => {
    setModelView(15, 6, 0, -50, 0);
    sound.play();
  });
  document.querySelector("#btn2").addEventListener("click", () => {
    setModelView(15.5, 7, 0, -100, -100);
    sound.play();
  });
  document.querySelector("#btn3").addEventListener("click", () => {
    setModelView(16.2, 6.5, -150, 0, 0);
    sound.play();
  });
  document.querySelector("#btn4").addEventListener("click", () => {
    setModelView(16.2, 8.5, 250, -150, 0);
    sound.play();
  });
  document.querySelector("#btn5").addEventListener("click", () => {
    setModelView(17.2, 9, 250, 150, 0);
    sound.play();
  });
  document.querySelector("#btn6").addEventListener("click", () => {
    setModelView(18.5, 5.5, 150, 150, 0);
    sound.play();
  });
  document.querySelector("#btn7").addEventListener("click", () => {
    setModelView(18.6, 5.7, 150, -50, 0);
    sound.play();
  });
}

function draw() {
  if (document.getElementById("canvas-container").style.display === "none") {
    return;
  }

  background(255);

  ambientLight(8);
  directionalLight(255, 255, 255, 1, 1, -1);
  noStroke();

  if (targetRotationY === 1 || targetScaleFactor === 1) {
    rotationY = 14.1;
    scaleFactor = 4.5;
  } else {
    rotationY += (targetRotationY - rotationY) * easing;
    scaleFactor += (targetScaleFactor - scaleFactor) * easing;
    positionX += (targetPositionX - positionX) * easing;
    positionY += (targetPositionY - positionY) * easing;
    positionZ += (targetPositionZ - positionZ) * easing;
  }

  translate(positionX, positionY, positionZ);
  rotateY(rotationY);
  scale(scaleFactor);

  model(model1);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

document.getElementById("show-button").addEventListener("click", () => {
  const canvasContainer = document.querySelector(".canv");
  canvasContainer.style.display = "block";
  document.querySelector(".closeCan").addEventListener("click", () => {
    canvasContainer.style.display = "none";
  });
});

function setModelView(newRotationY, newScaleFactor, newPosX, newPosY, newPosZ) {
  targetRotationY = newRotationY;
  targetScaleFactor = newScaleFactor;
  targetPositionX = newPosX;
  targetPositionY = newPosY;
  targetPositionZ = newPosZ;
}

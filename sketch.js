/*
color Value
빨 255 0 0
핑크 255 192 203
마젠타 255 0 255
주황 255 127 0
코랄 255 128 80
노랑 255 255 0
엠버 255 191 0
피치 255 229 180
초록 0 255 0
틸 0 128 128
파랑 0 0 255
인디고 63 0 255
아쿠아 0 255 255
Turquoise 64 224 208
마룬 128 0 0
보라 128 0 128
바이올렛 127 0 255
브라운 150 75 0
베이지 245 245 220
검정 0 0 0
흰 255 255 255
회색 128 128 128
라일락 200 162 200

*/


let capture;
var color = [];
var colorRed, colorGreen, colorBlue;
let song = [];
let number = [];
var count;

function preload() {
  soundFormats('mp3', 'ogg');
  song[0] = loadSound('assets/82.mp3');
  song[1] = loadSound('assets/bomb.mp3');
  song[2] = loadSound('assets/fire.mp3');
  song[3] = loadSound('assets/gun.mp3');
  song[4] = loadSound('assets/hide.mp3');
  song[5] = loadSound('assets/hit.mp3');
  song[6] = loadSound('assets/jump.mp3');
  song[7] = loadSound('assets/kp.mp3');
  song[8] = loadSound('assets/laugh.mp3');
  song[9] = loadSound('assets/laugh2.mp3');
  song[10] = loadSound('assets/run.mp3');
  song[11] = loadSound('assets/scale.mp3');
  song[12] = loadSound('assets/spring.mp3');
  song[13] = loadSound('assets/spring2.mp3');
  song[14] = loadSound('assets/trumpet.mp3');
  song[15] = loadSound('assets/wowa.mp3');
}

function setup() {
  createCanvas(400, 400);
  capture = createCapture(VIDEO);
  count = parseInt(random(5));
  // console.log(count);
  switch (count) {
    // console.log(count);
    case 0:
      for (var i = 0; i < 16; i = i + 2) {
        for (var j = 0; j < 16; j++) {
          number[j] = song[i];
        }
      }
      break;
    case 1:
      for (var i = 0; i < 16; i++) {
        number[i] = song[i];
      }
      break;
    case 2:
      for (var i = 1; i < 16; i = i + 2) {
        for (var j = 0; j < 16; j++) {
          number[j] = song[i];
        }
      }
      break;
    case 3:
      for (var i = 8; i < 16; i++) {
        number[i] = song[i];
      }
      break;
    case 4:
      for (var i = 16; i > -1; i--) {
        number[i] = song[i];
      }
      break;
    case 5:
      for (var i = 7; i > -1; i--) {
        number[i] = song[i];
      }
      break;
  }
}

function draw() {
  console.log(count);
  background(255);
  color = capture.get(width / 2, height / 2);
  // console.log(color[0], color[1], color[2], color[3]);
  if (color[0] < 128) {
    colorRed = 0;
  }
  if (color[1] < 128) {
    colorGreen = 0;
  }
  if (color[2] < 128) {
    colorBlue = 0;
  }
  if (color[0] >= 128) {
    colorRed = 1;
  }
  if (color[1] >= 128) {
    colorGreen = 1;
  }
  if (color[2] >= 128) {
    colorBlue = 1;
  }

  if (colorRed === 0 && colorGreen === 0 && colorBlue === 0) {
    console.log("black");
    // if (number[0].isPlaying()) {
    //   number[0].stop();
    //   background(0, 0, 0);
    // } else {
    //   number[0].play();
    //   background(0, 0, 0);
    // }
  }
  if (colorRed === 0 && colorGreen === 0 && colorBlue === 1) {
    console.log("blue");
    if (number[1].isPlaying()) {
      number[1].stop();
      background(0, 0, 255);
    } else {
      number[1].play();
      background(0, 0, 255);
    }
  }
  if (colorRed === 0 && colorGreen === 1 && colorBlue === 0) {
    console.log("green");
    if (number[2].isPlaying()) {
      number[2].stop();
      background(0, 255, 0);
    } else {
      number[2].play();
      background(0, 255, 0);
    }
  }
  if (colorRed === 0 && colorGreen === 1 && colorBlue === 1) {
    if (number[3].isPlaying()) {
      number[3].stop();
      background(0, 255, 255);
    } else {
      number[3].play();
      background(0, 255, 255);
    }
  }
  if (colorRed === 1 && colorGreen === 0 && colorBlue === 0) {
    console.log("red");
    if (number[4].isPlaying()) {
      number[4].stop();
      background(255, 0, 0);
    } else {
      number[4].play();
      background(255, 0, 0);
    }
  }
  if (colorRed === 1 && colorGreen === 0 && colorBlue === 1) {
    if (number[5].isPlaying()) {
      number[5].stop();
      background(255, 0, 255);
    } else {
      number[5].play();
      background(255, 0, 255);
    }
  }
  if (colorRed === 1 && colorGreen === 1 && colorBlue === 0) {
    if (number[6].isPlaying()) {
      number[6].stop();
      background(255, 255, 0);
    } else {
      number[6].play();
      background(255, 255, 0);
    }
  }
  if (colorRed === 1 && colorGreen === 1 && colorBlue === 1) {
    if (number[7].isPlaying()) {
      number[7].stop();
      background(255, 255, 255);
    } else {
      number[7].play();
      background(255, 255, 255);
    }
  }
  // image(capture, 0, 0, 320, 240);
  // filter(INVERT);
}

noseX = 0;
noseY = 0;

function preload() {
    lipstick_image = loadImage("https://i.postimg.cc/Bv5nLh6R/lipstick-image.png");
}

function setup() {
    canvas = createCanvas(400,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,300);
    video.hide();
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log("Model Loaded");
}

function draw() {
    image(video,0,0,400,300);
    image(lipstick_image,noseX,noseY,45,30);
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x-20;
        noseY = results[0].pose.nose.y+20;
        console.log("Nose X = " + noseX);
        console.log("Nose Y = " + noseY);
    }
}

function take_snapshot(){
    save("my_filter_pic.png");
}
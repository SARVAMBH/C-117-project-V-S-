noseX = 0;
noseY = 0;

function preload() {
      mustache = loadImage("https://i.postimg.cc/8CPYst4g/PNGPIX-COM-Mustache-PNG-Image-4-removebg-preview.png");
}

function setup() {
    canvas = createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500,500);
    video.hide();
    PoseNet = ml5.poseNet(video , modelLoaded);
    PoseNet.on('pose' , gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function draw() {
   image(video,0,0,500,500);
   image(mustache,noseX,noseY,50,40);
}

function take_snapshot() {
    save('myFiltered_Image.png');
}

function gotPoses(results) {
    if (results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-25;
        noseY = results[0].pose.nose.y+7;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}
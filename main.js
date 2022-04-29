noseX=0;
noseY=0;
difference=0;
rightwristX=0;
leftwristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(500,450);
    canvas=createCanvas(500,450);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modeloaded);
    poseNet.on('pose',gotPose);
}

function modeloaded(){
    console.log("model loaded successfully")
}

function gotPose(result){
if(result.length>0){
    console.log("result");
    noseX=result[0].pose.nose.x;
    noseY=result[0].pose.nose.y;
    console.log("noseX="+noseX+"noseY="+noseY)
    leftwristX=result[0].pose.leftWrist.x;
    rightwristX=result[0].pose.rightWrist.x;

    difference=floor(leftwristX-rightwristX);
    console.log("leftwrist="+leftwristX+"rightwrist="+rightwristX+"difference="+difference);
}
}

function draw(){
    background("grey")
    document.getElementById("square_side").innerHTML="Width and Height of a Square will be "+difference +"px";
    fill("crimson");
    stroke("black");
    square(noseX,noseY,difference)
}
leftWristX=0;
rightWristY=0;
difference=0;
function preload(){

}
function draw(){
background("#FF0000");
fill("#0000FF");
stroke("#0000FF");
document.getElementById("size").innerHTML="width & height of the font will be"+difference;
textSize(difference);
text("AVANISH",150,200)
}
function setup(){
    video=createCapture(VIDEO);
    video.size(560,560);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses)
}
function modelLoaded(){
    console.log("poseNetIsInitialized");
}
function gotPoses(results){
    if(results.length>0){
        console.log("results");
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
    }
}
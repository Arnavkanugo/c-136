video="";
status1="";
function draw(){
image(video,0,0,480,380);
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();

}
function preload(){
video=createVideo('video.mp4');
video.hide();
}
function start(){
objectDetector=ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="status:detecting objects";
}
function modelLoaded(){
    console.log("modelLoaded");
    status1=true;
    video.loop();
    video.speed(1);
    video.volume(1);


    
}
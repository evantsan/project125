var difference = '';
var word = '';
function preload()
{

}
function setup()
{
    canvas = createCanvas(700,450);
    canvas.position(1000,200)
    video = createCapture(VIDEO)
    video.position(150,200);
    p = ml5.poseNet(video, modelLoaded);
    p.on('pose',gotPoses);
    
}

function modelLoaded()
{
    console.log('model has been loaded successfully')
}
function gotPoses(results)
{
    if(results.length > 0){
    leftwristX = results[0].pose.leftWrist.x;
    rightwristX = results[0].pose.rightWrist.x;
    difference = floor(leftwristX-rightwristX);
    console.log("leftwristx = "+leftwristX+" rightwristx = "+rightwristX+" difference = "+difference);
    
    }
}
function draw()
{
    
    word = document.getElementById('word').value
    
    textSize(difference)
    
    document.getElementById('fons').innerHTML = difference+"px"
    clear();
    text(word, 100, 250);
    
    
    
}

if(word == '')
    {
        clear();
    }




     
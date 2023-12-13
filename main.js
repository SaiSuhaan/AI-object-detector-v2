video = "";

function setup()
{
    canvas = createCanvas(450, 350);
    canvas.center()
    video = createCapture(VIDEO);
    video.size(450, 350);
    video.hide();
    objectdetected = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status: DETECTING OBJECTS";
}

function modelLoaded()
{
    console.log("Model has loaded");
    status = true;
}

function draw()
{
    image(video , 0, 0, 450, 350);
}
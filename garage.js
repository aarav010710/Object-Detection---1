function preload()
{
    img = loadImage('garage.jpg');
}

function setup()
{
    canvas = createCanvas(380, 380);
    canvas.center();
}

function draw()
{
    image(img, 0,0, 380, 380);
}

function backg()
{
    window.location = "home.html";
}
function preload()
{
    img = loadImage('bedroom.jpg');
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

function backb()
{
    window.location = "home.html";
}
function preload()
{
    img = loadImage('tv.jpeg');
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

function backt()
{
    window.location = "home.html";
}
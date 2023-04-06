function setup(){
    createCanvas (500, 500);
    background ("#ecc162");
}
function preload(){
    img = loadImage("Imagen1.png");
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image (video, 50, 20, 400, 300);
    image (img, 120, 210, 350, 300,50);
    fill("#cf5a5a");
    circle (25, 25, 40);
    circle (25, 250, 40);
    circle (25, 475, 40);
    circle (260, 25, 40);
    circle (475, 25, 40);
    circle (475, 250, 40);
    circle (475, 475, 40);
}

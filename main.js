function preload(){

}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    
}

function draw(){

    image(video,50,50,550,390);

    fill(0,0,255);
    stroke(0,0,255);
    rect(30, 20, 55, 55, 20);
    rect(560, 20, 55, 55, 20);
    rect(560, 400, 55, 55, 20);
    rect(30, 400, 55, 55, 20);

    fill(255,0,0);
    stroke(255,0,0);
    rect(85, 20, 475, 55, 20);
    rect(560, 75, 55, 325, 20);
    rect(85, 400, 475, 55, 20);
    rect(30, 75, 55, 325, 20);
    
}

function take_snapshot(){
    save('student_name.png');
}

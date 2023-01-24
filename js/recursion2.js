let brown1;
let brown2;

function setup(){
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    noLoop();
    strokeJoin(ROUND); //the shape of the joins between branches
    brown1 = color('#edece8');
    brown2 = color('#ffffff');
    slider = createSlider(10, 90, 45); //changes the shape of the tree
    slider.position(10, windowHeight - 40);
    slider.style("width", "200px");
    slider.input(draw);
}
function draw(){
    background(10);
    resetMatrix(); //draws from starting point at every value of the slider
    translate(width/2, height);
    branch(250, 1);
    resetMatrix();
    translate(width * 0.2, height - 50);
    branch(200, 0.5);
    resetMatrix();
    translate(width * 0.75, height - 100);
    branch(200, 0.4);
    resetMatrix();
    translate(width * 0.6, height - 150);
    branch(200, 0.3);
    resetMatrix();
    translate(width * 0.45, height - 80);
    branch(150, 0.2);
    resetMatrix();
    translate(width * 0.3, height - 100);
    branch(140, 0.1);
    resetMatrix();
    translate(width * 0.9, height - 100);
    branch(130, 0.1);
    resetMatrix();
    translate(width * 0.1, height - 100);
    branch(120, 0.1);
    resetMatrix();
    translate(width * 0.35, height - 200);
    branch(150, 0.1);
    resetMatrix();
    translate(width * 0.85, height - 175);
    branch(150, 0.1);
    resetMatrix();
    translate(width * 0.25, height - 150);
    branch(150, 0.1);
    resetMatrix();
    translate(width * 0.15, height - 50);
    branch(150, 0.1);
    resetMatrix();
    translate(width * 0.65, height - 75);
    branch(150, 0.1);
    resetMatrix();
    translate(width * 0.55, height - 220);
    branch(150, 0.1);
    resetMatrix();
    translate(width * 0.95, height - 200);
    branch(150, 0.1);


}
function branch(len, alpha){ //length of branch to draw
    let maxAngle = slider.value();
    strokeWeight(map(len, 20, 250, 1, 20));
    // stroke(lerpColor(brown1, brown2, random(0.3, 0.7)));
    stroke (50, 255 * alpha);
    line(0,0,0,-len);
    translate(0, -len); //changes the starting point for each line
    if(len > 20){
        if(len < 50){
            // //leaves
            let r = 400 + random (-0, 0);
            let g = 400 + random (-0, 0);
            let b = 400 + random (-0, 0);
            fill(r,g,b,10 * alpha);
            noStroke();
            let size = 15;
            // triangle(-size/2, 0, size/2, 0, 0, -size);
            beginShape();
            let radius = random(10, 100);
            for(let i = 45; i < 450; i++){
                let x = radius * cos(i);
                let y = radius * sin(i);
                vertex(x, y);
            }
            for(let i = 135; i > 45; i--){
                let x = radius * cos(i);
                let y = radius * sin(-i);
                vertex(x, y);
            }
            endShape(CLOSE);
        } else {
            //branch 1
            push(); //push and pop saves the current context
            rotate(random(-maxAngle, maxAngle)); //conrolled randomsed angle
            branch(len * 0.2, alpha); //aprox 2 thirds
            pop();
            //branch 2
            push(); 
            rotate(random(-maxAngle, maxAngle)); 
            branch(len * 0.80, alpha);
            pop();
            //branch 3
            push();
            rotate(random(-maxAngle, maxAngle));
            branch(len * 0.7, alpha);
            pop();
            //branch 4
            push();
            rotate(random(-maxAngle, maxAngle));
            branch(len * 0.4, alpha);
            pop();
            //branch 5
            push();
            rotate(random(-maxAngle, maxAngle));
            branch(len * 0.4, alpha);
            pop();
            //branch 6
            push();
            rotate(random(-maxAngle, maxAngle));
            branch(len * 0.3, alpha);
            pop();
            //branch 7
            push();
            rotate(random(-maxAngle, maxAngle));
            branch(len * 0.1, alpha);
            pop();
            //branch 8
            push();
            rotate(random(-maxAngle, maxAngle));
            branch(len * 0.5, alpha);
            pop();
        }
        
        
    }
}

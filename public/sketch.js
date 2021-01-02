let mode = 'NONE';
let eraser = false;
let noStrokeOption = true;
let size = 5;
let color = 'black';
let bg = 'white';
let f_path = [];
const paths = [];
let currentPath = [];
function toggleBrush(){
	eraser = false;
	if(!(mode == 'BRUSH')){
		mode = 'BRUSH';
	}
}
function toggleFigure(){
	eraser = false;
	if(!(mode == 'FIGURE')){
		mode = 'FIGURE';
	}
}

function setup() {
  createCanvas(windowWidth - 5, windowHeight - 5);
  background(bg);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(220);
}

function draw(){
	if(!eraser){
		color = document.getElementById('colorpicker').value || color;
	}
	if(eraser){
		color = bg;
	}
	if(mode == 'FIGURE'){
		if(mouseIsPressed){
			noStroke();
			fill(color);
			const point = {
				x: mouseX,
				y: mouseY
			};
			f_path.push(point);
			beginShape();
			f_path.forEach(point => {
				vertex(point.x, point.y);
			});
			endShape();
		}
	}



	if(mode == 'BRUSH'){
		noFill();
		//fill(color);
                if (mouseIsPressed) {
		        const point = {
		            x: mouseX,
		            y: mouseY,
		            color: color,
		            weight: size
		        };
	        currentPath.push(point);
    		}
		 paths.forEach(path => {
    		    beginShape();
		        path.forEach(point => {
		            stroke(point.color);
		            strokeWeight(point.weight);
		            vertex(point.x, point.y);
		        });
	        endShape();
		    });
	}
}
function mousePressed(){
	if(mode == 'FIGURE'){
		f_path = [];
	}
	if(mode == 'BRUSH'){
		currentPath = [];
	    paths.push(currentPath);
	}
}

function increaseSize(){
	size += 10;
}
function decreaseSize(){
	if(size > 0){
		size -= 10;
	}
	else{
		size = 2;
	}
}
function colorpicker(){
	document.getElementById('colorpicker').click();
}
function eraseToggle(){
	eraser = true;
}

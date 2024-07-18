let vista1;
let vista2;
let vista3;
let vista4;
let vista5;
let vista6;

function preload() {
	vista1 = loadImage("Vista x64 photos/VISTA_3.jpg");
	vista2 = loadImage("Vista x64 photos/VISTA_4.jpg");
	vista3 = loadImage("Vista x64 photos/VISTA_5.jpg");
	vista4 = loadImage("Vista x64 photos/VISTA_6.jpg");
	vista5 = loadImage("Vista x64 photos/VISTA_1.jpg");
	vista6 = loadImage("Vista x64 photos/VISTA_2.jpg");
}


function setup() {
	let r = random(0,360);
	createCanvas(700, 500);
	colorMode(HSL, 360, 100,100);
	background(r, 50, 75);
	imageMode(CENTER);
	let imagesBand = [vista1, vista2, vista3, vista4, vista5, vista6];
	image(random(imagesBand), width/2, height/2, width/2, height/2)
}



function draw() {
	let w = random(1, 4);
	let x = random (0, width);
	let y = random(0, height);
	let filler = random(0, 360);
	strokeWeight(1);
	fill(filler, 70,50);
	rect(x,y,w);
	if(frameCount === 60*64){
		noLoop();
		//saveCanvas("vistaP5", "jpg")
}
}
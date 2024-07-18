//variables
let imageBack1; 
let imageBack2; 
let imageBack3;
let imageBack4;
let imageBack5;
let imageOver1;
let imageOver2;
let imageOver3;
let imageOver4;
let pixel1;
let pixel2;
let pixel3;
let pixel4;
let pixel5;


function preload() {
	imageBack1 = loadImage("Photos Paris/PARIS_9.jpeg");
	imageBack2 = loadImage("Photos Paris/PARIS_7.jpeg");
	imageBack3 = loadImage("Photos Paris/PARIS_6.jpeg");
	imageBack4 = loadImage("Photos Paris/PARIS_5.jpeg");
	imageOver1 = loadImage("Photos Paris/PARIS_8.jpg");
	imageOver2 = loadImage("Photos Paris/PARIS_4.jpg");
	imageOver3 = loadImage("Photos Paris/PARIS_3.jpg");
	imageOver4 = loadImage("Photos Paris/PARIS_2.jpg");
	imageOver5 = loadImage("Photos Paris/PARIS_1.jpg");
	img = loadImage("Photos Paris/PARIS_1.jpg");

}

function setup() {
	noLoop();
	createCanvas(780,520);
	let imagesBackground = [imageBack1, imageBack2, imageBack3, imageBack4];
	let imagesOverlay = [imageOver1, imageOver2, imageOver3, imageOver4, imageOver5];
	background(random(imagesBackground));
	let selectedImage = random(imagesOverlay);
	
	for (let x = 0; x < 780; x += 10) {
		for ( let k = 0; k < 520; k += 10) {
			let pixelColor = selectedImage.get(x,k);
			fill(pixelColor);
			rect(x, k, 6);
	
		}
	}
}



//Create a reference for canvas 
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
//Give specific height and width to the car image
background_image = "parkingLot.jpg";
car_image = "car2.png";
carheight = 100;
carwidth = 75;
//Set initial position for a car image.
carX = 5;
carY = 225;
function add() {
	//upload car, and background images on the canvas.
	background_imagetag = new Image();
	background_imagetag.onload = uploadBackground;
	background_imagetag.src = background_image;

	car_imagetag = new Image();
	car_imagetag.onload = uploadgreencar;
	car_imagetag.src = car_image;
};

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imagetag, 0, 0, canvas.width, canvas.height);
};

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(car_imagetag, carX, carY, carwidth, carheight);
	
};


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(carY > 0){
		carY -= 10;
		uploadBackground();
		uploadgreencar();
	} 
}

function down()
{
	//Define function to move the car downward
		if(carY < 300){
		carY += 10;
		uploadBackground();
		uploadgreencar();
	} 
}

function left()
{
	//Define function to move the car left side
	if(carX > 0){
		carX -= 10;
		uploadBackground();
		uploadgreencar();
	} 
}

function right()
{
	//Define function to move the car right side
	if(carX < 725){
		carX += 10;
		uploadBackground();
		uploadgreencar();
	} 
}

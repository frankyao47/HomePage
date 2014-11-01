var imageName = "newbee";

function mouseIn(event){ 
	var image = document.getElementById(imageName);

	var mouseX = event.clientX; 
  	var mouseY = event.clientY;
	
	image.style.left = mouseX + "px";
	image.style.top = mouseY + "px";
}

var imageName = "newbee";

function mouseIn(event){ 
	var image = document.getElementById(imageName);

	var mouseX = event.clientX; 
	var mouseY = event.clientY;
	
	image.style.left = mouseX + "px";
	image.style.top = mouseY + "px";
}

function moveBeeLoop(){
	//document.write("hello");
	setInterval("moveBee()", 200); //循环执行
	//setTimeout('moveBee(event)', 100); //等待100ms，然后执行函数
}

function moveBee(){
	var image = document.getElementById(imageName);
	
	var offsetX = Math.round(Math.random()) * 4 - 2; //{-2, 2}
	var offsetY = Math.round(Math.random()) * 4 - 2;
	
	var leftStr = image.style.left;
	var topStr = image.style.top;
	var originX = parseInt(leftStr.substr(0, leftStr.length - 2));
	var originY = parseInt(topStr.substr(0, topStr.length - 2));

	image.style.left = originX + offsetX + "px";
	image.style.top = originY + offsetY +  "px";

	//document.write(leftStr + " " + topStr + " " + image.style.left + " " + image.style.top);
}

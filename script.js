window.onload = pageReady;

function pageReady() {
	var sunMove = document.getElementById("sun");
	var skyWrapper = document.getElementById("sky-wrapper");
	
	skyWrapper.addEventListener("click",getPosition,false);
	
	function getPosition(e) {
		var rect = skyWrapper.getBoundingClientRect();
		
		var xPosition = e.clientX - rect.left;
		var yPosition = e.clientY - rect.top;
		console.log(xPosition,yPosition);
		
		sunMove.style.left = xPosition + "px";
		sunMove.style.top = yPosition + "px";
	}

	
	
	
	
} //END OF pageReady FUNCTION
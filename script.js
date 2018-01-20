window.onload = pageReady;

function pageReady() {
	var sunMove = document.getElementById("sun");
	var skyWrapper = document.getElementById("sky-wrapper");
	skyWrapper.addEventListener("click",getPosition,false);
	
	function getPosition(e) {
		var rect = skyWrapper.getBoundingClientRect();//get parent position
		//find the exact location the target needs to move to
		var xPosition = e.clientX - rect.left - sunMove.clientWidth/2;
		var yPosition = e.clientY - rect.top - sunMove.clientHeight/2;
		sunMove.style.left = xPosition + "px";
		sunMove.style.top = yPosition + "px";
		
		if (yPosition > 55 && yPosition <= 190) {
			skyWrapper.style.backgroundImage = 'linear-gradient(to bottom, #632b6c, #f16053, #fec051 , #fff)';
			sunMove.style.backgroundColor = '#fd6051';
			sunMove.style.boxShadow = '0 0 4em 4em #fd6051';
		} else if (yPosition > 190) {
			skyWrapper.style.backgroundImage = 'linear-gradient(to bottom, #392033, #c86b98, #f09f9c , #fff)';
			sunMove.style.backgroundColor = '#fff';
			sunMove.style.boxShadow = '0 0 1.5em 1em #fff';
		} else {
			skyWrapper.style.backgroundImage = 'linear-gradient(to bottom, #e2f2ed , #fff)';
			sunMove.style.backgroundColor = '#fff';
			sunMove.style.boxShadow = '0 0 1.5em 1em #fff';
		}
	}
	
} //end pageReady function
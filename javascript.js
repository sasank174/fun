var text = document.getElementById("particles-js");

		var val = document.URL;
		var url = new URL(val);
		var c = url.searchParams.get("name");

		function ran() {
			return Math.random() * (3.5 - (-3.5) + 1) + (-3.5);
		}

		for (var i = 0; i < c.length; i++) {
			var createA = document.createElement('h1');
			var createAText = document.createTextNode(c.charAt(i));
			createA.setAttribute('data-depth', ran());
			createA.setAttribute('class', "test");
			createA.appendChild(createAText);
			text.appendChild(createA);
		}

		var myElement = document.querySelector('.test');

		function getTranslateX() {
			var style = window.getComputedStyle(myElement);
			var matrix = new WebKitCSSMatrix(style.transform);
			// console.log('translateX: ', matrix.m41);
			return matrix.m41;
		}

		function getTranslateY() {
			var style = window.getComputedStyle(myElement);
			var matrix = new WebKitCSSMatrix(style.transform);
			// console.log('translateY: ', matrix.m42);
			return matrix.m42;
		}

		var myVar = setInterval(myTimer, 3000);
		
		function myTimer() {
			var myVar = setInterval(myTimer, 1000);
			if (Math.floor(getTranslateX()) == 0 && Math.floor(getTranslateY()) == 0) {
				clearInterval(myVar);
				document.querySelector(".complete").style.display = "block";
			}
		}
const navbar = document.getElementById('main-navbar');
	
		window.addEventListener("scroll", function() {
			let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
			if (currentScroll > 0) {
				navbar.style.top = "0"; // Show navbar when not at the top
			} else {
				navbar.style.top = "-100px"; // Hide navbar at the top
			}
		}, false);
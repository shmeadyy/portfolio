$(window).load(function() {
	/* get window size */
	var windowSize = $(window);

	windowSize.scroll(function() {

		/* Get distance from the top */
		var top = windowSize.scrollTop();

		/* If distance from the top is bigger than 50px, than change the top value from -50px to 0px  (make it appear)*/
		if(top > 560) {
			$(".stickymenu_wrap").css("top","0");
		}

		/* If distance from the top is equals 0, than change the top valeu from 0 to -50px (hide it)*/
		if(top < 560) {
			$(".stickymenu_wrap").css("top","-80px");
		}

		/* Show the top value on the p element within the .container */
		$('.container p').text(top);
	});

	$('#buttonMenu').click(function(){
		$('#divMenu').toggle();
	});

	$('#buttonMenuHidden').click(function(){
		$('#divMenuHidden').toggle();
	})
});
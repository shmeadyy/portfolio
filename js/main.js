$(document).ready(function(){
	$('.mobile-menu ul').hide();

	$('.mobile-menu h3').click(function(){
		$('.mobile-menu ul').slideToggle("slow");
	})
})
$(document).ready(function(){ 
	targets_positions = []; // initialize empty array to be filled with targets position
	i = 0;
	$(".target_element").each(function (index) {
		targets_positions[i] = $(this).offset().top; //fill array with targets positions
		i++;
	})

	$("#next_button").click(function(){
		for (i=1; i<=targets_positions.length; i++) {
			// understand in which you are at the moment of the click
			if ($(window).scrollTop() < targets_positions[i]) {
				position = i;
				break;
			}	
		}
		// smooth scrolling to next div
	    $('html,body').animate({scrollTop: targets_positions[position]}, 1000);
	})
})
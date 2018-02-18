function createHexColor(red_min=0,red_max=255,green_min=0,green_max=255,blue_min=0,blue_max=255){
	var hex_color="#";
	
	var red=Math.ceil(Math.random()*(red_max-red_min)+red_min);
	var green=Math.ceil(Math.random()*(green_max-green_min)+green_min);
	var blue=Math.ceil(Math.random()*(blue_max-blue_min)+blue_min);

	hex_color=hex_color.concat((red).toString(16));
	hex_color=hex_color.concat((green).toString(16));
	hex_color=hex_color.concat((blue).toString(16));
	
	return hex_color;
}

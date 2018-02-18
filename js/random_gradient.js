function createBackground(red_min=10,red_max=60, green_min=30,green_max=90,blue_min=60,blue_max	=120,modify=['0','0','0'],mode='random',bg_preload_color="#ababcc"){
	var color_list=[];

	color_list[0]=createHexColor(red_min, red_max, green_min, green_max, blue_min, blue_max);
	
	var rgb=[
		parseInt(color_list[0].substring(1,2),16),
                parseInt(color_list[0].substring(3,4), 16),
                parseInt(color_list[0].substring(5,6), 16)]
	var rgb_min=[
		parseInt(color_list[0].substring(1,2),16),
                parseInt(color_list[0].substring(3,4), 16),
                parseInt(color_list[0].substring(5,6), 16)]
	var rgb_max=[
		parseInt(color_list[0].substring(1,2),16),
                parseInt(color_list[0].substring(3,4), 16),
                parseInt(color_list[0].substring(5,6), 16)]

	if (mode=='exact'){
		for (var i = 0; i<3;i++){ 
			if (modify[i].substring(0,1)==='+'){
				console.log(modify[i].substring(0,1)==='+');
				console.log(modify[i].substring(0,1));
				console.log("positive test passed");
				rgb_min[i]=rgb[i]+rgb[i]*modify[i].substring(1,modify[i].length);
				rgb_max[i]=rgb[i]+rgb[i]*modify[i].substring(1,modify[i].length);
			}else if(modify[i].substring(0,1)==='-'){
				console.log(modify[i].substring(0,1)==='-');
				console.log(modify[i].substring(0,1));
				console.log("negative test passed");
				rgb_min[i]=rgb[i]-rgb[i]*modify[i].substring(1,modify[i].length);
				rgb_max[i]=rgb[i]-rgb[i]*modify[i].substring(1,modify[i].length);
			}else {
				console.log(modify[i].substring(0,1));
				console.log("leftover");
				rgb_min[i]=rgb[i]-rgb[i]*modify[i].substring(0,modify[i].length);
				rgb_max[i]=rgb[i]+rgb[i]*modify[i].substring(0,modify[i].length);
			}
		}
		color_list[1]=createHexColor(red_min, red_max, green_min, green_max, blue_min, blue_max);	
		color_list[1]=createHexColor(rgb_min[0], rgb_max[0], rgb_min[1], rgb_max[1], rgb_min[2],rgb_max[2]);	
	}
	if (mode=='random'){
		for (var i = 0; i<3;i++){ 
			if (modify[i].substring(0,1)=='+'){
				rgb_min[i]=rgb[i];
				rgb_max[i]=rgb[i]+rgb[i]*modify[i].substring(1,modify[i].length);
			} else if(modify[i].substring(0,1)=='-'){
				rgb_min[i]=rgb[i]-rgb[i]*modify[i].substring(1,modify[i].length);
				rgb_max[i]=rgb[i];
			} else {
				rgb_min[i]=rgb[i]-rgb[i]*modify[i].substring(0,modify[i].length);
				rgb_max[i]=rgb[i]+rgb[i]*modify[i].substring(0,modify[i].length);
			}
		}
		color_list[1]=createHexColor(rgb_min[0], rgb_max[0], rgb_min[1], rgb_max[1], rgb_min[2],rgb_max[2]);	
	}
	
	var backgroundColorString=bg_preload_color;
	var backgroundImageString_a=("-webkit linear-gradient(left, ").concat(color_list[0],", ",color_list[1],")");
	var backgroundImageString_b=("linear-gradient(to right,").concat(color_list[0],", ",color_list[1],")");
	var backgroundImageString_c=('url("images/linen.jpg")');
	
	background = new Array();
	background['a']=backgroundImageString_a
	background['b']=backgroundImageString_b
	background['c']=backgroundImageString_c
	background['d']=backgroundColorString

	return background;
}
/*
var background_image_string=createBackground(141,171,153,171,188,204,modify=['+0.1','+0.1','+0.1'],mode='exact');
var background_image_string=createBackground(160,160,180,180,160,160,modify=['+0.2','-0.52','+0.1'],mode='random');
*/
var background_image_string=createBackground(100,120,120,130,120,130,modify=['+0.3','+0.3','+0.3'],mode='random');

document.getElementById("layer").style.backgroundImage=background_image_string['a'];
document.getElementById("layer").style.backgroundImage=background_image_string['b'];
document.getElementById("background").style.backgroundImage=background_image_string['c'];
document.getElementById("layer").style.backgroundColor=background_image_string['d'];

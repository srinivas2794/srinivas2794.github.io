(function(window){
	console.log('key-frame-animation');
	
	var cssArray = [] , 
	animationDirection = "loop" ,  // forward
	cssString = '',
	animName = "gladysAnim" ,
	imageName = "sarah_00",
	frameNumber =  48 ,
	firstImageNo = 932 ,
	cssLine ="";
	var increment = Number((100/(frameNumber-1)).toFixed(2)),
	incrementLoop = Number((50/(frameNumber-1)).toFixed(2)),
	iterations = frameNumber + 1  ,
	iterationsLoop = 2*frameNumber   ,
	keyNumber = 0 ;
	var index ="",
	pathA = "scene-2/idle/sarah/",
	loopindex = "";
	
	if(animationDirection == "forward"){
		for(var i = 1 ; i < iterations ; i++ )
		{
			
			if(i > 9){
				index = "" + i ;

			}else{
				index = "0" + i;
			
			}
	
			
			cssLine = keyNumber.toFixed(2)+"%{ background-image: url(../assets/images/character-animations/"+pathA+imageName+loop+".png) } ";
			cssString = cssString.concat(cssLine);
			keyNumber = keyNumber + increment ;
		}
	}else if(animationDirection == "loop"){
		for(var i = 1 ; i < iterationsLoop ; i++ )
		{
			
			if((i + firstImageNo - 1) > 9){
				index = "" + (i + firstImageNo - 1) ;
			}else{
				index = "0" + (i + firstImageNo - 1);
			}
			
			if((iterationsLoop - i + firstImageNo - 1) > 9){
				loopindex = "" + (iterationsLoop - i + firstImageNo - 1) ;
			}else{
				loopindex = "0" + (iterationsLoop - i + firstImageNo - 1) ;
			}
		
	/*			
				
				if((i + firstImageNo - 1) > 99){
					index = "" + (i + firstImageNo - 1) ;
				}else{
					index = "0" + (i + firstImageNo - 1) ;
				}
				
				if((iterationsLoop - i + firstImageNo - 1) > 99){
					loopindex = "0" + (iterationsLoop - i + firstImageNo - 1) ;
				}else{
					loopindex = "" + (iterationsLoop - i + firstImageNo - 1) ;
				}
		
			*/
			
			
			
			
			loopindex = "" + (iterationsLoop - i + firstImageNo - 1) ;
			
			
			if(i < iterations){
				cssLine = keyNumber.toFixed(2)+"%{ background-image: url(../assets/images/character-animations/"+pathA+imageName+index+".png) } ";
				cssString = cssString.concat(cssLine);
				keyNumber = keyNumber + incrementLoop ;	
			}else{
				cssLine = keyNumber.toFixed(2)+"%{ background-image: url(../assets/images/character-animations/"+pathA+imageName+loopindex+".png) } ";
				cssString = cssString.concat(cssLine);
				keyNumber = keyNumber + incrementLoop ;	
			}

		}
	}

	console.log(cssString);
	
})(window);



/*
 * 
 * url(../assets/images/character-animations/scene-0/idle/gladys/Gladys_waiting_00170.png)
 * 

../assets/images/character-animations/scene-0/idle/sarah/saraha_walking_00049.png
SarahSceneTwo{
	0%{      background-image: url(../assets/images/sarah_00126.png) }
		1.5%{   background-image: url(../assets/images/sarah_00127.png)  }
			3%{   background-image: url(../assets/images/sarah_00128.png)   } 
}

*/
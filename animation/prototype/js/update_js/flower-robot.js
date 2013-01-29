	
	$(document).ready(function(){
			
			if($("#container2").children().length > 0)
			{
			return false;
			}
			
			$("<div id='wrapper'></div>").css({
				 "bottom": "50%",
		         "right" :  "50%",
		         "position": "fixed"
			

		    }).appendTo(document.body);
			$("<div id='container'></div>").css({
				 "left"     : "50%",
          		 "position" : "relative",
        		 "top"      : "50%;",
				 "margin-top" :  "15%"
			}).appendTo("#wrapper");

			$("#container,#wrapper").css({"height":"500px","width":"450px"})
			$("#container2").appendTo("#container");
			$("<img id = 'body2'/>").attr("src","images/flower/flower1.png").css({
					"position"    : "absolute",
					"z-index"     : "1",
					"top": "100px",
					"left": "30px"
			}).appendTo("#container2");
			$("<div id = 'show-item-div'></div>").css({
					"background"  : "url('images/avatar/sam.jpg') no-repeat",
					"position"    : "absolute",
					"background-size": "85% 85%",
					"background-position" : "center",
					"margin-left"		  : "100px",
					"margin-top"		  : "39%",
					"opacity"	  : "1.0",
					
					
			}).appendTo("#container2");
			$("<img id = 'show-item-img'/>").attr
			("src","images/flower/tv1.png").appendTo("#show-item-div");
			do_animate();

		
	});


function do_animate()
{
	$('#show-item-img').attr({'src': 'images/flower/tv1.png'}).animate({opacity: 1},190 ).animate({opacity: 1}, 30, function() {
			$('#show-item-img').attr({'src': 'images/flower/tv1.png'}).animate({opacity: 1},190 ).animate({opacity: 1}, 30, function() {
		$('#body2').attr({'src': 'images/flower/flower1.png'}).animate({opacity: 1},30 ).animate({opacity: 1}, 30);
			$('#show-item-img').attr({'src': 'images/flower/tv1.png'}).animate({opacity: 1},190 ).animate({opacity: 1}, 30, function() {
			$('#body2').attr({'src': 'images/flower/flower2.png'}).animate({opacity: 1},30 ).animate({opacity: 1}, 30);
				$('#show-item-img').attr({'src': 'images/flower/tv1.png'}).animate({opacity: 1},190 ).animate({opacity: 1}, 30, function() {
				$('#body2').attr({'src': 'images/flower/flower3.png'}).animate({opacity: 1},30 ).animate({opacity: 1}, 30);
					$('#show-item-img').attr({'src': 'images/flower/tv1.png'}).animate({opacity: 1},190 ).animate({opacity: 1}, 30, function() {
					$('#body2').attr({'src': 'images/flower/flower4.png'}).animate({opacity: 1},30 ).animate({opacity: 1}, 30);		
						$('#show-item-img').attr({'src': 'images/flower/tv1.png'}).animate({opacity: 1},190 ).animate({opacity: 1}, 30, function() {
						$('#body2').attr({'src': 'images/flower/flower5.png'}).animate({opacity: 1},30 ).animate({opacity: 1}, 30);
							$('#show-item-img').attr({'src': 'images/flower/tv1.png'}).animate({opacity: 1},190 ).animate({opacity: 1}, 30, function() {
							$('#body2').attr({'src': 'images/flower/flower6.png'}).animate({opacity: 1},30 ).animate({opacity: 1}, 30);
								$('#show-item-img').attr({'src': 'images/flower/tv1.png'}).animate({opacity: 1},190 ).animate({opacity: 1}, 30, function() {
								$('#body2').attr({'src': 'images/flower/flower7.png'}).animate({opacity: 1},30 ).animate({opacity: 1}, 30);
									$('#show-item-img').attr({'src': 'images/flower/tv1.png'}).animate({opacity: 1},190 ).animate({opacity: 1}, 30, function() {
									$('#body2').attr({'src': 'images/flower/flower8.png'}).animate({opacity: 1},30 ).animate({opacity: 1}, 30);
										
									
	
										
									});
								});
							});
						});
					});
				});
			});	
		});
	});								
}
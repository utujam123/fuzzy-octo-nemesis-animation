	
	$(document).ready(function(){
		$("#start-anim").click(function(){
			if($("#container2").children().length > 0)
			{
			return false;
			}
			$("<img id = 'body2'/>").attr("src","images/flower/flower1.png").css({
					"position"    : "relative",
					"z-index"     : "1",
					"margin-left" : "-10px",
					"margin-top"  : "-10px",
			}).appendTo("#container2");
			$("<div id = 'show-item-div'></div>").css({
					"background"  : "url('new/animation/images/robot beer/sam.jpg') no-repeat",
					"position"	  : "absolute",
					"left"		  : "415px",
					"top"		  : "175px",
					"opacity"	  : "1.0",
					"background-size": "85% 85%",
					"background-position" : "center"
			}).appendTo("#container2");
			$("<img id = 'show-item-img'/>").attr
			("src","images/flower/tv1.png").appendTo("#show-item-div");
			do_animate();

		});


		$("#restart-anim").click(function(){
			$("#body2").remove();
			$("#show-item-img").remove();
			$("#show-item-div").remove();
		});
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
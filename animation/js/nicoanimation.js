

function animatee2()
{
	$(document).ready(function(){
		$("#start-anim").click(function(){
			if($("#container2").children().length == 2)
			{
				return FALSE;
			}
			$("<img id = 'body2'></img>").attr("src","images/flower/flower1.png").css({
					"position"    : "relative",
					"z-index"     : "1",
					"margin-left" : "-10px",
					"margin-top"  : "-10px",
			}).appendTo("#container2");
			$("<img id = 'show-item-img'></img>").attr
			("src","images/flower/tv1.png").appendTo("#container2").css({
					"position"	  : "absolute",
					"left"		  : "410px",
					"top"		  : "118px",
					"opacity"	  : "1.0",
					"background-position" : "center"
			});
			do_animate();

		});
	});
}

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
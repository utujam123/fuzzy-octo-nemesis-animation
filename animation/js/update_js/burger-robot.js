	
	$(document).ready(function(){
		$("#start-anim").click(function(){
			if($("#container2").children().length > 0)
			{
			return false;
			}
			$("#container2").css({"margin-left":"350px"});
			$("<img id = 'body2'/>").attr("src","images/robotburger/roboburger.png").css({
					"position"    : "relative",
					"z-index"     : "1",
					"margin-left" : "180px",
					"margin-top"  : "-118px"
			}).appendTo("#container2");
			$("<div id = 'show-item-div'></div>").css({
					"background"  : "url('new/animation/images/robot beer/sam.jpg') no-repeat",
					"position"	  : "absolute",
					"left"		  : "600px",
					"top"		  : "69px",
					"opacity"	  : "1.0",
					"background-size": "85% 85%",
					"background-position" : "center"
			}).appendTo("#container2");
			$("<img id = 'show-item-img'/>").attr("src","images/robotburger/tv1.png").appendTo("#show-item-div");
			$("<img id = 'show-item-img1'/>").css({
					"position" 	  : "absolute",
					"right"        : "360px",
					"top"         : "30px"
			}).appendTo("#container2");
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
	$('#show-item-img').attr({'src': 'images/robotburger/tv1.png'}).animate({opacity: 1},190 ).animate({opacity: 1}, 100, function() {
		$('#show-item-img').attr({'src': 'images/robotburger/tv1.png'}).animate({opacity: 1},190 ).animate({opacity: 1}, 100, function() {
		$('#body2').attr({'src': 'images/robotburger/roboburger.png'}).animate({opacity: 1},300 ).animate({opacity: 1}, 100);
			$('#show-item-img').attr({'src': 'images/robotburger/tv1.png'}).animate({opacity: 1},190 ).animate({opacity: 1}, 100, function() {
			$('#body2').attr({'src': 'images/robotburger/roboburger2.png'}).animate({opacity: 1},300 ).animate({opacity: 1}, 100);
				$('#show-item-img').attr({'src': 'images/robotburger/tv1.png'}).animate({opacity: 1},190 ).animate({opacity: 1}, 500, function() {
				$('#body2').attr({'src': 'images/robotburger/roboburger3.png'}).animate({opacity: 1},300 ).animate({opacity: 1}, 500);
					$('#show-item-img').attr({'src': 'images/robotburger/tv1.png'}).animate({opacity: 1},190 ).animate({opacity: 1}, 500, function() {
					$('#body2').attr({'src': 'images/robotburger/roboburger4.png'}).animate({opacity: 1},300 ).animate({opacity: 1}, 500);		
						$('#show-item-img').attr({'src': 'images/robotburger/tv1.png'}).animate({opacity: 1},190 ).animate({opacity: 1}, 500, function() {
						$('#body2').attr({'src': 'images/robotburger/roboburger5.png'}).animate({opacity: 1},300 ).animate({opacity: 1}, 500);
							$('#show-item-img').attr({'src': 'images/robotburger/tv1.png'}).animate({opacity: 1},190 ).animate({opacity: 1}, 500, function() {
							$('#body2').attr({'src': 'images/robotburger/roboburger6.png'}).animate({opacity: 1},300 ).animate({opacity: 1}, 500);
								$('#show-item-img').attr({'src': 'images/robotburger/tv1.png'}).animate({opacity: 1},190 ).animate({opacity: 1}, 500, function() {
								$('#body2').attr({'src': 'images/robotburger/roboburger8.png'}).animate({opacity: 1},300 ).animate({opacity: 1}, 500);
									$('#show-item-img').attr({'src': 'images/robotburger/tv1.png'}).animate({opacity: 1},190 ).animate({opacity: 1}, 500, function() {
									$('#body2').attr({'src': 'images/robotburger/roboburger9.png'}).animate({opacity: 1},300 ).animate({opacity: 1}, 500);
										$('#show-item-img1').attr({'src': 'images/robotburger/burp.png'}).animate({opacity: 1},190 ).animate({opacity: 0}, 2000, function() {
									
	
										});
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
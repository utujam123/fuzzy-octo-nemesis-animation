	
	$(document).ready(function(){
		$("#start-anim").click(function(){
			if($("#container2").children().length > 0)
			{
			return false;
			}
			$("#container2").css({"right":"50px","top":"220px","position":"absolute"});
			$("<img id = 'body2'/>").attr("src","images/clockrobot/robot_clock1.png").appendTo("#container2");
			$("<div id = 'show-item-div'></div>").css({
					"background"  : "url('new/animation/images/robot beer/sam.jpg') no-repeat",
					"position"	  : "absolute",
					"left"		  : "67px",
					"top"		  : "-190px",
					"opacity"	  : "1.0",
					"background-size": "85% 85%",
					"background-position" : "center"
			}).appendTo("#container2");
			$("<img id = 'show-item-img'/>").attr
			("src","images/clockrobot/tv1.png").appendTo("#show-item-div");
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
	$('#show-item-img').attr({'src': 'images/clockrobot/tv1.png'}).animate({opacity: 1},600 ).animate({opacity: 1}, 0, function() {
		$('#show-item-img').attr({'src': 'images/clockrobot/tv1.png'}).animate({opacity: 1},600 ).animate({opacity: 1}, 0, function() {
		$('#body2').attr({'src': 'images/clockrobot/robot_clock1.png'}).animate({opacity: 1},600 ).animate({opacity: 1}, 0);
			$('#show-item-img').attr({'src': 'images/clockrobot/tv2.png'}).animate({opacity: 1},0 ).animate({opacity: 1}, 0, function() {
			$('#body2').attr({'src': 'images/clockrobot/robot_clock2.png'}).animate({opacity: 1},0 ).animate({opacity: 1}, 0);
				$('#show-item-img').attr({'src': 'images/clockrobot/tv2.png'}).animate({opacity: 1},600 ).animate({opacity: 1}, 1000, function() {
				$('#body2').attr({'src': 'images/clockrobot/robot_clock1.png'}).animate({opacity: 1},600 ).animate({opacity: 1}, 0);
					$('#show-item-img').attr({'src': 'images/clockrobot/tv1.png'}).animate({opacity: 1},600 ).animate({opacity: 1}, 0, function() {
					$('#body2').attr({'src': 'images/clockrobot/robot_clock1.png'}).animate({opacity: 1},1000 ).animate({opacity: 1}, 0);		
						$('#show-item-img').attr({'src': 'images/clockrobot/tv1.png'}).animate({opacity: 1},600 ).animate({opacity: 1}, 0, function() {
						$('#body2').attr({'src': 'images/clockrobot/robot_clock3.png'}).animate({opacity: 1},0 ).animate({opacity: 1}, 0);
							$('#show-item-img').attr({'src': 'images/clockrobot/tv1.png'}).animate({opacity: 1},600 ).animate({opacity: 1}, 0, function() {
							$('#body2').attr({'src': 'images/clockrobot/robot_clock1.png'}).animate({opacity: 1},0 ).animate({opacity: 1}, 0);
								$('#show-item-img').attr({'src': 'images/clockrobot/tv1.png'}).animate({opacity: 1},600 ).animate({opacity: 1}, 0, function() {
								$('#body2').attr({'src': 'images/clockrobot/robot_clock1.png'}).animate({opacity: 1},0 ).animate({opacity: 1}, 0);
								});
							});
						});
					});
				});
			});	
		});
	});			
}
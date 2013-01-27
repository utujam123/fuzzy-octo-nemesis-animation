	
	$(document).ready(function(){
		$("#start-anim").click(function(){
			if($("#container2").children().length > 0)
			{
			return false;
			}
			
			$("<div id = 'show-item-img'></div>").css({
				"background" : "url('images/robot beer/sam.jpg') no-repeat",
				"background-size": "85% 82%",
				"background-position" : "center",
				"position"	 : "absolute",
				"left"		 : "100px",
				"margin-top" : "100px"
			}).appendTo("#container2");
			$("<img/>").attr("src","images/clockrobot/tv1.png").appendTo("#show-item-img");
			$("<div id ='show-body'></div>").css({
				"padding-left" : "25px",
				"padding-top"  : "3px",
				"position"	   : "relative",
				"z-index"	   : "1"
			}).appendTo("#container2");
			$("<img id='body'/>").attr("src","images/fireworksrobot/robot_fireworks0.png").appendTo("#show-body");
			$("<div id='show-putok'></div>").css({
				"margin-left"  : "20px",
				"margin-top"   : "-620px"
			}).appendTo("#container2");
			$("<img id='putok'>").attr("src","images/fireworksrobot/firecrackers1.png").css({
				"height" : "280px",
				"width"  : "300px"
			}).appendTo("#show-putok");
			do_animate();
		});


		$("#restart-anim").click(function(){
			$("#show-tv-div").remove();
			$("#show-tv1").remove();
			$("#show-body").remove();
			$("#body").remove();
			$("#show-putok").remove();
			$("#putok").remove();
		});
	});


function do_animate()
{
	$('#show-item-img').attr({'src': 'images/fireworksrobot/tv1.png'}).animate({opacity: 1},150 ).animate({opacity: 1}, 0, function() {
	$('#show-item-img').css("margin-top","100px");	
	$('#putok').attr({'src': 'images/fireworksrobot/firecrackers1.png'}).animate({opacity: 1},100 ).animate({opacity: 1}, 0);
		$('#body').attr({'src': 'images/fireworksrobot/robot_fireworks0.png'}).animate({opacity: 1},150 ).animate({opacity: 1}, 0);		
		$('#show-item-img').attr({'src': 'images/fireworksrobot/tv1.png'}).animate({opacity: 1},150 ).animate({opacity: 1}, 0, function() {
		$('#putok').attr({'src': 'images/fireworksrobot/firecrackers2.png'}).animate({opacity: 1},100 ).animate({opacity: 1}, 0);
			$('#show-item-img').attr({'src': 'images/fireworksrobot/tv1.png'}).animate({opacity: 1},0 ).animate({opacity: 1}, 0, function() {
			$('#show-item-img').css("margin-top","118px");
			$('#body').attr({'src': 'images/fireworksrobot/robot_fireworks1.png'}).animate({opacity: 1},0 ).animate({opacity: 1}, 0);
			$('#putok').attr({'src': 'images/fireworksrobot/firecrackers3.png'}).animate({opacity: 1},100 ).animate({opacity: 1}, 0);
				$('#show-item-img').attr({'src': 'images/fireworksrobot/tv1.png'}).animate({opacity: 1},150 ).animate({opacity: 1}, 0, function() {
				$('#body').attr({'src': 'images/fireworksrobot/robot_fireworks2.png'}).animate({opacity: 1},150 ).animate({opacity: 1}, 0);
				$('#show-item-img').css("margin-top","100px");
				$('#putok').attr({'src': 'images/fireworksrobot/firecrackers4.png'}).animate({opacity: 1},100 ).animate({opacity: 1}, 0);
					$('#show-item-img').attr({'src': 'images/fireworksrobot/tv1.png'}).animate({opacity: 1},150 ).animate({opacity: 1}, 0, function() {
					$('#body').attr({'src': 'images/fireworksrobot/robot_fireworks3.png'}).animate({opacity: 1},150 ).animate({opacity: 1}, 0);
					$('#show-item-img').css("margin-top","86px");
					$('#putok').attr({'src': 'images/fireworksrobot/firecrackers5.png'}).animate({opacity: 1},100 ).animate({opacity: 1}, 0);
						$('#show-item-img').attr({'src': 'images/fireworksrobot/tv1.png'}).animate({opacity: 1},150 ).animate({opacity: 1}, 0, function() {
						$('#show-item-img').css("margin-top","100px");
						$('#putok').attr({'src': 'images/fireworksrobot/firecrackers6.png'}).animate({opacity: 1},100 ).animate({opacity: 1}, 0);
							$('#body').attr({'src': 'images/fireworksrobot/robot_fireworks0.png'}).animate({opacity: 1},150 ).animate({opacity: 1}, 0);	
							$('#show-item-img').attr({'src': 'images/fireworksrobot/tv1.png'}).animate({opacity: 1},150 ).animate({opacity: 1}, 0, function() {
							$('#putok').attr({'src': 'images/fireworksrobot/firecrackers7.png'}).animate({opacity: 1},100 ).animate({opacity: 1}, 0);
								$('#show-item-img').attr({'src': 'images/fireworksrobot/tv1.png'}).animate({opacity: 1},0 ).animate({opacity: 1}, 0, function() {
								$('#show-item-img').css("margin-top","118px");
								$('#body').attr({'src': 'images/fireworksrobot/robot_fireworks1.png'}).animate({opacity: 1},0 ).animate({opacity: 1}, 0);
								$('#putok').attr({'src': 'images/fireworksrobot/firecrackers8.png'}).animate({opacity: 1},100 ).animate({opacity: 0}, 200);
									$('#show-item-img').attr({'src': 'images/fireworksrobot/tv1.png'}).animate({opacity: 1},150 ).animate({opacity: 1}, 0, function() {
									$('#body').attr({'src': 'images/fireworksrobot/robot_fireworks2.png'}).animate({opacity: 1},150 ).animate({opacity: 1}, 0);
									$('#show-item-img').css("margin-top","100px");
										$('#show-item-img').attr({'src': 'images/fireworksrobot/tv1.png'}).animate({opacity: 1},150 ).animate({opacity: 1}, 0, function() {
										$('#show-item-img').css("margin-top","86px");
										$('#body').attr({'src': 'images/fireworksrobot/robot_fireworks3.png'}).animate({opacity: 1},150 ).animate({opacity: 1}, 0, loisample());
											
											
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
	

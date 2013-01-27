	
	$(document).ready(function(){
		$("#start-anim").click(function(){
			if($("#container2").children().length > 0)
			{
			return false;
			}
			$("#container2").css({
				"margin-left" : "30px",
				"margin-top"  : "300px"
			});
			$("<img id = 'container_image'/>").attr("src","images/robotpunch/robotpunch1.png").appendTo("#container2");
			
			$("<div id = 'do-show-item-img2'></div>").css({
				"position" 	  : "absolute",
				"z-index"	  : "1",
				"left"		  : "105px",
				"top"		  : "100px"
			}).appendTo("#container2");
			$("<img id = 'show-item-img2'/>").attr("src","").appendTo("#do-show-item-img2");
			
			$("<div id = 'do-show-item-img1'></div>").css({
				"position" 	  : "relative",
				"z-index"	  : "2",
				"margin-left" : "500px",
				"margin-top"  : "-400px"
			}).appendTo("#container2");
			$("<img id = 'show-item-img1'/>").attr("src","images/robotpunch/glove1.png").appendTo("#do-show-item-img1");

			$("<div id = 'show-item-div'></div>").css({
				"background"  : "url('images/robot beer/sam.jpg') no-repeat",
				"position"	  : "absolute",
				"left"		  : "100px",
				"top"		  : "165px",
				"opacity"	  : "1.0",
				"background-size" : "85% 85%",
				"background-position" : "center"
			}).appendTo("#container2")
			$("<img id = 'show-item-img'/>").attr("src","images/robot beer/tv.png").appendTo("#show-item-div");

			do_animate();

		});


		$("#restart-anim").click(function(){
			$("#container_image").remove();
			$("#do-show-item-img2").remove();
			$("#show-item-img2").remove();
			$("#do-show-item-img1").remove();
			$("#show-item-img1").remove();
			$("#show-item-div").remove();
			$("#show-item-img").remove();
		});
	});


function do_animate()
{
	 $('#show-item-img1').attr({'src': 'images/robotpunch/glove1.png'}).animate({opacity: 1},300 ).animate({opacity: 1, marginLeft: '-400px'}, 200, function() {	
		
	
		$('#show-item-img').attr({'src': 'images/robotpunch/tv1.png'}).animate({opacity: 1},0 ).animate({opacity: 1, marginLeft: '-15px'}, 0, function() {
		$('#show-item-div').css("-webkit-transform","rotate(-10deg)");
			$('#show-item-img2').attr({'src': 'images/robotpunch/punched.png'}).animate({opacity: 0},0 ).animate({opacity: 1}, 70) .animate({opacity: 0}, 0,function() {
			
				$('#show-item-img').attr({'src': 'images/robotpunch/tv2.png'}).animate({opacity: 1},300 ).animate({opacity: 1}, 0, function() {
				$('#show-item-div').css("-webkit-transform","rotate(-10deg)");
				
					$('#show-item-img').attr({'src': 'images/robotpunch/tv3.png'}).animate({opacity: 1},100 ).animate({opacity: 1}, 0, function() {
					$('#show-item-div').css("-webkit-transform","rotate(-10deg)");
					
						$('#show-item-img').attr({'src': 'images/robotpunch/tv2.png'}).animate({opacity: 1},100 ).animate({opacity: 1}, 0, function() {
						$('#show-item-div').css("-webkit-transform","rotate(-10deg)");
						
							$('#show-item-img').attr({'src': 'images/robotpunch/tv3.png'}).animate({opacity: 1},100 ).animate({opacity: 1}, 0, function() {
							$('#show-item-div').css("-webkit-transform","rotate(-10deg)");
							$
								$('#show-item-img').attr({'src': 'images/robotpunch/tv4.png'}).animate({opacity: 1},100 ).animate({opacity: 1}, 0, function() {
								$('#show-item-div').css("-webkit-transform","rotate(-10deg)");
								
									$('#show-item-img').attr({'src': 'images/robotpunch/tv5.png'}).animate({opacity: 1},100 ).animate({opacity: 1}, 0, function() {
									$('#show-item-div').css("-webkit-transform","rotate(-10deg)");
									
										$('#show-item-img').attr({'src': 'images/robotpunch/tv6.png'}).animate({opacity: 1},100 ).animate({opacity: 1}, 0, function() {
										$('#show-item-div').css("-webkit-transform","rotate(-10deg)");
										
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
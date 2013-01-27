	
	$(document).ready(function(){
		$("#start-anim").click(function(){
			if($("#container2").children().length > 0)
			{
			return false;
			}
			$("<div id = 'show-body2'></div>").css({
					"position"    : "absolute",
					"right" 	      : "50px",
					"top"	      : "250px"
			}).appendTo("#container2");
			$("<img id = 'body2'/>").attr("src","images/robotbombed/robot-bombed1.png").appendTo("#show-body2");
			$("<div id = 'show-item-div'></div>").css({
					"background"  : "url('images/robot beer/sam.jpg') no-repeat",
					"position"	  : "absolute",
					"right"		  : "120px",
					"top"		  : "25px",
					"opacity"	  : "1.0",
					"background-size": "85% 85%",
					"background-position" : "center"
			}).appendTo("#container2");
			$("<img id = 'show-item-img'/>").attr
			("src","images/robotbombed/tv1.png").appendTo("#show-item-div");
			
			$("<div id = 'div-bomb'></div>").css({
					"margin-top"  : "20px",
					"margin-left" : "780px",
					"position"    : "relative",
					"z-index"	  : "1"
			}).appendTo("#container2");
			$("<img id = 'bomb'/>").attr("src","images/robotbombed/bomb.png").css({
				"width"		 : "120px",
				"height"	 : "120px"
			}).appendTo('#div-bomb');

			$("<div id = 'div-bomb2'></div>").css({
					"margin-top"  : "-260px",
					"margin-left" : "650px",
					"position"    : "relative",
					"z-index"	  : "1"
			}).appendTo("#container2");
			$("<img id = 'bomb2'/>").appendTo('#div-bomb2');
			
			do_animate();

		});


		$("#restart-anim").click(function(){
			$("#show-body2").remove();
			$("#body2").remove();
			$("#show-item-div").remove();
			$("#show-item-img").remove();
			$("#div-bomb").remove();
			$("#bomb").remove();
			$("#div-bomb2").remove();
			$("#div-bomb2").remove();

		});
	});


function do_animate()
{
	$('#bomb').attr({'src': 'images/robotbombed/bomb.png'}).animate({opacity: 1},0 ).animate({opacity: 1,}, 600, function() {
		$('#bomb').attr({'src': 'images/robotbombed/bomb2.png'}).animate({opacity: 1},0 ).animate({opacity: 1}, 200, function() {
			$('#bomb').attr({'src': 'images/robotbombed/bomb3.png'}).animate({opacity: 1},0 ).animate({opacity: 1}, 200, function() {
				$('#bomb').attr({'src': 'images/robotbombed/bomb4.png'}).animate({opacity: 1},0 ).animate({opacity: 1}, 200, function() {
					$('#bomb').attr({'src': 'images/robotbombed/bomb4.png'}).animate({opacity: 1},0 ).animate({opacity: 1}, 200, function() {
						$('#bomb').attr({'src': 'images/robotbombed/bomb6.png'}).animate({opacity: 1},0 ).animate({opacity: 1}, 200, function() {
							$('#bomb').attr({'src': 'images/robotbombed/bomb7.png'}).animate({opacity: 1},0 ).animate({opacity: 0}, 0, function() {	
								$('#show-item-img').attr({'src': 'images/robotbombed/tv2.png'}).animate({opacity: 1},0 ).animate({opacity: 1}, 0, function() {
								$('#bomb2').attr({'src': 'images/robotbombed/bomb8.png'}).animate({opacity: 1},0 ).animate({opacity: 0}, 2000);
								$('#body2').attr({'src': 'images/robotbombed/robot-bombed2.png'}).animate({opacity: 1},0 ).animate({opacity: 1}, 0);
									$('#show-item-img').attr({'src': 'images/robotbombed/tv3.png'}).animate({opacity: 1},100 ).animate({opacity: 1}, 0, function() {
									$('#body2').attr({'src': 'images/robotbombed/robot-bombed3.png'}).animate({opacity: 1},0 ).animate({opacity: 1}, 0);
										$('#show-item-img').attr({'src': 'images/robotbombed/tv2.png'}).animate({opacity: 1},100 ).animate({opacity: 1}, 0, function() {
										$('#body2').attr({'src': 'images/robotbombed/robot-bombed4.png'}).animate({opacity: 1},0 ).animate({opacity: 1}, 0);
											$('#show-item-img').attr({'src': 'images/robotbombed/tv3.png'}).animate({opacity: 1},0 ).animate({opacity: 1}, 0, function() {
											$('#body2').attr({'src': 'images/robotbombed/robot-bombed4.png'}).animate({opacity: 1},0 ).animate({opacity: 1}, 0);		
												$('#show-item-img').attr({'src': 'images/robotbombed/tv4.png'}).animate({opacity: 1},100 ).animate({opacity: 1}, 0, function() {
												$('#body2').attr({'src': 'images/robotbombed/robot-bombed4.png'}).animate({opacity: 1},0 ).animate({opacity: 1}, 0);
													$('#show-item-img').attr({'src': 'images/robotbombed/tv5.png'}).animate({opacity: 1},100 ).animate({opacity: 1}, 0, function() {
													$('#body2').attr({'src': 'images/robotbombed/robot-bombed4.png'}).animate({opacity: 1},0 ).animate({opacity: 1}, 0);
														$('#show-item-img').attr({'src': 'images/robotbombed/tv6.png'}).animate({opacity: 1},100 ).animate({opacity: 1}, 0, function() {
														$('#body2').attr({'src': 'images/robotbombed/robot-bombed4.png'}).animate({opacity: 1},0 ).animate({opacity: 1}, 0);
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
				});				
			});
		});
	});
}
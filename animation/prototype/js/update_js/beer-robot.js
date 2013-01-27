	
	$(document).ready(function(){
		$("#start-anim").click(function(){
			if($("#container2").children().length > 0)
			{
			return false;
			}
			$("#container2").css({
			"position" : "absolute",
			"right"    : "100px",
			"top"	   : "270px"
			});
			$("<img id = 'la'/>").attr("src","images/robot beer/body.png").appendTo("#container2");
			
			$("<div id = 'show-item-div'></div>").css({
				"background" : "url('images/robot beer/sam.jpg') no-repeat",
				"position"	 : "absolute",
				"left"		 : "-40px",
				"top"		 : "-222px",
				"opacity"	 : "1.0",
				"background-size" : "85% 85%",
				"background-position" : "center"
			}).appendTo("#container2")
			$("<img id = 'show-item-img' />").attr("src","images/robot beer/tv.png").appendTo("#show-item-div");

			$("<div id = 'item-img-div1'></div>").css({"margin-left" : "-72px"}).appendTo("#container2");
			$("<img id = 'show-item-img1'/>").appendTo("#item-img-div1");
			do_animate();

		});


		$("#restart-anim").click(function(){
			$("#la").remove();
			$("#show-item-div").remove();
			$("#show-item-img").remove();
			$("#item-img-div1").remove();
			$("#show-item-img1").remove();

		});
	});


function do_animate()
{
	$('#show-item-img').attr({'src': 'images/robot beer/tv.png?1'}).animate({opacity: 1},300 ).animate({opacity: 1, marginLeft: '10px'}, 0, function() {
	$('#show-item-div').css("-webkit-transform","rotate(7deg)");
	$('#show-item-img1').attr({'src': 'images/robot beer/bubbles1.png'}).animate({opacity: 1},300 ).animate({opacity: 0},0);
	$('#item-img-div1').css("margin-top","-540px");
		$('#show-item-img').attr({'src': 'images/robot beer/tv.png'}).animate({opacity: 1},300 ).animate({opacity: 1, marginLeft: '-7px'}, 0, function() {
		$('#show-item-div').css("-webkit-transform","rotate(0deg)");
		$('#show-item-img1').attr({'src': 'images/robot beer/bubbles2.png'}).animate({opacity: 1},300 ).animate({opacity: 0},0);
		$('#item-img-div1').css("margin-left","-100px");
			$('#show-item-img').attr({'src': 'images/robot beer/tv.png'}).animate({opacity: 1},300 ).animate({opacity: 1, marginLeft: '-15px'}, 0, function() {
			$('#show-item-div').css("-webkit-transform","rotate(-8deg)");
			$('#show-item-img1').attr({'src': 'images/robot beer/bubbles3.png'}).animate({opacity: 1},300 ).animate({opacity: 0},0);
			$('#item-img-div1').css("margin-left","-100px");
				$('#show-item-img').attr({'src': 'images/robot beer/tv.png'}).animate({opacity: 1},300 ).animate({opacity: 1, marginLeft: '-7px'}, 0, function() {
				$('#show-item-div').css("-webkit-transform","rotate(0deg)");
				$('#show-item-img1').attr({'src': 'images/robot beer/bubbles1.png'}).animate({opacity: 1},300 ).animate({opacity: 0},0);
				$('#item-img-div1').css("margin-left","-80px");
					$('#show-item-img').attr({'src': 'images/robot beer/tv.png'}).animate({opacity: 1},300 ).animate({opacity: 1, marginLeft: '10px'}, 0, function() {
					$('#show-item-div').css("-webkit-transform","rotate(7deg)");
					$('#show-item-img1').attr({'src': 'images/robot beer/bubbles2.png'}).animate({opacity: 1},300 ).animate({opacity: 0, marginLeft: '50px'},0);
					$('#item-img-div1').css("margin-top","-550px");
						$('#show-item-img').attr({'src': 'images/robot beer/tv.png'}).animate({opacity: 1},300 ).animate({opacity: 1, marginLeft: '-9px'}, 0, function() {
						$('#show-item-div').css("-webkit-transform","rotate(0deg)");
						$('#show-item-img1').attr({'src': 'images/robot beer/bubbles3.png'}).animate({opacity: 1},300 ).animate({opacity: 1},0);
						$('#item-img-div1').css("margin-left","-150px");
							$('#show-item-img').attr({'src': 'images/robot beer/tv.png'}).animate({opacity: 1},300 ).animate({opacity: 1, marginLeft: '-15px'}, 0, function() {
							$('#show-item-div').css("-webkit-transform","rotate(-8deg)");
							$('#show-item-img1').attr({'src': 'images/robot beer/bubbles3.png'}).animate({opacity: 1},300 ).animate({opacity: 0},0);
							$('#item-img-div1').css("margin-left","-100px");
								$('#show-item-img').attr({'src': 'images/robot beer/tv.png'}).animate({opacity: 1},300 ).animate({opacity: 1, marginLeft: '-9px'}, 0, function() {
								$('#show-item-div').css("-webkit-transform","rotate(0deg)");
								$('#show-item-img1').attr({'src': 'images/robot beer/bubbles3.png'}).animate({opacity: 1},300 ).animate({opacity: 0},300);
								$('#item-img-div1').css("margin-left","-150px");
								});
							});
						});
					});
				});
			});
		});
	});

}
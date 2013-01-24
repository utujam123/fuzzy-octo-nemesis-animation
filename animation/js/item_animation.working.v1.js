$(document).ready(function(){

		$.ajaxPollSettings.pollingType = "interval";
		$.ajaxPollSettings.interval = 6000;
		$.ajaxPollSettings.maxInterval = 6000;
		$.ajaxPollSettings.durationUntilMaxInterval = 6000;

		var httpcount = 1;
		
		$.ajaxPoll({
			url: "sample.json",
			//url: "sample-feed.php",
		    //url: "http://www.radioapp.fm/sample-feed.php",
			//url: "http://www.mccran.co.uk/examples/jquery-polling/map-service.cfm",
		    type: "POST",
		    data: {count: httpcount},
		    dataType: "json",
		    successCondition: function(result) {
			// return result != null; // custom condition goes here.
				if(result.status=="success")
				{
					/*
					var responseString = httpcount + '. ' + result.data.item_id + ' ' + result.data.sender_name + '<br>';

					$("#response-container").append(responseString);

					httpcount = httpcount + 1;
					*/
					
					receiving_animation(result.data.item_id);
					document.getElementById('sender-placeholder').innerHTML="sent by <br />&nbsp;&nbsp;&nbsp;" +result.data.sender_name;
				}
				else
				{
					reset_page();
				}

		    },
		    success: function(result) {
		        alert(result.status);
				//alert('testing');
		       // alert(result.data.date);
		    }

		});
	});
	
	function reset_page()
	{
		// hide all on successful receiving of items
			$('#item-placeholder').css("display", "none");
			document.getElementById('sender-placeholder').innerHTML="";
			
		/*
		$('#item-placeholder').hide('fast', function() {
			// Animation complete.
			});
			*/
	}
	
	function receiving_animation(item_id)
	{
		// hide all on reset of page
			$('#item-placeholder').css("display", "none");
			
			/*
			$('#item-placeholder').hide('fast', function() {
				// Animation complete.
			});
			*/
		// delayer for app version
			$("#item-placeholder").animate({marginTop:"0px"}, 2000);
		
		switch(item_id)
		{
			default:
			case '1':
				item1_animation();
				break;
			
			case '2':
				item2_animation();
				break;
			
			case '3':
				item3_animation();
				break;
		}
		
	}
	
	function item1_animation()
	{	
		// initialize item
			$("#item-placeholder").attr("src", "images/item1.png");		
			
		// animate
			generic_animation();
	}
	
	function generic_animation()
	{	
		// initialize bg
			//$('#page-body').css("background", "url(images/heimlichbg2.jpg) no-repeat");
			
		// initialize current item
			$("#item-placeholder").animate({
				height:"100px",
				width:"100px",
				marginTop:"0px",
				marginLeft:"0px",
			});
			
		// show current item
			$('#item-placeholder').css("display", "block");
			/*
			$('#item-placeholder').show('fast', function() {
			// Animation complete.
			});
			*/
			
		// animate current item	
		/*
			$("#item-placeholder").animate({
				marginTop:'200px',
			});
			
			
			$("#item-placeholder").animate({marginTop:"-=30px"});
			$("#item-placeholder").animate({marginTop:"+=30px"});
			$("#item-placeholder").animate({marginTop:"-=5px"});
			$("#item-placeholder").animate({marginTop:"+=5px"});
			*/
			$("#item-placeholder").animate({
				height:"+=10px",
				width:"+=10px",
			});
			
			$("#item-placeholder").animate({
				height:"-=10px",
				width:"-=10px",
			});
			$("#item-placeholder").animate({
				height:"+=10px",
				width:"+=10px",
			});
			$("#item-placeholder").animate({
				height:"-=10px",
				width:"-=10px",
			});
			$("#item-placeholder").animate({
				height:"+=10px",
				width:"+=10px",
			});
			$("#item-placeholder").animate({
				height:"-=10px",
				width:"-=10px",
			});
			$("#item-placeholder").animate({
				height:"+=10px",
				width:"+=10px",
			});
			$("#item-placeholder").animate({
				height:"-=10px",
				width:"-=10px",
			});
	}
	
	function item2_animation()
	{
		// initialize item
			$("#item-placeholder").attr("src", "images/item2.png");
		
		// animate
			generic_animation();			
	}
	
	function item3_animation()
	{
		// initialize item
			$("#item-placeholder").attr("src", "images/item3.png");
		
		// animate
			generic_animation();			
	}
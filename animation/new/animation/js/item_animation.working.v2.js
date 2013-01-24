$(document).ready(function(){

		$.ajaxPollSettings.pollingType = "interval";
		$.ajaxPollSettings.interval = 6000;
		$.ajaxPollSettings.maxInterval = 6000;
		$.ajaxPollSettings.durationUntilMaxInterval = 6000;

		var httpcount = 1;
		
		$.ajaxPoll({
			//url: "sample.json",
			url: "http://localhost/heimlichcms/receiver_activities/json_feed/2",
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
					
					receiving_animation(result.data.item_id, result.data.item_activity_id);
				}
				else
				{
					
				}

		    },
		    success: function(result) {
				//alert('testing');
		       // alert(result.data.date);
		    }

		});
	});
	
	function receiving_animation(item_id, item_activity_id)
	{
		switch(item_id)
		{
			case '1':
				img_append = '<div class="img-container-style"><img id="'+ item_activity_id +'" src="images/item1.png" class="img-style" /></div>'
				break;
			
			case '2':
				img_append = '<div class="img-container-style"><img id="'+ item_activity_id +'" src="images/item2.png" class="img-style" /></div>'
				break;
			
			case '3':
				img_append = '<div class="img-container-style"><img id="'+ item_activity_id +'" src="images/item3.png" class="img-style" /></div>'
				break;
		}
			
		$('#div-start').append(img_append);
		
		$("#"+item_activity_id).animate({
				height:"+=10px",
				width:"+=10px",
			});
		$("#"+item_activity_id).animate({
			height:"-=10px",
			width:"-=10px",
		});
	}
<!DOCTYPE html>
<html>
<head>
<script src="jquery.js"></script>
<script> 
$(document).ready(function(){
  $("#show").click(function(){
     $("div").animate({
      width:'200px'
    });
  });
$("#hide").click(function(){
     $("div").animate({
      width:'50px'
  });
 });
});

</script> 
</head>


 
<body>
<button id="show">Show</button>
<button id="hide">hide</button>
<p>By default, all HTML elements have a static position, and cannot be moved. To manipulate the position, remember to first set the CSS position property of the element to relative, fixed, or absolute!</p>
<div style="background:#98bf21;height:200px;width:50px;margin-right:0px;">
</div>

</body>
</html>
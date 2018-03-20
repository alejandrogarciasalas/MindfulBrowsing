// window.onload = function (evt) {
    // document.body.innerHTML = "<div id='overlay'>hi!</div>";
// };

$("body").prepend("<div id='overlay'><p style='margin-top: 10%;'><strong>You are in control</strong></p><p>“Mindfulness means being awake. It means knowing what you are doing.”</p> <p>“The mind is everything. What you think, you become.”</p><div style='margin-top: 10%;' id='timer'></div> <button class='go' style='display:none;'>browse anyway</button></div>");
$("body").css("overflow", "hidden");

$('#timer').timer({
	countdown: true,
	duration: '30s',
    seconds: 0,
    callback: function () {
		console.log('timesup');
		$(".go").css("display", "inline");
    	
    }
});

 $(".go").click(function(){
 	$("#overlay").remove();
 	$("body").css("overflow", "");
}); 
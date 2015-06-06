$(document).ready(function() {
  var alarmBell = new buzz.sound("/static/bells/alarmbell", {
	    formats: [ "mp3", "wav"]
  });
	var timeonclock = 0;
	$("#cal-reminder").hide();
	$("#g-days").hide();

	$("#steep_target").click(function(){
		$('.collapse').collapse();
	});

// $('#boil_start').change(function(){
// 	$.post('/boil',
// 	{ boil_start: $('#boil_start').val(), brew_id: $('#brew_id').val()}
// 	console.log("Boil time saved."));
// });

// timer functionality

// TIMER:
// timer box toggle and drag:
	$(".timer").click(function(evt){
		console.log($(this).val());
		timer.start($(this).val() * 60000);
	});
	$(".clos").click(function(){
		$(this).parent().toggle();
	$("#showtimer").click(function(){
		$("#popUpDiv").show()
	})

	});
	$('#timergoodies').draggable();

var timer = new Tock({
	  	countdown: true,
	  	interval: 10,
	  	callback: function(timer) {
	  		console.log(timer.msToTimecode(timer.lap()));
		    var current_time = timer.msToTimecode(timer.lap());
		    $("#clock").val(current_time);
		    console.log('running');
		},
	  	complete: function () {
		  	alarmBell.play();
		    alarm = confirm("Time's up!");
		    if (alarm == true) {
		    	alarmBell.stop();
		    } else if (alarm == false) {
		    	alarmBell.stop();
		    }
		}
	});

// $(".start").on('click', function(evt) {
// 	timer.start($(evt.currentTarget).val());
// 	});

$(".stop").on('click', function() {
	timer.stop();
	});

// function startTimer () {

// $.each($(".popUpDiv"), function(index , value){
// 	console.log(index + ": " + value);
// 	console.log($(this))


// CALENDAR:
	$("#c-days").change( function(){
		var date = new Date();
		var days = parseInt($("#c-days").val());
		date.setDate(date.getDate() + days);

		year = date.getFullYear();
		month = date.getMonth() + 1;
		if (month < 10) {
			month = "0" + month;
		}
		day = date.getDate();
		if (day < 10) {
			day = "0" + day;
		}
		newdate = year + "-" + month + "-" + day + " 12:00:00";

		$("#date_start").text(newdate);
		$("#date_end").text(newdate);
		$("#g-days").show();

		(function () {
		            if (window.addtocalendar)if(typeof window.addtocalendar.start == "function")return;
		            if (window.ifaddtocalendar == undefined) { window.ifaddtocalendar = 1;
		                var d = document, s = d.createElement('script'), g = 'getElementsByTagName'; 
		                s.type = 'text/javascript';s.charset = 'UTF-8';s.async = true;
		                s.src = ('https:' == window.location.protocol ? 'https' : 'http')+'://addtocalendar.com/atc/1.5/atc.min.js';
		                var h = d[g]('body')[0]; console.log(h); h.appendChild(s);}})();

	});
	$("#reminder").change(function(){
		next_step = $("#reminder").val();
		$("#cal_title").text(next_step);
		$("#cal_desc").text(next_step);
	})

	$("#r-days").change( function(){
		var date = new Date();
		var days = parseInt($("#r-days").val());
		date.setDate(date.getDate() + days);

		year = date.getFullYear();
		month = date.getMonth() + 1;
		if (month < 10) {
			month = "0" + month;
		}
		day = date.getDate();
		if (day < 10) {
			day = "0" + day;
		}
		newdate = year + "-" + month + "-" + day + " 12:00:00";
		$("#r_date_start").text(newdate);
		$("#r_date_end").text(newdate);
		$("#cal-reminder").show();

		(function () {
		            if (window.addtocalendar)if(typeof window.addtocalendar.start == "function")return;
		            if (window.ifaddtocalendar == undefined) { window.ifaddtocalendar = 1;
		                var d = document, s = d.createElement('script'), g = 'getElementsByTagName'; 
		                s.type = 'text/javascript';s.charset = 'UTF-8';s.async = true;
		                s.src = ('https:' == window.location.protocol ? 'https' : 'http')+'://addtocalendar.com/atc/1.5/atc.min.js';
		                var h = d[g]('body')[0]; console.log(h); h.appendChild(s);}})();
	});
	// ABV:
	$("#final_gravity").change( function(){
		var fg = parseFloat($("#final_gravity").val());
		if ($("#orig_gravity").val() > 0) {
			var og = parseFloat($("#orig_gravity").val());
			var abv  = (fg - og) * 131;
			$("#abv").text(" ABV: ");
			$("#abv_val").html(abv);
		}
	});

});


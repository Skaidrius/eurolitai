/**
 * @name		jQuery Countdown Plugin
 * @author		Martin Angelov
 * @version 	1.0
 * @url			http://tutorialzine.com/2011/12/countdown-jquery/
 * @license		MIT License
 */

$(function(){
	
	var note = $('#note'),
		ts = new Date(2015, 0, 1);

	
	if((new Date()) > ts){
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime();
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
				if ($('#english').hasClass("active")){
				message += days + " day" + ( days==1 ? '':'s' );
				message += hours + " hour" + ( hours==1 ? '':'s' );
				message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
				message += seconds + " second" + ( seconds==1 ? '':'s' ) ;
				} else {
				message += days + " d.,";
				message += hours + " val.,";
				message += minutes + " min." + " ir ";
				message += seconds + " sek.";
				}
				
			note.html(message);
		}
	});
	
});

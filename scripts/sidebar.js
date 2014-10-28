$(document).ready( function() {

	/* 
	   For slide-in sidebar.
	   Idea cribbed shamelessly from http://stackoverflow.com/questions/16678492/,
	   finally,
	   after hours of Google,
	   without knowing what a slide-in sidebar is called.
	   
	   But now I have it. My sidebar slides in.
	   Hallelujah.
	 */
	$('.sidebar-button').click(function(){
    	$('.sidebar').toggleClass('slide');
    	$('.sidebar-button').toggleClass('slide-button');
    });
});

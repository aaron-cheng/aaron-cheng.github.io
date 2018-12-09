/* ************************************************
**************************************************

Website Name: Cepton
Author URL: chengfolio.com
Copyright 2018. All Rights Reserved.

************************************************ */

/* ***********************************************
*************************************************
0. General -------------------- All Files
*************************************************
*********************************************** */

$(document).ready(function(){	
/*----------------------------------------------
------------------------------------------------
0. General
------------------------------------------------
----------------------------------------------*/	
	$(".btn--nav__menu").click(function(){
		$(".nav--mobile").css("display", "block");
		$(".btn--nav__btn--close").css("display", "block");
		$(".btn--nav__menu").css("display", "none");
	});

	$(".btn--nav__btn--close").click(function(){
		$(".nav--mobile").css("display", "none");
		$(".btn--nav__btn--close").css("display", "none");
		$(".btn--nav__menu").css("display", "block");
	});

	$(".btn--nav--mobile").click(function(){
		$(".nav--mobile").css("display", "none");
		$(".btn--nav__btn--close").css("display", "none");
		$(".btn--nav__menu").css("display", "block");
	});

	$(".btn--video-close").click(function(){
		$(".products__video").css("display", "none");
	});

	$(document).keydown(function(e) {
	    // ESCAPE key pressed
	    if (e.keyCode == 27) {
	    	player.pause();
	        $("html, body").css("overflow", "visible");
	        $(".products__video").css("display", "none");
	    }
	});

});
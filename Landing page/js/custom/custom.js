// [MASTER JAVASCRIPT]
//	Project     :	HOLIDAY TEMPLATES
//	Version     :	1.0
//	Last Change : 	06/04/2017
//	Primary Use :   HOLIDAY TEMPLATES

	$(document).on('ready', function() {
		"use strict"; //Start of Use Strict
		var menu_bar = $('.navbar-default');
		var menu_li = $('.navbar-default li a');
		var collapse = $('.navbar-collapse');
		var top_nav=$('#top-nav');
		var navbar_header=$('.navbar_header button');

		//AFTER SCROLL MENU CREATED,MENU BGCOLOR AND TEXT COLOR		
		if(top_nav.length) {
		var x = top_nav.offset().top;
			if (x > 50) {
				top_nav.fadeIn();
			}
			else {
				top_nav.fadeOut();
			}
			$(document).on('scroll',function() {
				var y = $(this).scrollTop();
					if (y > 50) {
						top_nav.fadeIn();
					}
					else	{
						top_nav.fadeOut();
					}
			});
		}

		//RESPONSIVE MENU SHOW AND HIDE FUNCTION
		if(menu_li.length) {
			menu_li.on("click", function(event) {
				collapse.slideToggle();
			});
			$('.navbar-default .navbar-toggle').on("click",function(e) {
				collapse.slideToggle();
			});
		}
			
		//MENU BAR SMOOTH SCROLLING FUNCTION		
		var menu_list=$('#menu-list');
		if(menu_list.length) {	
			$( "#menu-list" ).on( "click", ".pagescroll", function( event ) {					
				event.preventDefault();	
				var hash_tag= $(this).attr('href');
				if( $(hash_tag).length ) {
					$('html, body').animate({
						scrollTop: $(hash_tag).offset().top - 50
					}, 2000);					
				}
			return false;
			});	
		}
		//COUNTER			
		var counter=$('.count');
		if(counter.length) {	
			 counter.counterUp({
				delay: 10,
				time: 1000
			});
		}
			
		// YOUTUBE BACKGROUND VIDEO FUNCTION	
		var player=$('.player');
		if(player.length) {
			player.mb_YTPlayer();					
		}
		
		//CONTACT FORM VALIDATION	
		if ($('#contact-form').length) {
			$('#contact-form').each(function(){
				$(this).validate({			
					errorClass: 'error',
					submitHandler: function(form){
						$.ajax({
							type: "POST",
							url:"mail/mail.php",
							data: $(form).serialize(),
							success: function(data) {							
							   if(data){
								   $('#sucessMessage').html('Mail Sent Successfully !');
								   $('#sucessMessage').show();
								   $('#sucessMessage').delay(3000).fadeOut();
							   }
							   else {
									$('#failMessage').html(data);
									$('#failMessage').show();
									$('#failMessage').delay(3000).fadeOut();
									}
							},
							error: function(XMLHttpRequest, textStatus, errorThrown) {
							   $('#failMessage').html(textStatus);
							   $('#failMessage').show();
							   $('#failMessage').delay(3000).fadeOut();
							 }
						});
					}				
				});
			});
		}	
		return false;
		// End of use strict
	});
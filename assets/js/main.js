$(document).ready(function($){
	"use strict";

	// WOW Js Active
	new WOW().init();

	// ---- Active
    $(".staff-list").owlCarousel({
		items:4,
		autoplay:false,
		margin:30,
		nav:true,
		navText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"]
		
		
	});
	
	$(".client-testimonail-carsules").owlCarousel({
		items:3,
		autoplay:false,
		margin:30,
		loop:true,
		dots:true,
		
		
	});
	
		$(".home-page-slides").owlCarousel({
		items:1,
		autoplay:false,
		loop:true,
		dots:true,
		
		
	});
	
    // Owl Next Privew Change
    //$( ".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
    //$( ".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');
	
	
	$(".video-play-btn").magnificPopup({
		type:'video',
	});

	
	// ---- Active
    $(".client-testimonial-carousel").owlCarousel({
		items:3,
		autoplay:false,
		dots:true,
		loop:true,
		margin:30,
		nav:false,
	});
	
	
	
	
	
}(jQuery));

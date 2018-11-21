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
	
	
	
	
	// ---- bground style
	
	
	
Vue.component('gallery', {
  template: '#gallery_template',
  props: {
    images: Array
  },
  data() {
    return {
      x: '100%',
      y: '100%'
    }
  },
  methods: {
    onClick(event) {
      const x = event.offsetX - event.target.offsetLeft
      const y = event.offsetY - event.target.offsetTop
      const xPercent = `${Math.round(100 * x / event.target.offsetWidth)}%`
      const yPercent = `${Math.round(100 * y / event.target.offsetHeight)}%`
      this.x = xPercent
      this.y = yPercent
      this.$emit('next', {x: xPercent, y: yPercent})
    }
  }
})

const vm = new Vue({
  el: '#main',
  data: {
    images: [
      'https://images.pexels.com/photos/794064/pexels-photo-794064.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      'https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      'https://images.pexels.com/photos/1524105/pexels-photo-1524105.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      'https://images.pexels.com/photos/1497244/pexels-photo-1497244.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    ]
  },
   methods: {
    next() {
      const image = this.images.shift()
      this.$nextTick(() => this.images.push(image))
    }
  }
});
	
	
	
	
	
	
	
	
	
	
	
}(jQuery));

// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery/dist/jquery.min
//= require bootstrap/dist/js/bootstrap.min
//= require owl.carousel2/dist/owl.carousel.min
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

/* ======================== Preloader section ==========================*/

$(window).on('load', () => {
	$('#status').fadeOut();
	$('#preloader').delay(400).fadeOut('slow');
});

/* ======================== Preloader section ==========================*/

/* ======================== Team section ==========================*/

$(document).ready(() => {
	$("#team-members").owlCarousel({
		items: 2,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true
	});
});

/* ======================== Team section ==========================*/


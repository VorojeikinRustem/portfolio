$('.lang-own').click(function(){
	$('.lang-own').removeClass('active');
	$(this).addClass('active');
});

$('.ui.accordion')
  .accordion()
;

// Avatar animation
$('.header > .column > img.left')
  .transition({
    animation : 'pulse',
    reverse   : true,
    interval  : 200
  })
;

// Portfolio
$('.special.cards .image').dimmer({
  on: 'hover'
});

// Modal
$('.own-modal').click(function(){
	var id = $(this).attr('id');
	$('#modal-' + id) //.ui.modal
	  .modal('show')
	;
});

// Dropdown contact form
$('.ui.dropdown')
  .dropdown()
;

// Parallax
$('.own-main').parallax({imageSrc: '/static/img/background/background-main.jpg'});




$('a[href^="#"]').bind('click.smoothscroll',function (e) {
    e.preventDefault();
    var headerHeight = $('.own-header').outerHeight(),
        target = this.hash, 
        $target = $(target),
        $menuItem = $('.own-header .menu > a');
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - headerHeight
     }, 500, 'swing', function () {
     window.location.hash = target;
     });
    $menuItem.removeClass('active');
    $(this).addClass('active');
});

$(document).on("scroll", onScroll);
function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.menu a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
	

// Shape for testimonials
$(document).ready(function () {
    $('.shape').shape();
    setInterval(function(){
    	$('.shape').shape('flip left');
	},5000);
    $('.own-right').on('click', function () {
        $('.shape').shape('flip left');
    });
	$('.own-left').on('click', function () {
        $('.shape').shape('flip right');
    });
});

// Bug fix: jQuery 3.0 and owl.carousel 2.0.0 beta
$.fn.andSelf = function() {
  return this.addBack.apply(this, arguments);
}

var owl = $('.own-owl-carousel');
owl.owlCarousel({
    center:true,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    smartSpeed:700,
    items:1,
    dots:true,
});

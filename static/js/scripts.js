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
	
// Animate scroll to links. Swap active item on menu
/*$('a[href^="#"]').bind('click.smoothscroll',function (e) {
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
});*/

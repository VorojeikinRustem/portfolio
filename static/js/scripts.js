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
$('.modal-test').click(function(){
	$('.ui.modal')
	  .modal('show')
	;
});
// Pop Easy | jQuery Modal Plugin Version 1.0
// Created 2013 by Thomas Grauer
///////////////////////////////////////////////////////////////////////////////////////
(function($){
$.fn.modal= function(options){       
  options = $.extend({
	trigger: '.modalLink',
	olay: 'div.overlay',
	modals: 'div.modal',
	animationEffect: 'fadeIn',
	animationSpeed: 40,
	moveModalSpeed: 'fast',
	background: '222222',
	opacity: 0.8,
	openOnLoad: false,
	docClose: true,
	closeByEscape: true,
	moveOnScroll: true,
	resizeWindow: true,
	video:'',
	videoClass:'video',
	close:'.closeBtn'            
  },options); 
  var olay = $(options.olay);
  var modals = $(options.modals);
  var currentModal;
  var isopen=false; 
  if (options.animationEffect==='fadein'){options.animationEffect = 'fadeIn';}
  if (options.animationEffect==='slidedown'){options.animationEffect = 'slideDown';}  
  olay.css({opacity:0});		  
  if(options.openOnLoad){
	  openModal();
  }else{
	  olay.hide();
	  modals.hide();
  }  
  $(options.trigger).on('click',function(e){
	  e.preventDefault();
	  currentModal=$(modals);
	  openModal();
  });  
  function openModal(){
	  $('.' + options.videoClass).attr('src',options.video);
	  modals.hide();
	  currentModal.css({
		  top:$(window).height() /4 - currentModal.outerHeight() /2 + $(window).scrollTop(),
		  left:$(window).width() /2 - currentModal.outerWidth() /2 + $(window).scrollLeft()
	  });		  

		  olay.css({opacity : options.opacity, backgroundColor: '#'+options.background});
		  olay[options.animationEffect](options.animationSpeed);
		  currentModal.show();
	  	  
	  isopen=true;
  }  
  function moveModal(){
	  modals
	  .stop(true)
	  .animate({
	  top:$(window).height() /4 - modals.outerHeight() /2 + $(window).scrollTop(),
	  left:$(window).width() /2 - modals.outerWidth() /2 + $(window).scrollLeft()
	  },options.moveModalSpeed);
  }  
  function closeModal(){
	  isopen=false;
	  $('.'+options.videoClass).attr('src',''); 
	  modals.fadeOut(100, function(){
		  olay.fadeOut();
	  });
	  return false;
  }  
  if(options.docClose){
	  olay.bind('click', closeModal);
  }  
  $(options.close).bind('click', closeModal);  
  if (options.closeByEscape) {
	  $(window).bind('keyup', function(e){
		  if(e.which === 27){
			  closeModal();
		  }
	  });
  }  
  if(options.resizeWindow) {
	  $(window).bind('resize', moveModal);
  }else{
	  return false;
  }  
  if(options.moveOnScroll) {
	  $(window).bind('scroll', moveModal);
  }else{
	  return false;
  }
};
})(jQuery);

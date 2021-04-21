$(function(){

  $('.drop-menu').hide();

  $('a').click(function(){

    if($('.drop-down')=== 1){
      console.log($('.drop-down'))
      $(this).find('.drop-down').show()
    }else{
      $(this).find('.drop-down').hide()
    }
		
	});



})
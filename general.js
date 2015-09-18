function icon_slide(action){
	closegallery();
	closemapa();
	$('.icon_slide img').attr({	src: $('.icon_slide img').attr('data-other-src')         , 'data-other-src': $('.icon_slide img').attr('src') 	    })
	$('.icon_slide').attr({      onclick: $('.icon_slide ').attr('data-other-action')     , 'data-other-action': $('.icon_slide ').attr('onclick')    })
	if(action =="open"){
		$( ".sub_menu_left" ).animate({	    left: "130"	  }, 1000, function() {});
		$( ".menu_bottom" 	).animate({	    bottom: "0"	  }, 1000, function() {});
	}else{
		$( ".sub_menu_left" ).animate({	    left: "0"	  }, 1000, function() {});
		$( ".menu_bottom" 	).animate({	    bottom: "-100"	  }, 1000, function() {});
		if($( ".content_slide" ).is(":visible")){
			$('.sub_menu_left_item').removeClass("sub_menu_left_active");
			$( ".content_slide" ).animate({	     opacity: 0,  }, 1000, function() {	$( ".content_slide" ).hide(); });
		}
	}
}
$( document ).ready(function() {
	$('.sub_menu_left_item').click(function(){
		closegallery();
		$('.sub_menu_left_item').removeClass("sub_menu_left_active");
		$(this).addClass("sub_menu_left_active");
		content_to_show = $(this).attr('rel');
		$('.content_slide').show();
		$('.content_section').hide();
		$('.'+content_to_show).show();
		$( ".content_slide" ).animate({	     opacity: 1,  }, 1000, function() {});
		
		if(content_to_show=="content_oficinas" || content_to_show=="content_hotel" || content_to_show=="content_vivienda"){
			$('.menu_btn_fotos').hide();
			$('.menu_bottom').css('left',"41%");
		}else{
			$('.menu_btn_fotos').show();
			$('.menu_bottom').css('left',"36%");
		}
	});
	
	$('#saveData').click(function(){
		alert("a");
		var form_name= $('.form_nombre').val();
		var form_telefono= $('.form_telefono').val();
		var form_email= $('.form_email').val();
		var form_select= $('.form_select').val();
		var form_comentarios= $('.form_comentarios').val();
		var form_terminos= $('.form_terminos').val();
		console.log("form_name"+form_name);
		console.log("form_telefono"+form_telefono);
		console.log("form_email"+form_email);
		console.log("form_select"+form_select);
		console.log("form_comentarios"+form_comentarios);
		console.log("form_terminos"+form_terminos);
	});
});
function openRegister(){
	icon_slide('close');
	$('.wrapper_general').addClass('blur');
	$('.wrapper_general').children().hide();
	$('.lightbox_bg').show();
	$('.lightbox_bg').addClass("fadeIn animated");
}
function closeModal(){
	icon_slide('open');
	$('.wrapper_general').removeClass('blur');
	$('.wrapper_general').children().show();
	$('.lightbox_bg').removeClass("fadeIn animated");
	$('.lightbox_bg').hide();
}
function openmapa(){
	$('.icon_slide img').attr({	src: $('.icon_slide img').attr('data-other-src')         , 'data-other-src': $('.icon_slide img').attr('src') 	    })
	$('.icon_slide').attr({      onclick: $('.icon_slide ').attr('data-other-action')     , 'data-other-action': $('.icon_slide ').attr('onclick')    })
	$( ".sub_menu_left" ).animate({	    left: "0"	  }, 1000, function() {});
	$( ".menu_bottom" 	).animate({	    bottom: "-80"	  }, 1000, function() {});
	$('.wrapper_general_inicial').removeClass("fadeIn");
	$('.wrapper_general_inicial').addClass("fadeOut animated");
	if($( ".content_slide" ).is(":visible")){
		$('.sub_menu_left_item').removeClass("sub_menu_left_active");
		$( ".content_slide" ).animate({	     opacity: 0,  }, 1000, function() {	$( ".content_slide" ).hide(); });
	}
	
	$('.wrapper_general_mapa').show();
	$('.wrapper_general_mapa').addClass("fadeIn animated");
}
function closemapa(){
	$('.wrapper_general_mapa').hide();
	$('.wrapper_general_inicial').removeClass("fadeOut animated");
	$('.wrapper_general_inicial').addClass("fadeIn");
}
function opengallery(){
	$('.icon_slide img').attr({	src: $('.icon_slide img').attr('data-other-src')         , 'data-other-src': $('.icon_slide img').attr('src') 	    })
	$('.icon_slide').attr({      onclick: $('.icon_slide ').attr('data-other-action')     , 'data-other-action': $('.icon_slide ').attr('onclick')    })
	$( ".sub_menu_left" ).animate({	    left: "0"	  }, 1000, function() {});
	$( ".menu_bottom" 	).animate({	    bottom: "-80"	  }, 1000, function() {});
	$('.wrapper_general_inicial').removeClass("fadeIn");
	$('.wrapper_general_inicial').addClass("fadeOut animated");
	if($( ".content_slide" ).is(":visible")){
		$('.sub_menu_left_item').removeClass("sub_menu_left_active");
		$( ".content_slide" ).animate({	     opacity: 0,  }, 1000, function() {	$( ".content_slide" ).hide(); });
	}
	
	$('.wrapper_general_galerias').show();
	$('.wrapper_general_galerias').addClass("fadeIn animated");
}
function closegallery(){
	$('.wrapper_general_galerias').hide();
	$('.wrapper_general_inicial').removeClass("fadeOut animated");
	$('.wrapper_general_inicial').addClass("fadeIn");
}

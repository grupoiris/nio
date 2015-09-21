function icon_slide(action){
	closegallery();
	closerender();
	closemapa();
	closetour();
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
		closerender();
		closemapa();
		closetour();
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
			$('.menu_bottom').css('left',"38%");
		}
	});
	
	$('#saveData').click(function(){
		var form_name= $('.form_nombre').val();
		var form_telefono= $('.form_telefono').val();
		var form_email= $('.form_email').val();
		var form_select= $('.form_select').val();
		var form_comentarios= $('.form_comentarios').val();
		var form_terminos= $('.form_terminos').val();
		var flag = 0;
		
		$('.register_form input').css('border','0px');
		$('.register_form select').css('border','0px');
		$('.input_check').css('border','0px');
		
		
		if(form_telefono == ''){
			$('.form_telefono').css('border','1px solid #fff');
			flag = 1;
		}
		if(form_email == ''){
			$('.form_email').css('border','1px solid #fff');
			flag = 1;
		}
		if(form_select == 'Que proyecto te interesa'){
			$('.form_select').css('border','1px solid #fff');
			flag = 1;
		}
		if(form_name == ''){
			$('.form_nombre').css('border','1px solid #fff');
			flag = 1;
		}
		if(form_terminos == ''){
			$('.form_terminos').css('border','1px solid #fff');
			flag = 1;
		}
		if(!IsEmail(form_email)){
			$('.form_email').css('border','1px solid #fff');
			flag = 1;
		}
		if(flag==0){
			saveData(form_name, form_email, form_telefono, form_select, form_comentarios,form_terminos);
		}	
	});
});

function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
function closeTerms(){
	$('.check_terms').prop('checked', true);
	$('#modal_2').hide();
	$('#modal').show();
}
function openTerms(){
	$('#modal').hide();
	$('#modal_2').show();
}
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

function openResultados(){
	icon_slide('close');
	$('.wrapper_general').addClass('blur');
	$('.wrapper_general').children().hide();
	$('.lightbox_bg').show();
	$('.lightbox_bg').addClass("fadeIn animated");
	getSQL();
}
/*  ----------------      funciones tour    ------------ */
function opentour(){
	var myTour = document.getElementById("video_tour"); 
	myTour.play(); 
	$('.icon_slide img').attr({	src: $('.icon_slide img').attr('data-other-src')         , 'data-other-src': $('.icon_slide img').attr('src') 	    })
	$('.icon_slide').attr({      onclick: $('.icon_slide ').attr('data-other-action')     , 'data-other-action': $('.icon_slide ').attr('onclick')    })
	$( ".sub_menu_left" ).animate({	    left: "0"	  }, 1000, function() {});
	$( ".menu_bottom" 	).animate({	    bottom: "-80"	  }, 1000, function() {});
	$('.wrapper_general_inicial').removeClass("fadeIn");
	$('.wrapper_general_inicial').addClass("fadeOut animated");
	$('.left_side').animate({	    left: "-130px"	  }, 1000, function() {});
	if($( ".content_slide" ).is(":visible")){
		$('.sub_menu_left_item').removeClass("sub_menu_left_active");
		$( ".content_slide" ).animate({	     opacity: 0,  }, 1000, function() {	$( ".content_slide" ).hide(); });
	}
	
	$('.wrapper_general_tour').show();
	$('.wrapper_general_tour').addClass("fadeIn animated");
}
function closetour(){
	var myTour = document.getElementById("video_tour"); 
	//myTour.pause();
	/*$('#video_tour').html("");
	alert("a");
	var video_url = $('#video_tour').attr('rel');
	alert(video_url);
	$('#video_tour').html('<source src="'+video_url+'" type="video/mp4">');*/
	
	$('.left_side').animate({	    left: "0px"	  }, 500, function() {});
	$('.wrapper_general_tour').hide();
	$('.wrapper_general_inicial').removeClass("fadeOut animated");
	$('.wrapper_general_inicial').addClass("fadeIn");
}
/*  ----------------      funciones video    ------------ */
function openvideo(){
	var myVideo = document.getElementById("video_proyecto"); 
	myVideo.play(); 
	$('.icon_slide img').attr({	src: $('.icon_slide img').attr('data-other-src')         , 'data-other-src': $('.icon_slide img').attr('src') 	    })
	$('.icon_slide').attr({      onclick: $('.icon_slide ').attr('data-other-action')     , 'data-other-action': $('.icon_slide ').attr('onclick')    })
	$( ".sub_menu_left" ).animate({	    left: "0"	  }, 1000, function() {});
	$( ".menu_bottom" 	).animate({	    bottom: "-80"	  }, 1000, function() {});
	$('.wrapper_general_inicial').removeClass("fadeIn");
	$('.wrapper_general_inicial').addClass("fadeOut animated");
	$('.left_side').animate({	    left: "-130px"	  }, 1000, function() {});
	if($( ".content_slide" ).is(":visible")){
		$('.sub_menu_left_item').removeClass("sub_menu_left_active");
		$( ".content_slide" ).animate({	     opacity: 0,  }, 1000, function() {	$( ".content_slide" ).hide(); });
	}
	
	$('.wrapper_general_tour').show();
	$('.wrapper_general_tour').addClass("fadeIn animated");
}
function closevideo(){
	var myVideo = document.getElementById("video_proyecto"); 
	myVideo.pause(); 
	$('.left_side').animate({	    left: "0px"	  }, 500, function() {});
	$('.wrapper_general_tour').hide();
	$('.wrapper_general_inicial').removeClass("fadeOut animated");
	$('.wrapper_general_inicial').addClass("fadeIn");
}
/*  ----------------      funciones mapa    ------------ */
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

/*  ----------------      funciones galeria    ------------ */
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

/*  ----------------      funciones redes    ------------ */
function openrender(){
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
	
	$('.wrapper_general_renders').show();
	$('.wrapper_general_renders').addClass("fadeIn animated");
}
function closerender(){
	$('.wrapper_general_renders').hide();
	$('.wrapper_general_inicial').removeClass("fadeOut animated");
	$('.wrapper_general_inicial').addClass("fadeIn");
}

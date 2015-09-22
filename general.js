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
		if(content_to_show=="content_info" ||content_to_show=="content_oficinas" || content_to_show=="content_hotel" || content_to_show=="content_vivienda"){
			$('.menu_btn_fotos').hide();
			$('.menu_bottom').css('left',"41%");
		}else{
			$('.menu_btn_fotos').show();
			$('.menu_bottom').css('left',"38%");
		}
		
		$('.openGallery').attr("onclick","opengallery('"+content_to_show+"');");
	});
	
	$('#saveData').click(function(){
		var form_name= $('.form_nombre').val();
		var form_telefono= $('.form_telefono').val();
		var form_email= $('.form_email').val();
		var form_select= $('.form_select').val();
		var form_comentarios= $('.form_comentarios').val();
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
		if(!IsEmail(form_email)){
			$('.form_email').css('border','1px solid #fff');
			flag = 1;
		}
		if(flag==0){
			saveData(form_name, form_email, form_telefono, form_select, form_comentarios);
			alertify.success('Formulario guardado');
		}else{
			alertify.error('Valida Tu formulario');
		}
	});
	
	//  put class="doubleTap" on the elements you need to double tap
	$(".doubleTap").doubleTap(function(){
			alertify.success('double tap');
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
	/*var myTour = document.getElementById("video_tour"); 
	myTour.play();*/
	var video_url = $('.wrapper_general_tour').attr('rel');
	$('.wrapper_general_tour').html('<iframe width="100%" height="100%;" src="'+video_url+'"></iframe>');
	
	$('.icon_slide img').attr({	src: $('.icon_slide img').attr('data-other-src')         , 'data-other-src': $('.icon_slide img').attr('src') 	    })
	$('.icon_slide').attr({      onclick: $('.icon_slide ').attr('data-other-action')     , 'data-other-action': $('.icon_slide ').attr('onclick')    })
	$( ".sub_menu_left" ).animate({	    left: "0"	  }, 1000, function() {});
	$( ".menu_bottom" 	).animate({	    bottom: "-80"	  }, 1000, function() {
		$('.menu_bottom').hide();
	});
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
	$('.menu_bottom').show();
	$('.wrapper_general_tour').html("");	
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
	$( ".menu_bottom" 	).animate({	    bottom: "-80"	  }, 1000, function() {
		$('.menu_bottom').hide();
	});
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
	$('.menu_bottom').show();
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
	$( ".menu_bottom" 	).animate({	    bottom: "-80"	  }, 1000, function() {
		$('.menu_bottom').hide();
	});
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
	$('.menu_bottom').show();
	$('.wrapper_general_mapa').hide();
	$('.wrapper_general_inicial').removeClass("fadeOut animated");
	$('.wrapper_general_inicial').addClass("fadeIn");
}

/*  ----------------      funciones galeria    ------------ */
function opengallery(gallerytoshow){
	if(!gallerytoshow){
		gallerytoshow = "content_info";
	}
	$('.swiper-container').hide();
	$('.swiper-'+gallerytoshow).show();
	//var swiper = new Swiper('.swiper-'+gallerytoshow, {       pagination: '.swiper-pagination',      paginationClickable: true,      nextButton: '.swiper-button-next',  		prevButton: '.swiper-button-prev',       loop: true,       autoplay : 1000    });
	
	$('.icon_slide img').attr({	src: $('.icon_slide img').attr('data-other-src')         , 'data-other-src': $('.icon_slide img').attr('src') 	    })
	$('.icon_slide').attr({      onclick: $('.icon_slide ').attr('data-other-action')     , 'data-other-action': $('.icon_slide ').attr('onclick')    })
	$( ".sub_menu_left" ).animate({	    left: "0"	  }, 1000, function() {});
	$( ".menu_bottom" 	).animate({	    bottom: "-80"	  }, 1000, function() {
		$('.menu_bottom').hide();
	});
	$('.left_side').animate({	    left: "-130px"	  }, 1000, function() {});
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
	$('.left_side').animate({	    left: "0px"	  }, 500, function() {});
	$('.menu_bottom').show();
	$('.wrapper_general_galerias').hide();
	$('.wrapper_general_inicial').removeClass("fadeOut animated");
	$('.wrapper_general_inicial').addClass("fadeIn");
}

/*  ----------------      funciones redes    ------------ */
function openrender(){
	$('.swiper-container').hide();
	$('.swiper_renders').show();
	
	$('.icon_slide img').attr({	src: $('.icon_slide img').attr('data-other-src')         , 'data-other-src': $('.icon_slide img').attr('src') 	    })
	$('.icon_slide').attr({      onclick: $('.icon_slide ').attr('data-other-action')     , 'data-other-action': $('.icon_slide ').attr('onclick')    })
	$( ".sub_menu_left" ).animate({	    left: "0"	  }, 1000, function() {});
	$( ".menu_bottom" 	).animate({	    bottom: "-80"	  }, 1000, function() {
		$('.menu_bottom').hide();
	});
	$('.wrapper_general_inicial').removeClass("fadeIn");
	$('.wrapper_general_inicial').addClass("fadeOut animated");
	if($( ".content_slide" ).is(":visible")){
		$('.sub_menu_left_item').removeClass("sub_menu_left_active");
		$( ".content_slide" ).animate({	     opacity: 0,  }, 1000, function() {	$( ".content_slide" ).hide(); });
	}
	$('.wrapper_general_renders').show();
	$('.wrapper_general_renders').addClass("fadeIn animated");
	
	$('.left_side').animate({	    left: "-130px"	  }, 1000, function() {});
}
function closerender(){
	$('.left_side').animate({	    left: "0px"	  }, 500, function() {});
	$('.menu_bottom').show();
	$('.wrapper_general_renders').hide();
	$('.wrapper_general_inicial').removeClass("fadeOut animated");
	$('.wrapper_general_inicial').addClass("fadeIn");
}

/* ------------------------nio content ---------------- */

function nioContent(content_no){
	if(content_no==1){
		$( ".content_nio" ).show();
		$( ".content_nio" ).removeClass("fadeInRight animated");
		$( ".content_nio" ).addClass("fadeInRight animated");
		
		$( ".content_nio2" ).removeClass("fadeInRight animated");
		$( ".content_nio2" ).hide();
	}else{
		$( ".content_nio2" ).show();
		$( ".content_nio2" ).addClass("fadeInRight animated");
		
		$( ".content_nio" ).removeClass("fadeInRight animated");
		$( ".content_nio" ).hide();
		
	}
	
}

/*  evento double tap */
(function($) {
     $.fn.doubleTap = function(doubleTapCallback) {
         return this.each(function(){
			var elm = this;
			var lastTap = 0;
			$(elm).bind('vmousedown', function (e) {
                                var now = (new Date()).valueOf();
				var diff = (now - lastTap);
                                lastTap = now ;
                                if (diff < 250) {
		                    if($.isFunction( doubleTapCallback ))
		                    {
		                       doubleTapCallback.call(elm);
		                    }
                                }      
			});
         });
    }
})(jQuery);
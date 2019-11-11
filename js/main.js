$(document).ready( function(){
        $('.first-button').on('click', function () {

        $('.animated-icon1').toggleClass('open');
        });
    
        $('.vector').on('mouseover', function(){
            
                $(this).addClass('hover').css({
                    "background":"red",
              });
                    
             
            }).on('mouseout', function(){
              $(this).addClass('hover').css({
                    "background":"#6F6863",
              });
          });
    
        $('.vector1').on('mouseover', function(){
            
            
                $(this).addClass('hover').css({
                    "background":"red",
              });
                    
             
            }).on('mouseout', function(){
              $(this).addClass('hover').css({
                    "background":"#6F6863",
              });
          });
    
        $("#down_img").click(function(){
            $("html, body").animate({
                scrollTop: $(".main_our_history").offset().top
            },1000)
        });

        var middle = $('.btn_middle');
            $(window).scroll(function() {
          if ($(window).scrollTop() > 300) {
            middle.addClass('show');
          } else {
            btn.removeClass('show');
          }
        });
            middle.on('click', function(x) {
                x.preventDefault();
                $('html, body').animate({scrollTop:0}, '300');
            });

	
        var btn = $(".btn_end");
          btn.on('click', function(e) {
          e.preventDefault();
          $('html, body').animate({scrollTop:0}, '1000');
      });
	
    
})


  var y = document.getElementsByClassName("getyear");
  var d = new Date().getFullYear();
  y[0].innerHTML = d;

  $(document).ready(function(){
  		$(window).scroll(function(){
  			
  			_headeractive();
  			_scrollActive();
  			_sectAnimation();
  			
  		});
  		 _sectAnimation();

  		_headeractive = function(){
  			if($(window).scrollTop() > 300){
  				$('header').addClass('active');
  			}
  			else{
  				$('header').removeClass('active');
  			}
  		}

  		_scrollActive = function(){
  			var headerHt = $('header').outerHeight(),
  			    	sect = $('section'),
  			    	nav  = $('nav li');
  			
  			
  			sect.each(function(index){
  				var curPos = $(window).scrollTop() + 150,
  					   top = $(this).offset().top + headerHt,
  					bottom = top + $(this).outerHeight();
  				if(curPos >= top && curPos <= bottom){
  					nav.removeClass('active');
  					nav.eq(index).addClass('active');
  				}	
  				
  			});    	

  		}

  		$(document).on('click','nav li',function(){
            var ind = $(this).index();
            $('html,body').animate({scrollTop:$('section').eq(ind).offset().top - 60},1000);
      });
 
  var visible;
 function _sectAnimation(){
     $('.to-animate').each(function(index, element){

     var $this = $(this),dataAnimate = $(this).data('animate'),$delay = $(this).data('delay');
     visible = isInViewport(this);
      if(visible){     
            setTimeout(function(){
               $this.addClass(dataAnimate);
            },$delay);
        }
     });
      
  }


// Viewport function
 function isInViewport(node){
    var rect = node.getBoundingClientRect();
    return (
      (rect.height > 0 || rect.width > 0) &&
    rect.bottom >= 0 &&
    rect.right >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

  });


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


  // typewriter Js start
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
            var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.05em solid var(--bg-color)}";
        document.body.appendChild(css);
      }

// typewriter Js end


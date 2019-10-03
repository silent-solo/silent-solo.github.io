$('.nav-item').on('click', function(){
  var a = $('.nav-item.current');
  if (a) {
  a.removeClass('current');
  }
  $(this).addClass('current');
}); 


function Typewriting(element, delay) {  
  $(document).ready(function(){
    setTimeout( function(){
      if($("#site-type").length) {
        $(element).typed({
          strings: ["this is a typical geek blog", "about", "arch i3 anime wallp", 
                    "sorry", "programming, *nix, arts", "so enjoy", "and", "sudo love it"   ],
          typeSpeed: 120,
          backDelay: delay,
          loop: false,
          contentType: 'html', // or text
          // defaults to false for infinite loop
          loopCount: false,
        });
      }
    }, 3000);
  });
}

Typewriting(".typewrite span", "sudo love it", 400);

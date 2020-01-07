

function preloader (){
  $(document).ready(function(){
    setInterval(() => {
      let p = $('.preloader');
      p.css('opacity', 0);  
      setInterval(
        () => p.remove(),
        parseInt(p.css('--duration')) * 1000
      );
    }, 1000)  
  }); 
};

preloader();

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
        var typewriter = new Typewriter(element, {
          loop: false
        });        
      
      typewriter.typeString('Hi, dear User!')
          .pauseFor(2500)
          .deleteAll()
          .typeString('Welcome to my blog')
          .pauseFor(1500)
          .deleteAll()
          .typeString('about *nix, code, web-development, anime')
          .pauseFor(1500)
          .deleteChars(4)
          .typeString('rt-design, etc.')
          .pauseFor(2500)
          .deleteAll()
          .typeString('So, enjoy')
          .pauseFor(1500)
          .deleteAll()
          .typeString('and')
          .pauseFor(1500)
          .deleteAll()
          .typeString('sudo love IT')
          .start();
      }
    }, 3000);
  });
}

Typewriting(".typewrite span", 400);

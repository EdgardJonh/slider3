    //Declaracion de variables
    var $activeSlide = $('.active'),
    $homeSlide = $(".slide"),
    $slideNavPrev = $("#prev"),
    $slideNavNext = $("#next");
   
    function init(){
        TweenMax.set($homeSlide.not($activeSlide),{autoAlpha: 0});
        TweenMax.set($slideNavPrev, {autoAlpha: 0.2});
   
    }
    init();
    //Inicio de la funcion Next.......
    function goToNextSlide(slideOut, slideIn, SlideInAll){
        var t1 = new TimelineLite(),
        slideOutContent = slideOut.find('.card-content'),
        slideInContent = slideIn.find('.card-content'),
        slideOutImg = slideOut.find('card-img'),
        slideInImg = slideIn.find('card-img'),
        index = slideIn.index(),
        size = $homeSlide.length;
        console.log(index);
   
        if(slideIn.length !==0){
            t1
            .set(slideIn, {autoAlpha: 1, className: '+=active'})
            .set(slideOut,{className: '-=active'})
            .to(slideOutContent, 0.65, {y: "+=40px", ease: Power3.easeInOut},0)
            .to(slideOutImg, 0.65,{backgroundPosition :'bottom', ease: Power3.easeOut},0)
            .to(SlideInAll,1,{y:"-=100%", ease: Power3.easeInOut},0)
            .fromTo(slideInContent, 0.65,{y: '-=40px'}, {y: 0,ease:Power3.easeInOut}, "-=0.7")
            .fromTo(slideInImg, 0.65,{backgroundPosition: 'top'},
            {backgroundPosition: 'bottom', ease: Power3.easeInOut}, '-=0.7')
        }
        TweenMax.set($slideNavPrev,{autoAlpha: 1});
        if(index === size - 1){
            TweenMax.to($slideNavNext, 0.3, {autoAlpha: 0.2, ease:Linear.easeNone});
        }
    };
    $slideNavNext.click(function(e){
        e.preventDefault();
        var slideOut = $('.slide.active'),
        slideIn =$('.slide.active').next('.slide'),
        slideInAll =$('.slide');
        goToNextSlide(slideOut, slideIn, slideInAll);
    });
   
    //Inicio de la funcion Prev....
    function goToPrevSlide(slideOut, slideIn, SlideInAll){
        var t1 = new TimelineLite(),
        slideOutContent = slideOut.find('.card-content'),
        slideInContent = slideIn.find('.card-content'),
        slideOutImg = slideOut.find('card-img'),
        slideInImg = slideIn.find('card-img'),
        index = slideIn.index(),
        size = $homeSlide.length;
       //Elimino el console.log....
   
        if(slideIn.length !==0){
            t1
            .set(slideIn, {autoAlpha: 1, className: '+=active'})
            .set(slideOut,{className: '-=active'})
            .to(slideOutContent, 0.65, {y: "-=40px", ease: Power3.easeInOut},0)//quito el + por el -
            .to(slideOutImg, 0.65,{backgroundPosition :'top', ease: Power3.easeOut},0)//cambio el botom por top...
            .to(SlideInAll,1,{y:"+=100%", ease: Power3.easeInOut},0)//Cambio el - por el +..
            .fromTo(slideInContent, 0.65,{y: '+=40px'}, {y: 0,ease:Power3.easeInOut}, "-=0.7")//cambio el - por el +...
            .fromTo(slideInImg, 0.65,{backgroundPosition: 'bottom'},//Cambio el top por bottom...
            {backgroundPosition: 'top', ease: Power3.easeInOut}, '-=0.7')//cambio el bottom por top...
        }
        TweenMax.set($slideNavPrev,{autoAlpha: 1});
        if(index === 0){//borro zise por 0
            TweenMax.to($slideNavPrev, 0.3, {autoAlpha: 0.2, ease:Linear.easeNone});//cambio slide slideNavNext por slideNavPrev...
        }
    };
    $slideNavPrev.click(function(e){ //Cambio slideNavNext por slideNavPrev...
        e.preventDefault();
        var slideOut = $('.slide.active'),
        slideIn =$('.slide.active').prev('.slide'),//cambio next por prev...
        slideInAll =$('.slide');
        goToPrevSlide(slideOut, slideIn, slideInAll);//cambio goToNextSlide por goToPrevSlide
    });
$(document).ready(function(){
    let x = $(".span_counter").counter({
        autoStart: false, 
        countFrom: 0,          
        countTo: 76,  
        runonce: false,
        duration: 2600, 
    });
    
    $(".button_offcanvas").click(function(){
        $('.circular-progress').removeClass('test');
        setTimeout(function(){
            $('.circular-progress').addClass('test')
        }, 500);
        x.counter('start');
    });
});
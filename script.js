

$(document).ready(function(){
   
    $("a").on('click', function(scrolling){
        if(this.hash !==""){
           scrolling.preventDefault();
            var hash = this.hash;
            $('html, body').animate({scrollTop:$(hash).offset().top}, 800, function(){
  
            });
        }
    });
     
     });
     
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
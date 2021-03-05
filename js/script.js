const btn1 = document.querySelector(".go");

btn1.addEventListener("click", function(e){
	alert("Gracias por tu compra!'\n Vuelve pronto");
});

$(".accordion-title").click(function(){
		
	var contenido=$(this).next(".accordion-content");
			 
	if(contenido.css("display")=="none"){ //open		
	   contenido.slideDown(250);			
	   $(this).addClass("open");
	}
	else{ //close		
	   contenido.slideUp(250);
	   $(this).removeClass("open");	
   }
							 
 });
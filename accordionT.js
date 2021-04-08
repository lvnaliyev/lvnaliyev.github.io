const navSlide = () => {
    const burger = document.querySelector (`.burger`);
    const nav = document.querySelector (`.accordionmenu`);
    const navLinks = document.querySelectorAll(`accordionmenu ul`);

    burger.addEventListener (`click`,() => {
    		/*TOGGLE THE NAVIGATION*/
    		 nav.classList.toggle (`nav-active`);
    		/* Anumate Links */
   		   navLinks.forEach((link,index) => {
    	  	if (link.style.animation){
        			link.style.animation = ``
      		}else {
        			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
      		}
   		   });
    	  //Burger Animation
    	 burger.classList.toggle(`toggle`);
  	});
  }
  navSlide();


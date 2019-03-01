

	  /*====================================
      //  Equal Height Divs
      ======================================*/ 
      // Select and loop the container element of the elements you want to equalise
      $('.container').each(function(){
        
        // Cache the highest
        var highestBox = 0;
        
        // Select and loop the elements you want to equalise
        $('.single-box', this).each(function(){
          
          // If this box is higher than the cached highest then store it
          if($(this).height() > highestBox) {
            highestBox = $(this).height(); 
          }
        
        });
              
        // Set the height of all those children to whichever was highest 
        $('.single-box', this).height(highestBox);
                      
      });

	  
	  
	  
	  
	  
	  

      /*====================================
      //  Equal Height Divs
      ======================================*/ 
      // Select and loop the container element of the elements you want to equalise
      $('.container-fluid').each(function(){
        
        // Cache the highest
        var highestBox = 0;
        
        // Select and loop the elements you want to equalise
        $('.program-box, .gallery-grid .single-notice', this).each(function(){
          
          // If this box is higher than the cached highest then store it
          if($(this).height() > highestBox) {
            highestBox = $(this).height(); 
          }
        
        });
              
        // Set the height of all those children to whichever was highest 
        $('.program-box, .gallery-grid .single-notice', this).height(highestBox);
                      
      });

document.addEventListener('DOMContentLoaded', function() {
    // When the event DOMContentLoaded occurs, it is safe to access the DOM
  
    // When the user scrolls the page, execute myFunction 
    window.addEventListener('sticky-header', sticky);
    window.onscroll = function() { sticky() };
    // Get the navbar
    var header = document.getElementById(`sticky-header`);
  
    // Get the offset position of the navbar
    var stick = header.offsetTop;
  
    // Add the sticky class to the navbar when you reach its scroll position. 
    // Remove "sticky" when you leave the scroll position
  
    function sticky() {
     
      if (window.pageYOffset > stick) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  
  })
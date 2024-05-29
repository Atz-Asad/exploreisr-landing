
(function ($) {
  "use strict";
    if ($('.scroll_to_top').length > 0) {

        document.addEventListener("DOMContentLoaded", function() {
            const scrollToTopButton = document.querySelector('.scroll_to_top');
        
            // Show the button when user scrolls down
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 500) {
                    scrollToTopButton.classList.add('show');
                } else {
                    scrollToTopButton.classList.remove('show');
                }
            });
        
            // Smooth scroll back to top
            scrollToTopButton.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        });
        
    };

    // AOS.init();

    // wow js active
    wowfunction();
    function wowfunction() {
        new WOW().init();
    }



})(jQuery);
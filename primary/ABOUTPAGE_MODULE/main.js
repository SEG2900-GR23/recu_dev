document.addEventListener('DOMContentLoaded', function () {
      
    var readMoreButton = document.querySelector('.button');
    var hiddenElements = document.querySelectorAll('.importance,.value_title_importance_');

   
    hiddenElements.forEach(function (element) {
      element.style.display = 'none';
    });

   
    readMoreButton.addEventListener('click', function () {
      
      hiddenElements.forEach(function (element) {
        element.style.display = (element.style.display === 'none') ? 'block' : 'none';
      });

     
      if (hiddenElements[0].style.display === 'block') {
        animateElements(hiddenElements);
      }
    });

    function animateElements(elements) {
      elements.forEach(function (element, index) {
        setTimeout(function () {
          element.style.opacity = 1;
        }, index * 500); 
      });
    }
  });
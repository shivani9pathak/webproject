document.addEventListener('DOMContentLoaded', function() {
    const solutionToggles = document.querySelectorAll('.solution-toggle');
  
    solutionToggles.forEach(function(toggle) {
      toggle.addEventListener('click', function() {
        const solutionContent = this.nextElementSibling;
        if (solutionContent.style.display === 'none' || solutionContent.style.display === '') {
          solutionContent.style.display = 'block';
        } else {
          solutionContent.style.display = 'none';
        }
      });
    });
  });
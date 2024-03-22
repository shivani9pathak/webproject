// Select all elements with the class "solution-button"
const solutionButtons = document.querySelectorAll(".solution-button");

// Loop through each button
solutionButtons.forEach(button => {
  button.addEventListener("click", function() {
    // Get the element containing the solution text (replace ".solution-content" with the actual class name)
    const solutionContent = this.nextElementSibling;

    // Toggle the visibility of the solution content
    solutionContent.classList.toggle("hidden");
  });
});
const caseStudyLinks = document.querySelectorAll('.case-study-link');
const solutionToggles = document.querySelectorAll('.solution-toggle');

caseStudyLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor link behavior
    const targetSectionId = this.getAttribute('href');
    const targetSection = document.getElementById(targetSectionId);
    // Scroll to the target section smoothly (optional)
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

solutionToggles.forEach(toggle => {
  toggle.addEventListener('click', function() {
    const solutionContent = this.nextElementSibling;
    solutionContent.classList.toggle('show'); // Toggle visibility of solution content
  });
});
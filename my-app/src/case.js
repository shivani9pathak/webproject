const caseStudies = [
    // Replace with your actual case study data, including titles and links
    { title: "Saving for College: Sarah's Journey", link: "case_study_1.html" },
    { title: "...", link: "..." },
    // ... add objects for 8 more case studies
  ];
  
  const caseStudyDropdown = document.querySelector('.dropdown');
  const caseStudyList = document.querySelector('.dropdown-content');
  
  // Create and append case study links dynamically
  caseStudies.forEach(caseStudy => {
    const link = document.createElement('a');
    link.href = caseStudy.link;
    link.textContent = caseStudy.title;
    caseStudyList.appendChild(link);
  });
  
  // Show/hide dropdown on hover
  caseStudyDropdown.addEventListener('mouseover', () => {
    caseStudyList.classList.add('show');
  });
  
  caseStudyDropdown.addEventListener('mouseout', () => {
    caseStudyList.classList.remove('show');
  });
  const homeButton = document.getElementById('homeButton');

homeButton.addEventListener('click', () => {
  window.scrollTo(0, 0); // Scroll to the top of the page
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
    const solutionContent = this.closest('solution-content');
    if (solutionContent) {
      // Toggle visibility of the solution content
      solutionContent.classList.toggle('show');
    } else {
      console.error("Solution content element not found for this button.");
    }
 

    solutionContent.classList.toggle('show'); // Toggle visibility of solution content
  });
});
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
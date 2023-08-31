var typed = new Typed('.typer', {
  strings: [' SE Student.', ' Photographer.','Social Media Manager.'],
  typeSpeed:100,
  backSpeed:100,
  loop:true
  });
let valueNumbers = document.querySelectorAll(".exp-number");
let interval = 2000;

valueNumbers.forEach((valueNumber) => {
  let startValue = 0;
  let endValue = parseInt(valueNumber.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(() => {
    startValue += 1;
    valueNumber.textContent = startValue;

    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});


document.addEventListener("click",function(e){
  if (e.target.classList.contains("gallery-item")){
    const src=e.target.getAttribute("src");
    document.querySelector(".modal-img").src= src;
    const myModal=new bootstrap.Modal(document.getElementById('gallery-modal'))
    myModal.show();
  }

})
const homeLink = document.getElementById('home-link');
const aboutLink = document.getElementById('about-link');
const contactLink = document.getElementById('contact-link');
const portfoliolink = document.getElementById('portfolio-link');
const skillsLink= document.getElementById('skills-link');
const servicesLink= document.getElementById('services-link');

const homeSection = document.getElementById('home-section');
const aboutSection = document.getElementById('about-section');
const contactSection = document.getElementById('contact-section');
const servicesSection = document.getElementById('services-section');
const portfolioSection = document.getElementById('portfolio-section');
const skillsSection = document.getElementById('skills-section');

// Add click event listeners to the links
homeLink.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior
  homeSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the home section
});

aboutLink.addEventListener('click', function(event) {
  event.preventDefault();
  aboutSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the about section
});

contactLink.addEventListener('click', function(event) {
  event.preventDefault();
  contactSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the contact section
});
servicesLink.addEventListener('click', function(event) {
  event.preventDefault();
  servicesSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the service section
});
portfoliolink.addEventListener('click', function(event) {
  event.preventDefault();
 portfolioSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the service section
});
skillsLink.addEventListener('click', function(event) {
  event.preventDefault();
skillsSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the service section
});
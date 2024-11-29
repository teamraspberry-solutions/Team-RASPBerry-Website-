const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
  
    burger.addEventListener('click', () => {
      // Toggle Nav
      nav.classList.toggle('nav-active');
  
      // Animate Links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
      });
  
      // Burger Animation
      burger.classList.toggle('toggle');
    });
  }
  
  navSlide();
  
  // Example of dynamic description toggle
  const descriptions = [
    "Member 1 is the team leader, ensuring the project stays on track.",
    "Member 2 specializes in AI integration and problem-solving.",
    "Member 3 handles the hardware assembly with precision.",
    "Member 4 is responsible for the coding and software development.",
    "Member 5 designs the UI and UX for the robot.",
    "Member 6 works on quality control and testing to ensure reliability."
  ];
  
  document.querySelectorAll('.team-member').forEach((member, index) => {
    member.addEventListener('click', () => {
      const description = member.querySelector('p');
      description.textContent = descriptions[index];
    });
  });
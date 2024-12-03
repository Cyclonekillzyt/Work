document.addEventListener('scroll', function() {
  const profilePic = document.getElementById('profile-pic');
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const aboutSection = document.getElementById('about');
  const servicesSection = document.getElementById('services');
  const portfolioSection = document.getElementById('portfolio');
  const hireSection = document.getElementById('hire');
  const fadeInElements = document.querySelectorAll('.fade-in');

  if (scrollPosition < aboutSection.offsetTop) {
      profilePic.style.transform = `scale(${1 - scrollPosition / windowHeight})`;
      profilePic.style.opacity = `${1 - scrollPosition / windowHeight}`;
  } else {
      profilePic.style.transform = 'scale(0.1)';
      profilePic.style.opacity = '0';
  }

  fadeInElements.forEach(element => {
      if (scrollPosition + windowHeight > element.offsetTop + element.offsetHeight / 2) {
          element.classList.add('visible');
      }
  });
});
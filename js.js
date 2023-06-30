window.addEventListener('scroll', function() {
    var logoContainers = document.querySelectorAll('.logo');
  
    logoContainers.forEach(function(logoContainer) {
      var scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  
      if (scrollPercentage > 30) {
        logoContainer.classList.add('hidden');
      } else {
        logoContainer.classList.remove('hidden');
      }
    });
  });
  
function toggleNavbar() {
    var navbarMenu = document.getElementById("navbarMenu");
    navbarMenu.style.display = navbarMenu.style.display === "none" ? "flex" : "none";
  }
  
  window.addEventListener("resize", function() {
    var navbarMenu = document.getElementById("navbarMenu");
    if (window.innerWidth > 600) {
      navbarMenu.style.display = "flex";
    } else {
        navbarMenu.style.display = "none";
    }
  });
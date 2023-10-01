window.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 100) { // Adjust the scroll threshold as needed
      navbar.classList.remove("notScrolled");
      navbar.classList.add("scrolled");
      console.log("Scrooled")
    } else {
      navbar.classList.remove("scrolled");
      navbar.classList.add("notScrolled");
      console.log("NotScrooled");
    }
  });
  
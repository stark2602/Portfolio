document.addEventListener("DOMContentLoaded", function () {
    const rows = document.querySelectorAll(".row");
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); 
          observer.unobserve(entry.target); 
        }
      });
    }, {
      threshold: 0.5 
    });
  
    rows.forEach(row => {
      observer.observe(row); 
    });
  });
  
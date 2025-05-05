 
        const header = document.querySelector("header");
        const menuBtn = document.querySelector("#menu-btn");
        const closemenuBtn= document.querySelector("#close-menu-btn");
// toggle mobile menu on menu button click
        menuBtn.addEventListener("click", () => {
            header.classList.toggle ("show-mobile-menu");

        });
 // close mobile menu on menu button click
        closemenuBtn.addEventListener("click", () => {
            menuBtn.click();

        });
 
        
  

// form
        document.querySelectorAll("form").forEach(form => {
            form.addEventListener("submit", function(event) {
                event.preventDefault();
                alert("Form submitted successfully!");
            });
        });
    

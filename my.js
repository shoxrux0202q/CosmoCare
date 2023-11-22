// FAQ section scripts
const faqButtons = document.querySelectorAll(".opener");

//using forEach we can access to each of the buttons. 
faqButtons.forEach( (button, index) => {
    //each button will have a click function 
    button.addEventListener("click", () => {
      //selecting the clicked button content. 
      const content = document.querySelectorAll(".faq-content")[index]

      // make the clicked button content visible, if visible then make it unvisible
      if (content.classList.contains("active-content")) {
        content.classList.remove("active-content");
      } else {
        // Hide all other contents
        const allContents = document.querySelectorAll(".faq-content");
        allContents.forEach(function(item) {
          item.classList.remove("active-content");
        });
        content.classList.add("active-content"); //adding classname to make the active content 
      }
      // to make the icon animates I added animate-icon when the that one content is open the icon will rotate. 
      const icon = document.querySelectorAll(".open-icon")[index]
      icon.classList.toggle("animate-icon");
    });

  });

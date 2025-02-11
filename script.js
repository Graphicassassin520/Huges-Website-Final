document.addEventListener("DOMContentLoaded", function () {
  /* Mobile Hamburger Menu Toggle */
  const mobileMenu = document.getElementById("mobile-menu");
  const navList = document.querySelector(".nav");

  mobileMenu.addEventListener("click", function () {
    navList.classList.toggle("active");
  });

  /* FAQ Toggle */
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", function () {
      // Toggle active class on the faq item to expand/collapse answer
      item.classList.toggle("active");
    });
  });

  /* Contact Form Validation */
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      return;
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // On successful validation, simulate sending the message.
    alert("Thank you for your message. We will get back to you soon!");
    contactForm.reset();
  });
});

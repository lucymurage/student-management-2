const contactForm = document.querySelector("#contact-form");
const contactFeedback = document.querySelector("#contact-feedback");

if (contactForm && contactFeedback) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        contactFeedback.textContent = "Thank you. Your message has been sent.";
        contactForm.reset();
    });
}
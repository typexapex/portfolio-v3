// variables for link buttons
const contactButton = document.querySelector('#contact');
// event listeners
contactButton.addEventListener('click', () => {
  fetchContactText();
  fetchContactForm();
});
// functions to add about and tech to windows A and B
function fetchContactText() {
  const contactText =
     `
      <div class="contact-text-card">
        <h2>Contact Me!</h2>
        <div class="line"></div>
        <p>Looking for a new teammate?</p>
        <p>Or maybe just a coffee?</p>
      </div>
    `;
  windowA.innerHTML = contactText;
};

function fetchContactForm() {
  const contactForm =
    `
    <div class="contact">
      <h2 class="contact-header">Let's Connect!</h2>
      <form action="https://formspree.io/f/xpzkjdro" method="POST">
        <input type="email" name="_replyto" placeholder="your email here" id="email-address"><br><br>
        <textarea name="message" placeholder="your message here" id="email-message"></textarea><br><br>
        <button type="submit" class="contact-button">Send</button>
      </form>
    </div>
  `;
  windowB.innerHTML = contactForm;
};
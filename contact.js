// variables for link buttons
const contactButton = document.querySelector('#contact');
// event listeners
contactButton.addEventListener('click', () => {
  fetchContactText(event);
  fetchContactForm(event);
});
// functions to add about and tech to windows A and B
function fetchContactText(event) {
  const contactText =
     `
      <div class="contact-text-card">
        <h2 class="contact-header">Contact Me!</h2>
        <div class="line"></div>
        <p class="contact-p1">Looking for a new teammate?</p>
        <p class="contact-p2">Or maybe just a coffee?</p>
        <p class="contact-p3">Drop me a line! I'm always happy to chat!</p>
      </div>
    `;
  windowA.innerHTML = contactText;
  event.preventDefault();
};

function fetchContactForm(event) {
  const contactForm =
    `
    <div class="contact-form-card">
      <form action="https://formspree.io/f/xpzkjdro" method="POST">
        <input type="email" name="_replyto" placeholder="your email here" id="email-address"><br><br>
        <textarea name="message" placeholder="your message here" id="email-message"></textarea><br><br>
        <button type="submit" class="contact-button">Send</button>
      </form>
    </div>
  `;
  windowB.innerHTML = contactForm;
  event.preventDefault();
};

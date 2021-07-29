// variables for link buttons
const aboutButton = document.querySelector('#about');
// variables for windows
const windowA = document.querySelector('.main-a');
const windowB = document.querySelector('.main-b');
// event listeners
aboutButton.addEventListener('click', () => {
  fetchAbout(event);
  fetchTech(event);
});
// functions to add about and tech to windows A and B
function fetchAbout(event) {
  const aboutCard =
     `
      <div class="about-card">
        <h2>Me, In a Nutshell</h2>
        <div class="line"></div>
        <p>From the US 🇺🇸, but living in Japan 🇯🇵 since 2015.</p>
        <h3>Skillset</h3>
        <p>I'm experienced with the processes of product creation, from concept to wireframing, to prototyping, to production. I enjoy making unique, user-friendly interfaces the most.</p>
        <h3>When I'm Not Coding</h3>
        <p>I enjoy playing PC games, listening to podcasts, and eating delicious food!</p>
      </div>
    `;
  windowA.innerHTML = aboutCard;
  event.preventDefault();
};

function fetchTech(event) {
  const techCard =
    `
    <div class="tech-card">
      <h2>Tech Stack</h2>
      <div class="line" id="tech-line"></div>
      <h3>Languages</h3>
      <div>
        <i class="devicon-css3-plain" id="tech-icon"></i>
        <i class="devicon-html5-plain" id="tech-icon"></i>
        <i class="devicon-javascript-plain id="tech-icon""></i>
        <i class="devicon-ruby-plain" id="tech-icon"></i>
      </div>
      <h3>Frameworks and Libraries</h3>
      <div>
        <i class="devicon-bootstrap-plain" id="tech-icon"></i>
        <i class="devicon-postgresql-plain" id="tech-icon"></i>
        <i class="devicon-rails-plain" id="tech-icon"></i>
        <i class="devicon-sass-original" id="tech-icon"></i>
      </div>
      <h3>Tools</h3>
      <div>
        <i class="devicon-figma-plain" id="tech-icon"></i>
        <i class="devicon-git-plain" id="tech-icon"></i>
        <i class="devicon-github-original" id="tech-icon"></i>
        <i class="devicon-heroku-original" id="tech-icon"></i>
        <i class="devicon-trello-plain" id="tech-icon"></i>
        <i class="devicon-vscode-plain" id="tech-icon"></i>
      </div>
    </div>
  `;

  windowB.innerHTML = techCard;
  event.preventDefault();
};

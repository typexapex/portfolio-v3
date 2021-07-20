// object to hold all the project data
const projectList = {
  splitIt : {
    "name" : "Split It",
    "description" : "Split it is a mobile-first progressive web app that I helped create during my time at Le Wagon Tokyo. My team and I coded the entire project over a period of 2 weeks in June 2021, and I pitched it at Le Wagon's Pitch Night on Friday, June 11 to a crowd of ~80 on Zoom. My main contribution was on the front-end, although I had a hand in almost every area.",
    "tech" : "<i class='devicon-rails-plain'></i><i class='devicon-ruby-plain'></i><i class='devicon-javascript-plain'></i><i class='devicon-html5-plain'></i><i class='devicon-sass-original'></i><i class='devicon-heroku-original'></i><i class='devicon-trello-plain'></i><i class='devicon-figma-plain'></i><i class='devicon-postgresql-plain'></i><i class='devicon-github-original'></i><i class='devicon-git-plain'></i>",
    "image" : "images/split-it-group_iphone12black_portrait.png",
    "site" : "http://www.split-it.me",
    "code" : "https://github.com/typexapex/split-it"
  },
  chefSpace : {
    "name" : "Chef Space",
    "description" : "Chef Space is an AirBnb clone website that I helped create during my time studying at Le Wagon in Tokyo. My team and I coded the entire project over a period of 5 days in May 2021. For this project, I was the project manager and also contributed to all parts of the project.",
    "tech" : "<i class='devicon-rails-plain'></i><i class='devicon-ruby-plain'></i><i class='devicon-javascript-plain'></i><i class='devicon-html5-plain'></i><i class='devicon-sass-original'></i><i class='devicon-heroku-original'></i> <i class='devicon-trello-plain'></i><i class='devicon-figma-plain'></i><i class='devicon-postgresql-plain'></i><i class='devicon-github-original'></i><i class='devicon-git-plain'></i>",
    "image" : "images/chef-space-map.png",
    "site" : "http://chefspcae.herokuapp.com/",
    "code" : "https://github.com/typexapex/bill-bnb"
  }
};
// variables for link buttons
const splitButton = document.querySelector('#split');
const chefButton = document.querySelector('#chef');
// event listeners for SPLIT IT
splitButton.addEventListener('click', () => {
  fetchSplitText(event);
  fetchSplitImage(event);
});
// functions for SPLIT IT
function fetchSplitText(event) {
  const splitTextCard =
    `
    <div class="project-text">
      <h2>${projectList.splitIt.name}</h2>
      <div class="line"></div>
      <p>${projectList.splitIt.description}</p>
    </div>
    <div class="project-tech">
      ${projectList.splitIt.tech}
    </div>
  `;
  windowA.innerHTML = splitTextCard;
  event.preventDefault();
};

function fetchSplitImage(event) {
  const splitImageCard =
  `
  <div class="project-img">
    <img src='${projectList.splitIt.image}' id="split-img">
  </div>
  <div class="button-container">
    <div class="button" id="site">
      <a href='${projectList.splitIt.site}' target="blank" class="project-link">Site</a>
    </div>
    <div class="button" id="site">
      <a href='${projectList.splitIt.code}' target="blank" class="project-link">Code</a>
    </div>
  </div>
  `;
  windowB.innerHTML = splitImageCard;
  event.preventDefault();
};

// event listener for CHEF SPACE
chefButton.addEventListener('click', () => {
  fetchChefText(event);
  fetchChefImage(event);
});
// functions for CHEF SPACE
function fetchChefText(event) {
  const chefTextCard =
    `
    <div class="project-text">
      <h2>${projectList.chefSpace.name}</h2>
      <div class="line></div>"
      <p>${projectList.chefSpace.description}</p>
    </div>
    <div class="project-tech">
      ${projectList.chefSpace.tech}
    </div>
  `;
  windowA.innerHTML = chefTextCard;
  event.preventDefault();
};

function fetchChefImage(event) {
  const chefImageCard =
  `
  <div class="project-img">
    <img src='${projectList.chefSpace.image}' id="chef-img">
  </div>
  <div class="button-container">
    <div class="button" id="site">
      <a href='${projectList.chefSpace.site}' target="blank" class="project-link">Site</a>
    </div>
    <div class="button" id="site">
      <a href='${projectList.chefSpace.code}' target="blank" class="project-link">Code</a>
    </div>
  </div>
  `;
  windowB.innerHTML = chefImageCard;
  event.preventDefault();
};

// variable for projects button
const projectsButton = document.querySelector('#projects');
const mainMenu = document.querySelector('.main-menu');
const subMenu = document.querySelector('.projects-menu');
// event listener
projectsButton.addEventListener('click', () => {
  boxShadTransition(event);
  subMenuTransition(event);
});
// function to transition the box shadow
function boxShadTransition(event) {
  mainMenu.classList.toggle("proj-sub-open");
  event.preventDefault();
};
// function to transition the sub-menu
function subMenuTransition(event) {
  subMenu.classList.toggle("proj-closed");
  subMenu.classList.toggle("proj-open");
  event.preventDefault();
};

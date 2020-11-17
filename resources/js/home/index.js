import { Logo } from './animations/logo';
import SkillBtn from './SkillSection/SkillBtn';
import ProjectSection, { addProject } from './ProjectsSection/ProjectsSection';
// const ScrollTrigger = require('scrolltrigger-classes');

// document.addEventListener('DOMContentLoaded', function() {
// 	var trigger = new ScrollTrigger();
// });

$(document).ready(function() {
	Logo.initLogoSpin();

  console.log(projects)

  const projectSection = new ProjectSection(projects, renderedProjectsCount);

  $('.more-btn p').on('click', () => {
    console.log('test')
    projectSection.addProject();
  });
});

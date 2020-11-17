import { Logo } from './animations/logo';
import SkillBtn from './SkillSection/SkillBtn';
import {initMoreProjectsBtn} from './ProjectsSection/MoreProjectsBtn';
import ProjectSection from './ProjectsSection/ProjectsSection';


$(document).ready(function() {
	Logo.initLogoSpin();
  // projects = [] from laravel
  // renderedProjectsCount = int from Laravel
	initMoreProjectsBtn(new ProjectSection(projects, renderedProjectsCount));
});

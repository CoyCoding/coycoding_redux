export default class ProjectSection {
	constructor(projects, currIndex) {
		this.projects = projects.reverse();
		this.currIndex = currIndex;
		if(currIndex < this.projects.length){
			$('.more-btn').removeClass('hidden');
		}
	}

	addProject(projectsToAdd = 1) {
		for (var i = 0; i < projectsToAdd; i++) {
			if (this.currIndex++ < this.projects.length) {
				$('.projects-grid .project.hidden').first().removeClass('hidden').addClass('animate-in');
			}
		}

		// hide button once projects all loaded.
		if (this.currIndex >= this.projects.length) {
			$('.more-btn').addClass('hidden');
		}
	}
}

export default class DOMProjects {
	constructor(projectArr) {
		this.projectArr = projectArr;
	}
	getProject() {
		if (this.projectArr.length) {
			const project = this.projectArr.pop();
			return ``;
		}
	}

	getBulletPointsDOM(project){
		const test = project.bulletPoints.map(skill=>{
			return `<div class="bullet-point"><i class="fas fa-circle"></i>${skill}</div>`
		})
		return test.join('');
	}

	getProductDescription(project){
		return project.description;
	}

	getAuthorsNotes(project){
		return project.authorsNotes
		? `<p><b>Authors Notes: </b>${project.authorsNotes}</p>`
		:	'';
	}

	getRemainingProjectsCount() {
		return this.projectArr.length;
	}
}

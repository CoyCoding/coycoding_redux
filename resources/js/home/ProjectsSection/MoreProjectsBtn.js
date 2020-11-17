export const initMoreProjectsBtn = (projectSection) => {
  $('.more-btn p').on('click', () => {
    projectSection.addProject();
  });
}
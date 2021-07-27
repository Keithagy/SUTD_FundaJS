/* EXERCISE: make each section collapsible */

// function makeSectionCollapsible(btnId, sectionId, sections) {
//   // TODO: get button and the section
//   const btn = document.querySelector(`#${btnId}`);
//   const section = document.querySelector(`#${sectionId}`);
//   // TODO: hide the section
//   section.classList.add('hidden');

//   // TODO: listen for click event on the button
//   btn.addEventListener('click', function () {
//     section.classList.toggle('hidden');
//   });
// }

// makeSectionCollapsible('toggle-btn-0', 'section-0');
// makeSectionCollapsible('toggle-btn-1', 'section-1');
// makeSectionCollapsible('toggle-btn-2', 'section-2');
// makeSectionCollapsible('toggle-btn-3', 'section-3');

const collapsibleBtns = Array.from(document.querySelectorAll('.px-2'))
collapsibleBtns.forEach(btn => {
  const panelID = btn.getAttribute('aria-controls')
  const panel = document.querySelector(`#${panelID}`)
  if (panel) {
    panel.classList.add('hidden')
    btn.addEventListener('click', () => panel.classList.toggle('hidden'))
  }
})
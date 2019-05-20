
// const pullRequestsTabActive = () => {
//   // get the issue tab arrow
//   const issueArrow = document.querySelector('#issues-arrow');
//   // get the issue cards div
//   const issueCards = document.querySelector('.github-issue-card');
//   // get the pull request cards div
//   const pullRequestsCards = document.querySelector('.github-pull-request-card');
//     issueCards.classList.toggle('active');
//     pullRequestsCards.classList.toggle('hide');
// }

// export const tabToggle = () => {
//   // get the issue tab div
//   const issueTab = document.querySelector('.issues-tab');
//   // get the pull request tab div
//   const pullRequestsTab = document.querySelector('.pull-requests-tab');
//   if pullRequestsTab.addEventListener('click', function(){
//     pullRequestsTabActive();
//   };
// };

const active = () => {
  const tab = document.querySelector(.tab-underlined.active)

  if tab.addEventListener('click', (event) => {
    tab.classList.toggle('active');
  })
}

export {active};


const toggleTab = () => {
// get the github-issue-card divs
  const issueCards = document.querySelectorAll('.github-issue-card');

// get the github-pull-request divs
  const pullRequestsCards = document.querySelectorAll('.github-pull-request-card');

// get the pull-requests tab
  const pullRequestsTab = document.querySelector('.pull-requests-tab');

  if pullRequestsTab.addEventListener('click', (event) => {
    pullRequestsCards.style.display = 'block';
    issueCards.style.display = 'none';
  });
};

export {toggleTab};

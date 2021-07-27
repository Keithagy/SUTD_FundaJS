// use an IIFE to keep everything inside function scope

(function setupSignup() {
  // listen for click on #signup-button
  const signupBtn = document.querySelector('#signup-button');
  let timerID;
  signupBtn.addEventListener('click', function () {
    clearTimeout(timerID);
    // remove 'hidden' class on #signup-notification
    const notification = document.querySelector('#signup-notification');
    notification.classList.remove('hidden');

    // add the 'hidden' class back after 2 second
    timerID = setTimeout(() => notification.classList.add('hidden'), 2000);
  });
})();

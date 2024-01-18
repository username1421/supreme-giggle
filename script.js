// const loadMoreButtonSelector = ".es-load-more-button [class*='ButtonBase__Overlay-sc']";

// function loadMoreStep(loadMoreButton) {
//   loadMoreButton.click();

//   console.log('Click');

//   setTimeout(() => {
//     loadMoreButton = document.querySelector(loadMoreButtonSelector);
//     if (loadMoreButton) {
//       loadMoreStep();
//     }
//   }, 100);
// };

// widget.on('init', (args) => {
//   const isBot = /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent);

//   if (isBot) {
//     let loadMoreButton = document.querySelector(loadMoreButtonSelector);

//     loadMoreStep(loadMoreButton);
//   }
// });
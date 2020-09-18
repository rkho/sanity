// const trendingLabel = {
//   ar: "الخطّ الزمنيّ: المتداوَل الآن",
//   de: 'Timeline: Aktuelle Trends',
//   en: 'Timeline: Trending now',
//   eu: 'Denbora lerroa: Joera orain',

// };

// var language = document.getElementsByTagName('html')[0].getAttribute('lang');
// console.log(language);

setInterval(function () {
  // JP: Timeline: Trend

  var trending = document.querySelector('[class="css-1dbjc4n r-1uaug3w r-1uhd6vh r-1ylenci r-1phboty r-rs99b7 r-ku1wi2 r-1udh08x"]');
  var explore = document.querySelector('[href="/explore"]');

  if (trending) {
    trending.parentElement.removeChild(trending);
  }

  if (explore) {
    explore.parentElement.removeChild(explore);
  }
}, 500);

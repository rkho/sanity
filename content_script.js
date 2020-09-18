var timeline = document.querySelector('[aria-label="Timeline: Trending now"]');
var triggered = false;

setInterval(function () {
  if (triggered === true) {
    return;
  }

  else {
    timeline = document.querySelector('[aria-label="Timeline: Trending now"]');
    timeline.parentElement.removeChild(timeline);
    triggered = true;
  }
}, 500);

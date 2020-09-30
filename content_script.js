function removeAnnoyances() {
  var trendingCard = document.querySelector(
    '[aria-label="Timeline: Trending now"]'
  );

  var exploreButton = document.querySelector(
    '[aria-label="Search and explore"]'
  );

  trendingCard &&
    trendingCard.parentNode.parentNode.parentNode.parentNode.remove();

  exploreButton && exploreButton.remove();
}

function watchMain() {
  var main = document.getElementById("react-root").firstChild.firstChild;

  new MutationObserver(removeAnnoyances).observe(main, {
    subtree: true,
    childList: true,
  });
}

watchMain();

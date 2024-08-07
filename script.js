function goTo(page) {
  document.querySelector("body").style.opacity = 0;
  setTimeout(function () {
    window.location.href = page;
  }, 500);
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelector("body").style.opacity = 1;
  }, 50);
});

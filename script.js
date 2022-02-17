$(".theme-switch").on("click", () => {
  $("body").toggleClass("light-theme");
});

var image = document.getElementById("slide");
var currentPos = 0;
var images = ["img/slide1.jpg", "img/slide2.jpeg", "img/slide3.jpeg"];

function nextImage() {
  if (++currentPos >= images.length) currentPos = 0;

  image.src = images[currentPos];
}

setInterval(nextImage, 6000);

$(document).ready(function () {
  $("#autoWidth").lightSlider({
    autoWidth: true,
    loop: true,
    onSliderLoad: function () {
      $("#autoWidth").removeClass("cS-hidden");
    },
  });
});

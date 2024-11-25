var imgs = document.querySelectorAll(".cars img");
var bigphoto = document.querySelector("#main");
for (var i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function (e) {
    var mySrc = e.target.getAttribute("src");
    bigphoto.setAttribute("src", mySrc);
  });
}

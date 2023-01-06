document.getElementById("ar").addEventListener("click", () => {
  document.querySelector("html").setAttribute("dir", "rtl");
  localStorage.setItem("lang", "ar");
});

document.getElementById("en").addEventListener("click", () => {
  document.querySelector("html").setAttribute("dir", "ltr");
  localStorage.setItem("lang", "en");
});

window.onload = () => {
  let lang = localStorage.getItem("lang");
  lang == "ar"
    ? document.querySelector("html").setAttribute("dir", "rtl")
    : document.querySelector("html").setAttribute("dir", "ltr");

  setTimeout(function () {
    var splash = document.querySelector("#splash");
    splash.style.display = "none";
  }, 300);
};

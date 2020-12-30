
const burgerBtn = document.querySelector('.icon');
const links = document.getElementById('myLinks');

burgerBtn.onclick = function () {
  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
}

links.onclick = () => {
  links.style.display = "none";
}

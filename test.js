const hello = document.getElementById("hello");
hello.style.opacity = 1;
hello.classList.add("fade-in");

const image = document.getElementById("image");
image.classList.add("fade-in");

const link1 = document.getElementById("link1ID");
link1.classList.add("fade-in");

const link2 = document.getElementById("link2ID");
link2.classList.add("fade-in");

const link3 = document.getElementById("link3ID");
link3.classList.add("fade-in");

const logo = document.getElementById("logo");
setTimeout(() => {
  logo.classList.add("logo-show");
}, 10000);

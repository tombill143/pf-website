//const element = document.querySelector("#dropdown");

/*if (element) {
  // element exists, perform operations on it
  console.log("element exists, perform operations on it");
} else {
  // element does not exist, handle the error
  console.log("element does not exist, perform operations on it");
}*/

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");

  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");
      options.forEach((otherOption) => {
        otherOption.classList.remove("active");
      });
      option.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  function showContent() {
    console.log("before heading");
    const heading = document.getElementById("heading");
    console.log("before heading fade");
    if (heading) {
      heading.style.opacity = "1";
      setTimeout(() => {
        heading.style.opacity = "0";
      }, 500);
    }
    console.log("before dropdowns");
    const dropdowns = document.querySelectorAll(
      ".dropdown",
      "dropdown2",
      "dropdown3"
    );

    const delay = 300; // delay time between each dropdown
    let i = dropdowns.length - 1;
    console.log("before fade");
    const fade = (index) => {
      if (index < dropdowns.length) {
        const dropdown = dropdowns[index];
        if (dropdown) {
          dropdown.style.opacity = "1";
          setTimeout(() => {
            fade(index + 1);
          }, delay);
        }
      }
    };

    setTimeout(() => {
      fade(i);
    }, 4000);
  }

  setTimeout(function () {
    document.getElementById("content").style.display = "block";
    setTimeout(showContent, 1000);
  }, 6000);
});

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector("#title").scrollIntoView({
      behavior: "smooth",
    });
    setTimeout(() => {
      document.querySelector(".dropdown").scrollIntoView({
        behavior: "smooth",
      });

      setTimeout(() => {
        document.getElementById("content").style.display = "block";
      }, 1000);
    }, 1000);
  }, 1000);
});

//const img = document.querySelector(".hero-img");
//const dropdown = document.getElementById("dropdown");

window.addEventListener("load", () => {
  // code here will only run once the entire page (including images, etc.) has finished loading
  const h1 = document.getElementById("title");
  const content = document.getElementById("content");
  const loader = document.getElementById("loading");

  const showLoadingScreen = () => {
    loader.style.display = "block";
  };

  const hideLoadingScreen = () => {
    loader.style.display = "none";
  };

  showLoadingScreen();

  setTimeout(() => {
    hideLoadingScreen();
    const h1 = document.querySelector("#title");
    const imagebox = document.querySelector(".imagebox");
    setTimeout(() => {
      h1.style.opacity = "1";
      setTimeout(() => {
        imagebox.style.opacity = "1";
      }, 1000);
    }, 1000);
  }, 6000);
});

function showLoadingScreen() {
  document.getElementById("loading").style.display = "block";
  document.getElementById("content").style.display = "none";
}

function hideLoadingScreen() {
  document.getElementById("loading").style.display = "none";
  document.getElementById("content").style.display = "block";
}

document.body.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const aboutDropdown = document.querySelector("#about-dropdown");
    const projectsDropdown = document.querySelector("#projects-dropdown");
    const contactDropdown = document.querySelector("#contact-dropdown");
    aboutDropdown.style.opacity = "1";
    projectsDropdown.style.opacity = "1";
    contactDropdown.style.opacity = "1";
    projectsDropdown.style.display = "block"; // or projectsDropdown.style.opacity = "1";
  }, 2000);
});

const timeout = setTimeout(() => {
  dropdowns.classList.add("dropdown");
}, 5000);

// to clear the timeout
clearTimeout(timeout);

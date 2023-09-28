// main.js
var profilePicAlt = false;

console.log("main.js loaded");

// Define the profilePictureSwitch function
function profilePictureSwitch() {
    const profilePic = document.getElementById("profile-pic");
    if(profilePicAlt) {
        profilePic.src = "img/brian-duncan.jpg";
        profilePicAlt = false;
    } else {
        profilePic.src = "img/brian-duncan-alt.png";
        profilePicAlt = true;
    }
    console.log("clicked");
}

function pageChange(pageName) {
    if(pageName == "home-page") {
        document.getElementById("home-page").hidden = false;
        document.getElementById("contact-me-page").hidden = true;
        // remove 'active' class from contact-me-button
        document.getElementById("contact-button").classList = "nav-link";
        document.getElementById("home-button").classList = "nav-link active";
        document.getElementById("about-me-page").hidden = true;
        document.getElementById("about-button").classList = "nav-link";

        closeProjectPage();
    } else if(pageName == "contact-me-page") {
        document.getElementById("home-page").hidden = true;
        document.getElementById("contact-me-page").hidden = false;
        document.getElementById("contact-button").classList = "nav-link active";
        document.getElementById("home-button").classList = "nav-link";
        document.getElementById("about-me-page").hidden = true;
        document.getElementById("about-button").classList = "nav-link";

        closeProjectPage();
    } else if(pageName == "about-me-page") {
        document.getElementById("home-page").hidden = true;
        document.getElementById("about-me-page").hidden = false;
        document.getElementById("about-button").classList = "nav-link active";
        document.getElementById("home-button").classList = "nav-link";
        document.getElementById("contact-me-page").hidden = true;
        document.getElementById("contact-button").classList = "nav-link";

        closeProjectPage();
    }
}

function closeProjectPage() {
    document.getElementById("projects-button").classList = "btn btn-dark dropdown-toggle";

    document.getElementById("web-development-page").hidden = true;
    document.getElementById("unreal-engine-page").hidden = true;
    document.getElementById("game-maker-page").hidden = true;
    document.getElementById("ableton-live-page").hidden = true;
}

function openProjectPage(projectPage) {
    document.getElementById("home-page").hidden = true;
    document.getElementById("about-me-page").hidden = true;
    document.getElementById("contact-me-page").hidden = true;

    closeProjectPage();

    document.getElementById("projects-button").classList = "btn btn-dark dropdown-toggle active";
    document.getElementById("contact-button").classList = "nav-link";
    document.getElementById("home-button").classList = "nav-link";
    document.getElementById("about-button").classList = "nav-link";

    if(projectPage == "web development") {
        document.getElementById("web-development-page").hidden = false;
    } else if(projectPage == "unreal engine") {
        document.getElementById("unreal-engine-page").hidden = false;
    } else if(projectPage == "game maker") {
        document.getElementById("game-maker-page").hidden = false;
    } else if(projectPage == "ableton live") {
        document.getElementById("ableton-live-page").hidden = false;
    }
}

// Add an event listener to the profile picture
document.addEventListener("DOMContentLoaded", function () {
    const profilePic = document.getElementById("profile-pic");
    profilePic.addEventListener("click", profilePictureSwitch);
});

function openLinkedin() {
    window.open("https://www.linkedin.com/in/brian-duncan-9b048b291/", "_blank");
}

  document.addEventListener("DOMContentLoaded", function () {
    // Get all the dropdown items
    var dropdownItems = document.querySelectorAll(".dropdown-item");

    // Add a click event listener to each dropdown item
    dropdownItems.forEach(function (item) {
      item.addEventListener("click", function () {
        // Close the dropdown
        var dropdown = document.querySelector(".dropdown");
        var dropdownMenu = dropdown.querySelector(".dropdown-menu");
        var bootstrapDropdown = new bootstrap.Dropdown(dropdown);
        bootstrapDropdown.hide();
      });
    });
  });

  tippy('#github', {
    content: "Github",
  });

  tippy('#linkedin', {
    content: "LinkedIn",
  });
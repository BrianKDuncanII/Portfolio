// main.js
var profilePicAlt = false;

console.log("main.js loaded");

// Define the profilePictureSwitch function
function profilePictureSwitch() {
    const profilePic = document.getElementById("profile-pic");
    if (profilePicAlt) {
        profilePic.src = "img/brian-duncan.jpg";
        profilePicAlt = false;
    } else {
        profilePic.src = "img/brian-duncan-alt.png";
        profilePicAlt = true;
    }
    console.log("clicked");
}

function pageChange(pageName) {
    if (pageName == "home-page") {
        document.getElementById("home-page").hidden = false;
        document.getElementById("contact-me-page").hidden = true;
        // remove 'active' class from contact-me-button
        document.getElementById("contact-button").classList = "nav-link";
        document.getElementById("home-button").classList = "nav-link active";
        document.getElementById("about-me-page").hidden = true;
        document.getElementById("about-button").classList = "nav-link";
        document.getElementById("changelogs-button").classList = "nav-link";

        closeProjectPage();
    } else if (pageName == "contact-me-page") {
        document.getElementById("home-page").hidden = true;
        document.getElementById("contact-me-page").hidden = false;
        document.getElementById("contact-button").classList = "nav-link active";
        document.getElementById("home-button").classList = "nav-link";
        document.getElementById("about-me-page").hidden = true;
        document.getElementById("about-button").classList = "nav-link";
        document.getElementById("changelogs-button").classList = "nav-link";

        closeProjectPage();
    } else if (pageName == "about-me-page") {
        document.getElementById("home-page").hidden = true;
        document.getElementById("about-me-page").hidden = false;
        document.getElementById("about-button").classList = "nav-link active";
        document.getElementById("home-button").classList = "nav-link";
        document.getElementById("contact-me-page").hidden = true;
        document.getElementById("contact-button").classList = "nav-link";
        document.getElementById("changelogs-button").classList = "nav-link";

        closeProjectPage();
    } else if(pageName == "changelogs-page") {
        document.getElementById("home-page").hidden = true;
        document.getElementById("about-me-page").hidden = true;
        document.getElementById("contact-me-page").hidden = true;
        document.getElementById("changelogs-page").hidden = false;
        document.getElementById("changelogs-button").classList = "nav-link active";
        document.getElementById("home-button").classList = "nav-link";
        document.getElementById("about-button").classList = "nav-link";
        document.getElementById("contact-button").classList = "nav-link";
    }
}

function closeProjectPage() {
    document.getElementById("projects-button").classList = "btn btn-dark dropdown-toggle";

    document.getElementById("web-development-page").hidden = true;
    document.getElementById("unreal-engine-page").hidden = true;
    document.getElementById("game-maker-page").hidden = true;
    document.getElementById("ableton-live-page").hidden = true;
    document.getElementById("changelogs-page").hidden = true;
}

function openProjectPage(projectPage) {
    document.getElementById("home-page").hidden = true;
    document.getElementById("about-me-page").hidden = true;
    document.getElementById("contact-me-page").hidden = true;
    document.getElementById("changelogs-page").hidden = true;

    closeProjectPage();

    document.getElementById("projects-button").classList = "btn btn-dark dropdown-toggle active";
    document.getElementById("contact-button").classList = "nav-link";
    document.getElementById("home-button").classList = "nav-link";
    document.getElementById("about-button").classList = "nav-link";
    document.getElementById("changelogs-button").classList = "nav-link";

    if (projectPage == "web development") {
        document.getElementById("web-development-page").hidden = false;
    } else if (projectPage == "unreal engine") {
        document.getElementById("unreal-engine-page").hidden = false;
    } else if (projectPage == "game maker") {
        document.getElementById("game-maker-page").hidden = false;
    } else if (projectPage == "ableton live") {
        document.getElementById("ableton-live-page").hidden = false;
    } else if(projectPage == "changelogs") {
        document.getElementById("changelogs-page").hidden = false;
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

tippy('#github-alt', {
    content: "Github Repository",
});

tippy('#linkedin', {
    content: "LinkedIn",
});

function projectNavBarChange(selection, elementID) {
    navBarReference = document.getElementById(elementID);

    overviewSection = navBarReference.querySelector(".project-overview");
    toolsUsedSection = navBarReference.querySelector(".project-tools-used");
    keyFeaturesSection = navBarReference.querySelector(".project-key-features");
    lessonsLearnedSection = navBarReference.querySelector(".project-lessons-learned");
    projectImagesSection = navBarReference.querySelector(".project-images");

    navOverview = navBarReference.querySelector(".nav-overview");
    navToolsUsed = navBarReference.querySelector(".nav-tools-used");
    navKeyFeatures = navBarReference.querySelector(".nav-key-features");
    navLessonsLearned = navBarReference.querySelector(".nav-lessons-learned");
    navProjectImages = navBarReference.querySelector(".nav-project-images");

    overviewSection.hidden = true;
    toolsUsedSection.hidden = true;
    keyFeaturesSection.hidden = true;
    lessonsLearnedSection.hidden = true;
    projectImagesSection.hidden = true;

    navOverview.classList = "nav-link nav-overview";
    navToolsUsed.classList = "nav-link nav-tools-used";
    navKeyFeatures.classList = "nav-link nav-key-features";
    navLessonsLearned.classList = "nav-link nav-lessons-learned";
    navProjectImages.classList = "nav-link nav-project-images";

    if (selection == "overview") {
        overviewSection.hidden = false;
        navOverview.classList = "nav-link active nav-overview";
    } else if (selection == "tools used") {
        toolsUsedSection.hidden = false;
        navToolsUsed.classList = "nav-link active nav-tools-used";
    } else if (selection == "key features") {
        keyFeaturesSection.hidden = false;
        navKeyFeatures.classList = "nav-link active nav-key-features";
    } else if (selection == "lessons learned") {
        lessonsLearnedSection.hidden = false;
        navLessonsLearned.classList = "nav-link active nav-lessons-learned";
    } else if (selection == "images") {
        projectImagesSection.hidden = false;
        navProjectImages.classList = "nav-link active nav-project-images";
    }
}
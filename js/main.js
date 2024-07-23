tippy('#social-linkedin', {
    content: 'Linkedin',
    placement: 'bottom'
});

tippy('#social-github', {
    content: 'Github',
    placement: 'bottom'
});

tippy('#resume-download', {
    content: 'Direct Resume Download',
    placement: 'bottom'
});

tippy('#showcase-button', {
    content: 'This will open seperately.',
    placement: 'bottom'
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function createShape(side) {
    const shape = document.createElement('div');
    shape.classList.add('shape');
    shape.style.left = `${Math.random() * 10}em`;
    shape.style.animationDuration = `${Math.random() * 5 + 5}s`;

    const shapes = ['★', '♥', '●', '■'];
    shape.textContent = shapes[Math.floor(Math.random() * shapes.length)];

    document.querySelector(`.falling-shapes.${side}`).appendChild(shape);

    shape.addEventListener('animationend', () => shape.remove());
}

setInterval(() => createShape('left'), 5000);
setInterval(() => createShape('right'), 5000);

GitHubActivity.feed({
    username: "BrianKDuncanII",
    selector: "#feed",
    limit: 5, // optional
});

function toggleGithubActivity() {
    if (document.getElementById("feed-container").hidden) {
        document.getElementById("feed-container").hidden = false;
        document.getElementById("github-toggle-button").innerHTML = "Hide";
    } else {
        document.getElementById("feed-container").hidden = true;
        document.getElementById("github-toggle-button").innerHTML = "Show";
    }
}

function submitEmail() {
    toast = document.getElementById("confirmationToast");
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 5000);
    document.getElementById("confirmation-text").hidden = false;
}

function openPortfolioLink() {
    window.open("https://github.com/BrianKDuncanII/Portfolio", "_blank");
}

const skills = [
    '<p id="skills-counter"><i style="margin-right: 0.5em" class="fas fa-code"></i> Front-End Developer</p>',
    '<p id="skills-counter"><i style="margin-right: 0.5em" class="fas fa-gamepad"></i> Game Developer</p>',
    '<p id="skills-counter"><i style="margin-right: 0.5em" class="fas fa-music"></i> Music Producer</p>',
    '<p id="skills-counter"><i style="margin-right: 0.5em" class="fas fa-headphones"></i> Sound Designer</p>',
    '<p id="skills-counter"><i style="margin-right: 0.5em" class="fa-solid fa-camera"></i> Video Editor</p>'
];
let currentIndex = 0;

function morphText() {
    const textElement = document.querySelector('#morphing-text span');

    textElement.classList.add('fade');

    setTimeout(() => {
        textElement.innerHTML = skills[currentIndex];

        void textElement.offsetWidth;

        textElement.classList.remove('fade');

        currentIndex = (currentIndex + 1) % skills.length;

        setTimeout(morphText, 2000);
    }, 500);
}

morphText();
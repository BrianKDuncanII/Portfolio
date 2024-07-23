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

tippy('#portfolio-github-button', {
    content: 'This will open Github in a seperate window.',
    placement: 'left'
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
    var firstName = document.getElementById("first-name");
    var lastName = document.getElementById("last-name");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var company = document.getElementById("company");
    var subject = document.getElementById("subject");
    var message = document.getElementById("message");

    var errorFlag = 0;

    if(firstName.value == "") {
        firstName.classList.add("error");
        errorFlag = 1;
    }

    if(lastName.value == "") {
        lastName.classList.add("error");
        errorFlag = 1;
    }

    if(email.value == "") {
        email.classList.add("error");
        errorFlag = 1;
    }

    if(subject.value == "") {
        subject.classList.add("error");
        errorFlag = 1;
    }

    if(message.value == "") {
        message.classList.add("error");
        errorFlag = 1;
    }

    if(errorFlag == 1) {
        document.getElementById("error-text").hidden = false;
    } else {
        
        $.ajax({
            method: 'POST',
            url: 'https://formsubmit.co/ajax/your@email.com',
            dataType: 'json',
            accepts: 'application/json',
            data: {
                name: "FormSubmit",
                message: "I'm from Devro LABS"
            },
            success: (data) => {
                document.getElementById("confirmation-text").hidden = false;
            },
            error: (err) => console.log(err)
        });
        
    }
}

document.getElementById("first-name").addEventListener('input', function (evt) {
    document.getElementById("first-name").classList.remove("error");
});

document.getElementById("last-name").addEventListener('input', function (evt) {
    document.getElementById("last-name").classList.remove("error");
});

document.getElementById("email").addEventListener('input', function (evt) {
    document.getElementById("email").classList.remove("error");
});

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
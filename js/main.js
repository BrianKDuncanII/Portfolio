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

    if (firstName.value == "") {
        firstName.classList.add("error");
        errorFlag = 1;
    }

    if (lastName.value == "") {
        lastName.classList.add("error");
        errorFlag = 1;
    }

    if (email.value == "") {
        email.classList.add("error");
        errorFlag = 1;
    }

    if (subject.value == "") {
        subject.classList.add("error");
        errorFlag = 1;
    }

    if (message.value == "") {
        message.classList.add("error");
        errorFlag = 1;
    }

    if (errorFlag == 1) {
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

function openShowcase() {
    document.getElementById("main-page").hidden = true;
    document.getElementById("showcase-page").hidden = false;
    // set body overflow to auto
    document.body.style.overflow = "auto";
}

function closeShowcase() {
    document.getElementById("main-page").hidden = false;
    document.getElementById("showcase-page").hidden = true;
    // set body overflow to hidden
    document.body.style.overflow = "hidden";
}

// Array of your project GIFs
const projects = [{
        src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExanZsb2s2anVscTc5ZmluNG52dWpoNG5xdWc0M3Bjemd6ZWJjcGsxNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZBtlVUPFMRp35lHyyR/giphy.gif',
        alt: 'Project 1'
    },
    {
        src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWdra2Rkc3VpcndscW9rYWQzaDJyZTlxM2Nxb2UwcTZ4ZGdueG1pOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/f9MKnPuybaFjXW1vJD/giphy.gif',
        alt: 'Project 2'
    },
    {
        src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjBoenVsZmRlb202OWRqczBmN2w2MnhjNGthNTJzd2tjczBsaGdpdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/H4uDu6QEjrnpdhRc96/giphy.gif',
        alt: 'Project 3'
    },
    {
        src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHp5YndoeGNuczZjcWR0a3J3cjRwM2Rjd2tyb2V6bGpsdjFreWpuNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2jQz5xH7GbwFpNsusZ/giphy.gif',
        alt: 'Project 4'
    },
    {
        src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2NqajA5MGJ5cGl4emExeW0zYmlqdXBleHU3OWhkZnI0cDU3bXN2eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vg0NQVelj7PIBSlqFa/giphy.gif',
        alt: 'Project 5'
    },
    {
        src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHRsdDkwMWNuaDdydXF3bG94N21nZGNoaDh5eWcza2puaGtnZ2UxdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yjPvDsdBdvN61wTwPT/giphy.gif',
        alt: 'Project 6'
    },
    {
        src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExazl6NGczN3FzbGhkZmtycWdmOTAzc2kzcHgyeDdtbWduMGsxM3RwdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wLKubaEL7jBukj9Iju/giphy.gif',
        alt: 'Project 7'
    },
    {
        src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3VqZHgzM3M0ZHNxaXByd25uNG5mN3gzN3BlZmE2c2ZjNmZqOXdsdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KoEBCeLVvPE2sn0xCG/giphy.gif',
        alt: 'Project 8'
    },
    {
        src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3h4Z2wwOG82Nml2N2JyOTRwMnpvOTlreTkwNDhnOGk5ZzRwMW80ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/accifaZUcAIFSv33IZ/giphy.gif',
        alt: 'Project 9'
    },
    {
        src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTl6bWFxdGZ4MTF5bm9peHI3bzBwODRhNDYzdWg5Y3N3NmRndmV2cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ll6w1fbOz5CKM69OPK/giphy.gif',
        alt: 'Project 10'
    },
    {
        src: 'https://cdn.discordapp.com/attachments/855894909143351356/892021019211071549/ScreenShot00008.png?ex=66a0470f&is=669ef58f&hm=6b3f42e71197b074a7bed843fb9260b1428208ba7e4ac0ed616eb270dcda3e2d&',
        alt: 'Project 11'
    },
    {
        src: 'https://cdn.discordapp.com/attachments/855894909143351356/892021016350564352/ScreenShot00000.png?ex=66a0470f&is=669ef58f&hm=1143566352c2635e6b412ac87b8ec7e1d6602396283d73bfee47433e407cffd9&',
        alt: 'Project 12'
    },
    {
        src: 'https://cdn.discordapp.com/attachments/855894909143351356/880898438869418054/ScreenShot00013.png?ex=66a0061a&is=669eb49a&hm=59b597622f268edfabde5cd5b921d08b6f56627daeb1861abbb47f90980b3a2f&',
        alt: 'Project 13'
    },
    {
        src: 'https://cdn.discordapp.com/attachments/855894909143351356/880898437791502336/ScreenShot00007.png?ex=66a00619&is=669eb499&hm=36c7b1e127c2b2f9a39f56d5c487195cda9f08b7b7d1a4b1b7d507c1feb27521&',
        alt: 'Project 14'
    },
    {
        src: 'https://cdn.discordapp.com/attachments/1128779086500724756/1128943682821816350/giphy.gif?ex=669ffd7c&is=669eabfc&hm=7f28796515b7ba8d185809080278aa29059d5f9f13bf666aa4cd8fba98d157c6&',
        alt: 'Project 15'
    },
    {
        src: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWEwNzY4YzBlMTc1MmExMWE0NTFmMWQwOGJiMmNiYjA3NmQ0MGY5OSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/LoThFNokdofTeIPRyp/giphy.gif',
        alt: 'Project 16'
    },
    {
        src: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHp0aXM5ZGppaDQ0emU2cDFzaTc0MG04Y3V6b2x2MmdjNTFyeTU1eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iyeZVwRs1Sd33PrN9k/giphy.gif',
        alt: 'Project 17'
    },
    {
        src: 'https://cdn.discordapp.com/attachments/866929207153393674/883527550008164352/Untitled.png?ex=66a05c27&is=669f0aa7&hm=68083bc15d98fe74095d3b867abf680cf7c7e9c19b0135aa0bb8239a7d9a9e91&',
        alt: 'Project 18'
    },
    {
        src: 'https://cdn.discordapp.com/attachments/864174479797911573/866909852089712670/Untitled.png?ex=66a08cb7&is=669f3b37&hm=8e47a4df844310d1cb833521a4afa80c1e16a7d0ed2d4dbf6be2d26d74ba820d&',
        alt: 'Project 19'
    },
];


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createGridItems() {
    const grid = document.getElementById('projectGrid');
    shuffleArray(projects);

    projects.forEach(project => {
        const colSize = Math.floor(Math.random() * 2) + 3;
        const gridItem = document.createElement('div');
        gridItem.className = `col-md-${colSize} grid-item`;

        // Create two image elements: one for static and one for animated
        const staticImg = document.createElement('img');
        staticImg.src = project.src;
        staticImg.alt = project.alt;
        staticImg.className = 'img-fluid static';

        const animatedImg = document.createElement('img');
        animatedImg.src = project.src;
        animatedImg.alt = project.alt;
        animatedImg.className = 'img-fluid animated';
        animatedImg.style.display = 'none';

        gridItem.appendChild(staticImg);
        gridItem.appendChild(animatedImg);
        grid.appendChild(gridItem);

        // Switch between static and animated on hover
        gridItem.addEventListener('mouseenter', function () {
            staticImg.style.display = 'none';
            animatedImg.style.display = 'block';
        });
        gridItem.addEventListener('mouseleave', function () {
            staticImg.style.display = 'block';
            animatedImg.style.display = 'none';
        });
    });
}

window.onload = createGridItems;
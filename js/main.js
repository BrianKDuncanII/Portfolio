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
  
  setInterval(() => createShape('left'), 2000);
  setInterval(() => createShape('right'), 2000);
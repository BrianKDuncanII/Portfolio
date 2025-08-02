function updateGradientColors() {
    const time = Date.now() * 0.001;
    const gradient = document.querySelector('.gradient-background');

    const hue1 = Math.sin(time * 0.3) * 60 + 240;
    const hue2 = Math.sin(time * 0.5) * 60 + 300;
    const hue3 = Math.sin(time * 0.7) * 60 + 180;

    gradient.style.filter = `hue-rotate(${hue1}deg)`;
}

tippy('#github', {
    content: 'Github',
});

tippy('#youtube', {
    content: 'Youtube',
});

tippy('#bluesky', {
    content: 'Bluesky',
});
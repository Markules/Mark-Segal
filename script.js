const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
});

document.documentElement.style.setProperty('--text-color', '#333');
document.documentElement.style.setProperty('--background-color', '#f4f4f4');

const darkTheme = {
    '--text-color': '#f4f4f4',
    '--background-color': '#333',
    '--color-1': '#FF8E72',
    '--color-2': '#ed6a5e',
    '--color-3': '#ffaf87',
    '--color-4': '#377771',
    '--color-5': '#4ce0b3'
};

const lightTheme = {
    '--text-color': '#333',
    '--background-color': '#f4f4f4',
    '--color-1': '#ffaf87',
    '--color-2': '#FF8E72',
    '--color-3': '#ed6a5e',
    '--color-4': '#4ce0b3',
    '--color-5': '#377771'
};

function setTheme(theme) {
    for (const [property, value] of Object.entries(theme)) {
        document.documentElement.style.setProperty(property, value);
    }
}

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        setTheme(darkTheme);
    } else {
        setTheme(lightTheme);
    }
});

const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(section);
});
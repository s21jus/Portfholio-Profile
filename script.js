// === Navbar Toggle (Mobile Menu) ===
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-times');
    menuIcon.classList.toggle('fa-bars');
    navbar.classList.toggle('active');
};

// === Scroll Behavior: Sticky Header & Active Links ===
window.onscroll = () => {
    // Close menu on scroll
    if (menuIcon.classList.contains('fa-times')) {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
        navbar.classList.remove('active');
    }

    // Active section link
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header .navbar a');
    const top = window.scrollY;

    sections.forEach(sec => {
        const offset = sec.offsetTop - 200;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            document.querySelector(`header .navbar a[href*=${id}]`)?.classList.add('active');
        }
    });

    // Sticky header
    document.querySelector('.header').classList.toggle('sticky', window.scrollY > 100);
};

// === Typing Animation ===
if (document.querySelector('.typing')) {
    new Typed('.typing', {
        strings: [
            "Cyber Security Specialist",
            "Ethical Hacker",
            "Blogger",
            "Full-Stack Developer",
            "UI/UX Designer",
            "Freelancer",
            "Tech Enthusiast"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
}

// === Projects Data ===
const projects = [
    {
        title: "Dhaka Ticket Finder",
        subtitle: "Static Frontend Site",
        description: "বাস/ট্রেন টিকিট খোঁজার একটি রেসপনসিভ ডেমো সাইট।",
        image: "project1.jpg",
        live_link: "https://s21jus.github.io/-Dhaka-Ticket-Finder/",
        github_link: "https://github.com/s21jus/Dhaka-Ticket-Finder"
    },
    {
        title: "Diploma-in-Engineering-CGPA-Calculator",
        subtitle: "JavaScript Logic & UI",
        description: "Bangladesh Diploma result calculation tool.",
        image: "project2.jpg",
        live_link: "https://s21jus.github.io/Diploma-in-Engineering-CGPA-Calculator/",
        github_link: "https://github.com/s21jus/Diploma-in-Engineering-CGPA-Calculator"
    },
    {
        title: "Upcoming....[Access Of mhr.slm2]",
        subtitle: "Ethical Hacking/Security",
        description: "A project based on Ethical Hacking (coming soon).",
        image: "project3.jpg",
        live_link: "#",
        github_link: "#"
    },
];

// === Dynamic Project Loading ===
function loadProjects() {
    const container = document.getElementById('project-list');
    projects.forEach((p, i) => {
        const box = document.createElement('div');
        box.classList.add('project-box');
        box.setAttribute('data-aos', i % 2 === 0 ? 'fade-up' : 'fade-down');
        box.setAttribute('data-aos-delay', i * 100);

        box.innerHTML = `
            <img src="${p.image}" alt="${p.title}">
            <div class="project-layer">
                <h4>${p.title}</h4>
                <h5>${p.subtitle}</h5>
                <p>${p.description}</p>
                <div class="project-links">
                    ${p.live_link !== '#' ? `<a href="${p.live_link}" target="_blank"><i class="fas fa-eye"></i></a>` : ''}
                    ${p.github_link !== '#' ? `<a href="${p.github_link}" target="_blank"><i class="fab fa-github"></i></a>` : ''}
                </div>
            </div>`;
        container.appendChild(box);
    });
}

// === Skill Animation on Scroll ===
function animateSkills() {
    const skillLevels = document.querySelectorAll('.skill-level');
    const skillSection = document.getElementById('skills');
    if (!skillSection) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillLevels.forEach(level => {
                    const targetWidth = level.style.width;
                    level.style.width = '0';
                    setTimeout(() => (level.style.width = targetWidth), 50);
                });
                observer.unobserve(skillSection);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(skillSection);
}

// === Initialize Functions ===
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    if (typeof AOS !== 'undefined') AOS.init({ duration: 800, once: true, offset: 100 });
    animateSkills();
});

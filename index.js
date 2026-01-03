// --- PORTFOLIO DATA ---
const EXPERIENCE = [
    {
        company: 'Kinaxis',
        role: 'Senior Staff Engineer',
        period: 'June 2024 - Present',
        description: 'Leading backend R&D initiatives. Focused on migrating legacy monolith architectures to scalable microservices using Kubernetes, Docker, Go, and C++.',
        skills: ['Go', 'C++', 'Kubernetes', 'Docker', 'R&D', 'Microservices']
    },
    {
        company: 'Amazon',
        role: 'Software Development Engineer',
        period: '8 Years',
        description: 'Specialized in Payment InfoSec and large-scale distributed systems. Built mission-critical AWS infrastructure using Java, Python, and Kotlin.',
        skills: ['Java', 'Python', 'Kotlin', 'AWS', 'Distributed Systems', 'InfoSec']
    },
    {
        company: 'Blulogix',
        role: 'Java Developer',
        period: 'Early Career',
        description: 'Engineered backend components for SaaS billing solutions, focusing on robust payment processing and subscription management.',
        skills: ['Java', 'SaaS', 'Billing Systems']
    }
];

const SKILLS = [
    {
        title: 'Languages',
        icon: 'fa-code',
        tags: ['Java', 'Go', 'C++', 'Python', 'Kotlin', 'SQL']
    },
    {
        title: 'Infrastructure',
        icon: 'fa-server',
        tags: ['AWS', 'Kubernetes', 'Docker', 'CI/CD', 'Microservices']
    },
    {
        title: 'Core Expertise',
        icon: 'fa-brain',
        tags: ['System Architecture', 'Distributed Systems', 'Ethical Hacking', 'Backend R&D']
    }
];

// --- CORE LOGIC ---
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderExperience();
    renderSkills();
    initNavigation();
    initScrollAnimations();
});

// --- THEME ENGINE ---
function initTheme() {
    const toggle = document.getElementById('theme-toggle');
    const icon = document.getElementById('theme-icon');
    
    const isDark = localStorage.getItem('theme') === 'dark' || 
                  (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);

    const applyTheme = (dark) => {
        if (dark) {
            document.documentElement.classList.add('dark');
            icon.className = 'fa-solid fa-sun text-yellow-400';
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            icon.className = 'fa-solid fa-moon text-slate-600';
            localStorage.setItem('theme', 'light');
        }
    };

    applyTheme(isDark);
    if (toggle) {
        toggle.addEventListener('click', () => applyTheme(!document.documentElement.classList.contains('dark')));
    }
}

// --- DYNAMIC RENDERING ---
function renderExperience() {
    const container = document.getElementById('experience-container');
    if (!container) return;
    container.innerHTML = EXPERIENCE.map((item, index) => `
        <div class="relative pl-10 mb-10 group animate-slide-up" style="animation-delay: ${index * 150}ms">
            <div class="experience-dot mt-6 transition-transform group-hover:scale-125"></div>
            <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                        <h3 class="text-xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">${item.role}</h3>
                        <div class="text-slate-500 font-semibold text-sm">${item.company}</div>
                    </div>
                    <span class="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-extrabold uppercase tracking-wider">
                        ${item.period}
                    </span>
                </div>
                <p class="text-slate-600 dark:text-slate-400 text-sm mb-5 leading-relaxed">
                    ${item.description}
                </p>
                <div class="flex flex-wrap gap-2">
                    ${item.skills.map(s => `
                        <span class="px-2.5 py-1 bg-slate-50 dark:bg-slate-800/50 rounded-md text-[10px] font-bold uppercase border border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400">
                            ${s}
                        </span>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function renderSkills() {
    const grid = document.getElementById('skills-grid');
    if (!grid) return;
    grid.innerHTML = SKILLS.map((cat, index) => `
        <div class="skill-card-item skill-card-hidden p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-all group">
            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i class="fa-solid ${cat.icon} text-xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-6">${cat.title}</h3>
            <div class="flex flex-wrap gap-3">
                ${cat.tags.map(tag => `<span class="px-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-lg text-sm font-medium border border-transparent hover:border-blue-200 dark:hover:border-blue-800 transition-colors">${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// --- SCROLL ANIMATIONS ---
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add the bounce animation class
                entry.target.classList.remove('skill-card-hidden');
                entry.target.classList.add('animate-bounce-in');
                // Once animated, we can stop observing this element
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const skillCards = document.querySelectorAll('.skill-card-item');
    skillCards.forEach((card, index) => {
        // Set a staggered delay for each card if they are visible together
        card.style.animationDelay = `${index * 100}ms`;
        observer.observe(card);
    });
}

// --- NAVIGATION & SMOOTH SCROLL ---
function initNavigation() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    document.querySelectorAll('.nav-link, #mobile-menu a').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const target = document.getElementById(targetId);
                if (target) {
                    const navHeight = 64;
                    const offsetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    if (mobileMenu) mobileMenu.classList.add('hidden');
                }
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Translations ---
    const translations = {
        en: {
            nav_name: "Rabi Ibrahim",
            nav_exp: "Experience",
            nav_creator: "Creator",
            nav_skills: "Skills",
            nav_edu: "Education",
            nav_contact: "Contact",
            hero_hello: "Hello, I am",
            hero_name: "Rabi Ibrahim.",
            hero_title: "Senior Staff Engineer.",
            hero_desc: "I bridge the gap between <span class=\"text-indigo-400 font-semibold\">academic theory</span> and <span class=\"text-cyan-400 font-semibold\">real-world high-scale production systems</span>. Currently driving Backend R&D at Kinaxis. Formerly Amazon.",
            hero_linkedin: "LinkedIn",
            section_exp_title: "Professional Experience",
            role_kinaxis: "Senior Staff Engineer",
            desc_kinaxis_1: "Lead backend R&D architecture for scalable, cloud-native microservices.",
            desc_kinaxis_2: "Designed migration strategy for legacy monolith to containerized microservices using Kubernetes, Docker, Go, and C++.",
            desc_kinaxis_3: "Designed an optimizer framework achieving a <span class=\"text-white\">13% reduction</span> in query execution time.",
            desc_kinaxis_4: "Mentored junior developers, improving team productivity by 20%.",
            role_amazon: "Software Development Engineer",
            focus_amazon: "Focus: Payment Information Security",
            desc_amazon_1: "Designed and delivered large-scale distributed systems focusing on payments and security solutions.",
            desc_amazon_2: "Employed microservices architecture on AWS (Java, Python, Kotlin).",
            desc_amazon_3: "Ensured compliance with Amazon Payments' information security framework.",
            desc_amazon_4: "Played a pivotal role in influencing technical decisions and driving innovation.",
            role_blulogix: "Software Engineer",
            desc_blulogix_1: "Developed a SaaS billing platform for telecom providers using Java, Spring, Hibernate, and Solr.",
            desc_blulogix_2: "Contributed to the Minimum Viable Product (MVP) and facilitated seamless integration.",
            desc_blulogix_3: "Demonstrated technical leadership in resolving ambiguous issues in a fast-paced startup environment.",
            mission_tag: "Content Creation",
            mission_title: "The <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500\">RabiBytes</span> Mission",
            mission_desc_1: "I dedicate 20% of my time to being a content creator. My goal is to empower the tech community, specifically within the Arabic region, by simplifying complex engineering concepts.",
            mission_desc_2: "Through my blog and YouTube channel, I share insights on system design, distributed architectures, and career growth in big tech.",
            btn_channel: "Visit Channel",
            btn_blog: "Read Blog",
            video_title: "System Design & Architecture",
            skills_title: "Technical Arsenal",
            skills_backend: "Backend & Cloud (Core Focus)",
            skills_tools: "Tools & Frontend",
            edu_title: "Education & Certifications",
            edu_degree: "Bachelor of Software Engineering",
            edu_uni: "The Hashemite University",
            cert_hacker: "Certified Ethical Hacker v9",
            cert_blockchain: "BlockChain Dev Bootcamp",
            cert_security: "Security Certifier",
            footer_title: "Let's Connect",
            footer_desc: "Whether you have a question about backend scaling, want to collaborate on a video, or just want to say hi.",
            footer_copy: "&copy; <span id=\"year\"></span> Rabi Ibrahim. Built with <span class=\"text-cyan-400\">Tailwind</span> & <span class=\"text-cyan-400\">Code</span>.",
            mob_exp: "Experience",
            mob_creator: "Creator Hub",
            mob_skills: "Skills",
            mob_edu: "Education",
            mob_contact: "Get In Touch"
        },
        ar: {
            nav_name: "ربيع إبراهيم",
            nav_exp: "الخبرة",
            nav_creator: "صانع المحتوى",
            nav_skills: "المهارات",
            nav_edu: "التعليم",
            nav_contact: "تواصل معي",
            hero_hello: "مرحباً، أنا",
            hero_name: "ربيع إبراهيم.",
            hero_title: "كبير مهندسي البرمجيات.",
            hero_desc: "أعمل على سد الفجوة بين <span class=\"text-indigo-400 font-semibold\">النظرية الأكاديمية</span> و <span class=\"text-cyan-400 font-semibold\">أنظمة الإنتاج الواقعية واسعة النطاق</span>. أقود حالياً البحث والتطوير في الخلفية البرمجية في Kinaxis. سابقاً في Amazon.",
            hero_linkedin: "لينكد إن",
            section_exp_title: "الخبرة المهنية",
            role_kinaxis: "كبير مهندسي البرمجيات",
            desc_kinaxis_1: "قيادة هندسة البحث والتطوير للخدمات المصغرة القابلة للتوسع والسحابية.",
            desc_kinaxis_2: "تصميم استراتيجية الانتقال من الأنظمة القديمة إلى الخدمات المصغرة باستخدام Kubernetes و Docker و Go و C++.",
            desc_kinaxis_3: "تصميم إطار عمل تحسين الأداء محققاً <span class=\"text-white\">تخفيض بنسبة ١٣٪</span> في وقت تنفيذ الاستعلامات.",
            desc_kinaxis_4: "إرشاد المطورين المبتدئين، مما زاد إنتاجية الفريق بنسبة ٢٠٪.",
            role_amazon: "مهندس تطوير برمجيات",
            focus_amazon: "التركيز: أمن معلومات المدفوعات",
            desc_amazon_1: "تصميم وتسليم أنظمة موزعة واسعة النطاق تركز على حلول المدفوعات والأمان.",
            desc_amazon_2: "تطبيق هندسة الخدمات المصغرة على AWS (Java, Python, Kotlin).",
            desc_amazon_3: "ضمان الامتثال لإطار عمل أمن المعلومات في Amazon Payments.",
            desc_amazon_4: "لعب دور محوري في التأثير على القرارات التقنية وقيادة الابتكار.",
            role_blulogix: "مهندس برمجيات",
            desc_blulogix_1: "تطوير منصة فواتير SaaS لمزودي الاتصالات باستخدام Java و Spring و Hibernate و Solr.",
            desc_blulogix_2: "المساهمة في بناء المنتج القابل للتطبيق (MVP) وتسهيل التكامل السلس.",
            desc_blulogix_3: "إظهار قيادة تقنية في حل المشكلات الغامضة في بيئة عمل سريعة الوتيرة.",
            mission_tag: "صناعة المحتوى",
            mission_title: "مهمة <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500\">RabiBytes</span>",
            mission_desc_1: "أخصص ٢٠٪ من وقتي لصناعة المحتوى. هدفي هو تمكين المجتمع التقني، وتحديداً في المنطقة العربية، من خلال تبسيط المفاهيم الهندسية المعقدة.",
            mission_desc_2: "من خلال مدونتي وقناتي على يوتيوب، أشارك رؤى حول تصميم الأنظمة، والبنى الموزعة، والنمو المهني في شركات التقنية الكبرى.",
            btn_channel: "زيارة القناة",
            btn_blog: "قراءة المدونة",
            video_title: "تصميم الأنظمة والهيكلية",
            skills_title: "الترسانة التقنية",
            skills_backend: "الخلفية البرمجية والسحابة (التركيز الأساسي)",
            skills_tools: "الأدوات والواجهة الأمامية",
            edu_title: "التعليم والشهادات",
            edu_degree: "بكالوريوس هندسة البرمجيات",
            edu_uni: "الجامعة الهاشمية",
            cert_hacker: "هاكر أخلاقي معتمد v9",
            cert_blockchain: "معسكر تطوير البلوكشين",
            cert_security: "معتمد أمان",
            footer_title: "لنتواصل",
            footer_desc: "سواء كان لديك سؤال حول توسيع الأنظمة الخلفية، أو ترغب في التعاون في فيديو، أو مجرد إلقاء التحية.",
            footer_copy: "&copy; <span id=\"year\"></span> ربيع إبراهيم. تم البناء بواسطة <span class=\"text-cyan-400\">Tailwind</span> و <span class=\"text-cyan-400\">Code</span>.",
            mob_exp: "الخبرة",
            mob_creator: "مركز المبدعين",
            mob_skills: "المهارات",
            mob_edu: "التعليم",
            mob_contact: "تواصل معي"
        }
    };

    const langToggle = document.getElementById('lang-toggle');
    const htmlEl = document.documentElement;
    let currentLang = localStorage.getItem('lang') || 'en';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        
        // Update DOM Direction and Font
        htmlEl.setAttribute('lang', lang);
        htmlEl.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        
        // Update Toggle Text
        langToggle.textContent = lang === 'en' ? 'AR' : 'EN';
        
        // Update Content
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Handle specific Year Span if inside translated text
        const yearSpan = document.getElementById('year');
        if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    }

    langToggle.addEventListener('click', () => {
        setLanguage(currentLang === 'en' ? 'ar' : 'en');
    });

    // Initialize Language
    setLanguage(currentLang);


    // --- Existing Mobile Menu Logic ---
    const menuBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function toggleMenu() {
        const isClosed = mobileMenu.classList.contains('translate-x-full') || mobileMenu.classList.contains('rtl:-translate-x-full');
        // Simple toggle for Tailwind based on dir
        if (htmlEl.getAttribute('dir') === 'rtl') {
            mobileMenu.classList.toggle('rtl:-translate-x-full');
        } else {
            mobileMenu.classList.toggle('translate-x-full');
        }
    }

    menuBtn.addEventListener('click', () => {
        if (htmlEl.getAttribute('dir') === 'rtl') {
            mobileMenu.classList.remove('rtl:-translate-x-full');
        } else {
            mobileMenu.classList.remove('translate-x-full');
        }
    });

    closeBtn.addEventListener('click', () => {
        if (htmlEl.getAttribute('dir') === 'rtl') {
            mobileMenu.classList.add('rtl:-translate-x-full');
        } else {
            mobileMenu.classList.add('translate-x-full');
        }
    });

    // Close menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
             if (htmlEl.getAttribute('dir') === 'rtl') {
                mobileMenu.classList.add('rtl:-translate-x-full');
            } else {
                mobileMenu.classList.add('translate-x-full');
            }
        });
    });

    // --- Navbar Styles on Scroll ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('nav-scrolled');
            navbar.classList.remove('py-4');
            navbar.classList.add('py-2');
        } else {
            navbar.classList.remove('nav-scrolled');
            navbar.classList.remove('py-2');
            navbar.classList.add('py-4');
        }
    });

    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        root: null,
        threshold: 0.15,
        rootMargin: "0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));
});

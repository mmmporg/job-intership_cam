document.addEventListener('DOMContentLoaded', (event) => {
    const langFrBtn = document.getElementById('lang-fr');
    const langEnBtn = document.getElementById('lang-en');
    const contentFr = document.getElementById('content-fr');
    const contentEn = document.getElementById('content-en');
    const navLinksFr = document.querySelectorAll('#jobs-link-fr, #internships-link-fr, #advice-link-fr, #about-link-fr');
    const navLinksEn = document.querySelectorAll('#jobs-link-en, #internships-link-en, #advice-link-en, #about-link-en');
    const htmlTag = document.querySelector('html');

    function setLanguage(lang) {
        if (lang === 'fr') {
            contentFr.style.display = 'block';
            contentEn.style.display = 'none';
            navLinksFr.forEach(link => link.style.display = 'block');
            navLinksEn.forEach(link => link.style.display = 'none');
            htmlTag.setAttribute('lang', 'fr');
            localStorage.setItem('lang', 'fr');
        } else {
            contentFr.style.display = 'none';
            contentEn.style.display = 'block';
            navLinksFr.forEach(link => link.style.display = 'none');
            navLinksEn.forEach(link => link.style.display = 'block');
            htmlTag.setAttribute('lang', 'en');
            localStorage.setItem('lang', 'en');
        }
    }

    langFrBtn.addEventListener('click', () => setLanguage('fr'));
    langEnBtn.addEventListener('click', () => setLanguage('en'));

    // Load saved language preference
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
        setLanguage(savedLang);
    } else {
        // Default to French if no preference is saved
        setLanguage('fr');
    }
});


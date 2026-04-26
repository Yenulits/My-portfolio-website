/*===== MENU SHOW & HIDDEN =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav    = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    /* Active link */
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    /* Remove menu on mobile */
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== BLOG CARDS =====*/
const articles = [
    {
        title: "The Evolution of Animation",
        desc:  "From Flipbooks to Digital Worlds.",
        link:  "https://medium.com/@yenuliseneviratne"
    }
];

const container = document.getElementById("blogContainer");

if (container) {
    articles.forEach(function (article) {
        const card = document.createElement("article");
        card.classList.add("blog-card");
        card.innerHTML =  `
            <div class="blog-content">
                <h3 class="blog-title">${article.title}</h3>
                <p class="blog-desc">${article.desc}</p>
                <a href="${article.link}" target="_blank" class="read-btn">Read More</a>
            </div>
        `;
        container.appendChild(card);
    });
}

/*===== SCROLL REVEAL ANIMATIONS =====*/
const sr = ScrollReveal({
    origin:   'top',
    distance: '80px',
    duration: 2000,
    reset:    true
});

/=====SCROLL HOME=====/
sr.reveal('.home_title',        {});
sr.reveal('.button',        {delay: 200});
sr.reveal('.home_img',         {delay: 400 });
sr.reveal('.home_social-icon', { interval: 200 });

/=====SCROLL ABOUT=====/
sr.reveal('.about_img',        {});
sr.reveal('.about_subtitle',   { delay: 200 });
sr.reveal('.about_text',       { delay: 400 });

/=====SCROLL SKILLS=====/
sr.reveal('.skills_subtitle',  {});
sr.reveal('.skills_text',      { delay: 200 });
sr.reveal('.skills_data',      { interval: 200 });
sr.reveal('.skills_img',      { delay: 400 });

/=====SCROLL BLOG=====/
sr.reveal('.blog-card',        { interval: 200 });


sr.reveal('.contact_input',    { interval: 200 });







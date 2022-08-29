function scrollToHome(top) {
    const home = document.querySelector('.denis');
    home.scrollIntoView({
        block: "start",
        inline: "start",
        behavior: "smooth"
    });
}

function scrollToAbout_me(top) {
    const about_me = document.querySelector('.about-me');
    about_me.scrollIntoView({
        block: "start",
        inline: "start",
        behavior: "smooth"
    });
}

function scrollToSkills(top) {
    const skills = document.querySelector('.skills');
    skills.scrollIntoView({
        block: "start",
        inline: "start",
        behavior: "smooth"
    });
}

function scrollToPortfolio(top) {
    const portfolio = document.querySelector('.container-portfolio');
    portfolio.scrollIntoView({
        block: "start",
        inline: "start",
        behavior: "smooth"
    });
}

function scrollToContacts(top) {
    const contacts = document.querySelector('.contacts-block');
    contacts.scrollIntoView({
        block: "start",
        inline: "start",
        behavior: "smooth"
    });
}
document.getElementById("logo-redirect").addEventListener("click", function() {
    logo_redirect();
    document.getElementById("logo-redirect").className = "selectedPage";
});

document.getElementById("home-page-redirect").addEventListener("click", function() {
    home_redirect();
    document.getElementById("home-page-redirect").className = "selectedPage";
});

document.getElementById("about-page-redirect").addEventListener("click", function() {
    about_redirect();
    document.getElementById("about-page-redirect").className = "selectedPage";
});

document.getElementById("solutions-page-redirect").addEventListener("click", function() {
    solutions_redirect();
    document.getElementById("solutions-page-redirect").className = "selectedPage";
});

document.getElementById("demo-page-redirect").addEventListener("click", function() {
    demo_redirect();
    document.getElementById("demo-page-redirect").className = "selectedPage";
});

document.getElementById("login-page-redirect").addEventListener("click", function() {
    login_redirect();
    document.getElementById("login-page-redirect").className = "selectedPage";
});

function logo_redirect() {
    window.location.href = 'homepage.html';
}

function home_redirect() {
    window.location.href = 'homepage.html';
}

function about_redirect() {
    window.location.href = 'ABOUT-central.html';
}

function solutions_redirect() {
    window.location.href = 'SOLUTIONS-central.html';
}

function demo_redirect() {
    window.location.href = 'DEMO-app.html';
}

function login_redirect() {
    window.location.href = 'WEB-APP-log.html';
}
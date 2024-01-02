const switcher = document.querySelector('.theme-switcher input');


switcher.addEventListener("change", (e) => {
    if (e.target.checked) {
        document.querySelector('body').setAttribute("data-theme", "dark");
    }
    else {
        document.querySelector('body').setAttribute("data-theme", "light");
    }
});
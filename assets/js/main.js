document.addEventListener("click", function (event) {
    const menu = document.getElementById("navbarSupportedContent");
    const button = document.querySelector(".navbar-toggler");

    const clickedInsideMenu = menu.contains(event.target);
    const clickedButton = button.contains(event.target);

    if (!clickedInsideMenu && !clickedButton) {
        const bsCollapse = bootstrap.Collapse.getInstance(menu);
        if (bsCollapse) {
            bsCollapse.hide();
        }
    }
});
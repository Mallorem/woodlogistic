if (document.readyState === 'loading') {

    document.addEventListener("DOMContentLoaded", function (event) {

        // menu 
        const toggleActiveClasses = () => {
            document.body.classList.toggle('page_lock');
            iconMenu.classList.toggle('menu__icon_active');
            menuBody.classList.toggle('menu__body_active');
        }

        const iconMenu = document.querySelector('.menu__icon');
        const menuBody = document.querySelector('.menu__body');

        if (iconMenu) iconMenu.addEventListener('click', toggleActiveClasses)

    });
}



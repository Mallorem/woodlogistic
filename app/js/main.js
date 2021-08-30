if (document.readyState === 'loading') {

    document.addEventListener("DOMContentLoaded", function (event) {
        // tabs
        let aboutTabItem = document.querySelector(".tabs__item[href='#about']");

        const tabs = document.querySelectorAll(".tabs__item");
        const showTab = function (event, tabId, activeClass, currentClass) {
            console.log(aboutTabItem);
            event.preventDefault();
            const activeTabBody = document.querySelector(`.${activeClass}`);
            activeTabBody.classList.remove(activeClass);
            const tab = document.querySelector(`.${currentClass}${tabId}`);
            tab.classList.add(activeClass);
        };

        const switchLink = (link, activeClass) => {
            const activeTab = document.querySelector(`.${activeClass}`);
            activeTab.classList.remove(activeClass);
            link.classList.add(activeClass);

        }

        for (let i = 0; i < tabs.length; i++) {
            let tab = tabs[i];
            tab.addEventListener('click', function (e) {
                console.log(tabs);
                const id = tab.getAttribute('href');
                showTab(e, id, 'tabs__block_active', 'tabs__block');
                switchLink(e.currentTarget, 'tabs__item_active')
            })
        }

        aboutTabItem.click();

        // menu for mobile
        const toggleActiveClasses = () => {
            menuBody.classList.toggle('menu__body_active');
        }

        const changeMenuSignature = (name) => {
            menu.setAttribute('data-tab', name)
        }

        const menu = document.querySelector('.menu');
        const iconMenu = document.querySelector('.menu__icon');
        const menuBody = document.querySelector('.menu__body');
        const menuItems = document.querySelectorAll('.menu__item');

        for (let i = 0; i < menuItems.length; i++) {
            let menuItem = menuItems[i];
            const menuItemName = menuItem.textContent;
            menuItem.addEventListener('click', () => {
                if (getComputedStyle(iconMenu).display !== 'none') {
                    toggleActiveClasses();
                }
                
                changeMenuSignature(menuItemName);
            })
        }

        if (iconMenu) iconMenu.addEventListener('click', toggleActiveClasses);
    });
}



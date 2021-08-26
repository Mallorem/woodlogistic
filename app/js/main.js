if (document.readyState === 'loading') {

    document.addEventListener("DOMContentLoaded", function (event) {
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

        // Dispatch the event.
        aboutTabItem.click();

        // menu 
        // const toggleActiveClasses = () => {
        //     document.body.classList.toggle('page_lock');
        //     iconMenu.classList.toggle('menu__icon_active');
        //     menuBody.classList.toggle('menu__body_active');
        // }

        // const iconMenu = document.querySelector('.menu__icon');
        // const menuBody = document.querySelector('.menu__body');

        // if (iconMenu) iconMenu.addEventListener('click', toggleActiveClasses)

    });
}



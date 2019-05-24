import {on} from "delegated-events";

export default {
  init: () => {
    on("click", ".js-nav-toggle", (evt) => {
      const navListActiveClass = "nav__list--active";
      const mainContActiveClass = "main--nav-active";

      const navListElem = document.getElementById(evt.currentTarget.dataset["targetnavlist"].replace("#", ""));
      const mainContElem = document.getElementById(evt.currentTarget.dataset["targetmaincont"].replace("#", ""));

      if (!navListElem.classList.contains(navListActiveClass)) {
        navListElem.classList.add(navListActiveClass);
        mainContElem.classList.add(mainContActiveClass);
      } else {
        navListElem.classList.remove(navListActiveClass);
        mainContElem.classList.remove(mainContActiveClass);
      }
    });
  }
};

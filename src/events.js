import { content } from "./content";
import { home } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";

const nav_links = document.querySelectorAll(".nav-link");

nav_links.forEach((nav_link) => {
  nav_link.addEventListener("click", () => {
    content.innerHTML = "";
    switch (nav_link.id) {
      case "home":
        content.appendChild(home());
        break;

      case "menu":
        content.appendChild(menu());
        break;

      case "contact":
        content.appendChild(contact());
        break;

      default:
        break;
    }
  });
});

import icon from "./logo.png";

/* NAV BAR */

// logo

const nav = document.createElement("nav");
document.body.appendChild(nav);

const logo = new Image();
logo.src = icon;
logo.classList.add("logo");
nav.appendChild(logo);

const navLinkContainer = document.createElement("ul");
navLinkContainer.className = "nav-link-container";
nav.appendChild(navLinkContainer);

const navlink_home = document.createElement("li");
const navlink_menu = document.createElement("li");
const navlink_contact = document.createElement("li");

navlink_home.textContent = "HOME";
navlink_home.id = "home";
navLinkContainer.appendChild(navlink_home);

navlink_menu.textContent = "MENU";
navlink_menu.id = "menu";
navLinkContainer.appendChild(navlink_menu);

navlink_contact.textContent = "CONTACT";
navlink_contact.id = "contact";
navLinkContainer.appendChild(navlink_contact);

const navLinks = document.querySelectorAll("nav li");
navLinks.forEach((nl) => {
  nl.classList.add("nav-link");
});

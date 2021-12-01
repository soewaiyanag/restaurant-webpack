import { content } from "./content";
import chief from "./chief.jpg";

function home() {
  const home_container = document.createElement("div");
  home_container.className = "home animate__animated animate__fadeInUp";
  content.appendChild(home_container);

  const chief_img = new Image();
  chief_img.src = chief;
  chief_img.className = "chief-img";
  home_container.appendChild(chief_img);

  const text_box = document.createElement("div");
  text_box.className = "text-box";
  const text = document.createElement("h1");
  text.innerHTML = "Hello, <br/> Welcome to our restaurant";
  text_box.appendChild(text);
  home_container.appendChild(text_box);

  return home_container;
}

home();

export { home };

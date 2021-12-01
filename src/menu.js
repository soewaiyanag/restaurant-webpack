import { content } from "./content";
import img1 from "./pizza_imgs/California Pizza.jpg";
import img2 from "./pizza_imgs/Chicago Pizza.jpg";
import img3 from "./pizza_imgs/Detroit Pizza.jpg";
import img4 from "./pizza_imgs/Greek Pizza.jpg";
import img5 from "./pizza_imgs/Neapolitan Pizza.jpg";
import img6 from "./pizza_imgs/New York-Style Pizza.jpg";
import img7 from "./pizza_imgs/Sicilian Pizza.jpg";
import img8 from "./pizza_imgs/St. Louis Pizza.jpg";

function menu() {
  const pizzas = [img1, img2, img3, img4, img5, img6, img7, img8];

  const menu_container = document.createElement("div");
  menu_container.classList.add("menu");
  content.appendChild(menu_container);

  for (let i = 0; i < pizzas.length; i++) {
    const pizza_img = new Image();
    pizza_img.src = pizzas[i];

    const menu = document.createElement("div");
    menu.className = "animate__animated animate__fadeInUp";
    menu.appendChild(pizza_img);

    const text = document.createElement("h3");
    text.textContent = "pizza " + (i + 1);
    menu.appendChild(text);

    menu_container.appendChild(menu);
  }
  return menu_container;
}

export { menu };

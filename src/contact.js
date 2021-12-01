import { content } from "./content";

function contact() {
  const contact_container = document.createElement("div");
  contact_container.className =
    "contact animate__animated  animate__fadeInLeft";

  content.appendChild(contact_container);

  const h1 = document.createElement("h1");
  h1.textContent = "Contact us";
  contact_container.appendChild(h1);

  const contact_box = document.createElement("div");
  contact_box.className = "contact-box";
  contact_container.appendChild(contact_box);

  const phone_num_label = document.createElement("h3");
  phone_num_label.textContent = "Phone Number";
  const phone_num = document.createElement("h3");
  phone_num.textContent = "01-23456789";
  contact_box.appendChild(phone_num_label);
  contact_box.appendChild(phone_num);

  const location_label = document.createElement("h3");
  location_label.textContent = "Location";
  const location = document.createElement("h3");
  location.textContent = "Street-12 ABCD township";
  contact_box.appendChild(location_label);
  contact_box.appendChild(location);

  return contact_container;
}

export { contact };

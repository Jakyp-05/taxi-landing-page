import { Rate } from "../data/rate.js";
import { Service } from "../data/service.js";

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");
let topButton = document.getElementById("action-top");
const serviceBox = document.querySelector(".service-box");
const customersRate = document.getElementById("customers");

document.getElementById("action-button").onclick = function () {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
};

let links = document.querySelectorAll(".menu-item > a");
for (let i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    document
      .getElementById(links[i].getAttribute("data-link"))
      .scrollIntoView({ behavior: "smooth" });
  };
}

if (topButton) {
  topButton.onclick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
}

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".menu-item > a").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

let serviceMap = Service.map((service) => {
  return `
    <li class="service-card">
      <div class="service-card-image">
        <img src="${service.image}" alt="card image" loading="lazy" />
      </div>
      <p>${service.text}</p>
    </li>
  `;
});

serviceBox.innerHTML += serviceMap.join("");

let customersRateMap = Rate.map((rate) => {
  return `
    <tr>
      <td>${rate.rateText}</td>
      <td>${rate.ratePrice}</td>
    </tr>
  `;
});

customersRate.innerHTML += customersRateMap.join("");

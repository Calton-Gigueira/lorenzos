"use strict";

const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list");

const sections = document.querySelectorAll(".hidden");

const showMenu = () => {
  menuList.classList.toggle("show");
};

menuBtn.addEventListener("click", showMenu);
menuBtn.addEventListener("mouseenter", showMenu);

const showSections = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("showElements");
    }
  });
};

const sectionObserver = new IntersectionObserver(showSections);
sections.forEach((section) => sectionObserver.observe(section));

////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("rvuxyu2cDIrJc23JS");

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const serviceID = "service_zjz2pmm";
      const templateID = "template_eao7bpf";

      const form = this;

      emailjs
        .sendForm(serviceID, templateID, form)
        .then(() => {
          alert("Mensagem enviada com sucesso!");
          form.reset();
        })
        .catch((error) => {
          console.error("Erro ao enviar email:", error);
          alert("Erro ao enviar email. Tente novamente.");
        });
    });
});

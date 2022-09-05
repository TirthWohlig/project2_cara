document.querySelector("#bar").onclick = () => {
  navbar.classList.toggle("active");
};
document.querySelector("#close").onclick = () => {
  navbar.classList.remove("active");
};

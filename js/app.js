// $ Menu collapse
let btn = document.querySelector(".toggle-sidebar");
let sidebar = document.querySelector(".sidebar");

btn.addEventListener("click", function () {
  sidebar.classList.toggle("active");
  document.body.classList.toggle("sidebar-collapsed");
});

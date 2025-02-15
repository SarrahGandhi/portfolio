// for tablet and phone toggle menu
function menuClick() {
  console.log("Clicked menu");
  const menuOption = document.getElementById("menuOption");
  menuOption.classList.toggle("hidden");
}
window.onload = validateForm;
// For validating form and onsubmit display
function validateForm() {
  const formhandle = document.forms["contact-form"];
  const message = document.getElementById("result");
  formhandle.onsubmit = processForm;

  function processForm() {
    if (formhandle.name.value === "") {
      formhandle.name.focus();
      return false;
    }
    if (formhandle.email.value === "") {
      formhandle.email.focus();
      return false;
    }
    if (formhandle.message.value === "") {
      formhandle.message.focus();
      return false;
    }
    message.style.display = "block";
    return false;
  }
}

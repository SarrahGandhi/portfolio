function menuClick() {
  console.log("Clicked menu");
  // const element = document.getElementById("menu");
  // element.classList.toggle("underline");

  const menuOption = document.getElementById("menuOption");
  menuOption.classList.toggle("hidden");
}
window.onload = validateForm;

function validateForm() {
  const formhandle = document.forms["contact-form"];
  const message = document.getElementById("result"); // Corrected this line
  formhandle.onsubmit = processForm;

  function processForm() {
    if (formhandle.name.value === "") {
      formhandle.name.focus();
      return false; // Prevent the form submission
    }
    if (formhandle.email.value === "") {
      formhandle.email.focus();
      return false; // Prevent the form submission
    }
    if (formhandle.message.value === "") {
      formhandle.message.focus();
      return false; // Prevent the form submission
    }
    message.style.display = "block";
    return false; // Prevent the form submission
  }
}

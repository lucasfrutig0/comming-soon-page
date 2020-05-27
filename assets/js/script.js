document.addEventListener("DOMContentLoaded", () => {
  const inputElement = document.querySelector("input");
  const formElement = document.querySelector("form");
  const iconErrorElement = document.querySelector(".icon-error");
  const msgErrorElement = document.querySelector(".error-msg");

  const validEmail = (e, mail) => {
    e.preventDefault();
    if (mail.match(pattern)) {
      return;
    } else {
      iconErrorElement.style.display = "block";
      msgErrorElement.style.display = "block";
      inputElement.style.borderColor = "red";
    }
  };

  formElement.addEventListener("submit", (e) =>
    validEmail(e, inputElement.value)
  );

  const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
});

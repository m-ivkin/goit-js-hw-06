const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the required fields!");
  }

  const userInfo = { email: email.value, password: password.value };

  console.log(userInfo);
  event.currentTarget.reset();
}

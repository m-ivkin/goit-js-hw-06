const inputElement = document.querySelector("#validation-input");
console.log(inputElement.getAttribute("data-length"));

inputElement.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (
    event.currentTarget.value.length == inputElement.getAttribute("data-length")
  ) {
    inputElement.classList.add("valid");
    if (inputElement.classList.contains("invalid")) {
      inputElement.classList.remove("invalid");
    }
  } else {
    inputElement.classList.add("invalid");
    if (inputElement.classList.contains("valid")) {
      inputElement.classList.remove("valid");
    }
  }
}

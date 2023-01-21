const decrementButton = document.querySelector(
  'button[data-action = "decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action = "increment"]'
);
const counter = document.querySelector("#value");

let counterValue = 0;

decrementButton.addEventListener("click", () => {
  counterValue--;
  counter.textContent = counterValue;
});

incrementButton.addEventListener("click", () => {
  counterValue++;
  counter.textContent = counterValue;
});

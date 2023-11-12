const sliderValue = document.querySelector(".sliderValue span");
const sliderInp = document.querySelector(".sliderInp");

sliderInp.addEventListener("input", () => {
  let value = sliderInp.value;
  sliderValue.innerText = value;
  sliderValue.style.left = value / 2 + "%";
  sliderValue.classList.add("show");
});

sliderInp.addEventListener("blur", () => {
  sliderValue.classList.remove("show");
});

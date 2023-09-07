"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const billInput = document.getElementById("billAmount");
  const numberOfPpl = document.getElementById("numberPll");
  const tipAmount = document.querySelector(".side__2__numbox-num");
  const total = document.querySelector(".side__2__numbox-num-2");
  const custom = document.querySelector("#Custom");
  const reset = document.querySelector(".side__2-btn");
  const tipButtons = [5, 10, 15, 25, 50].map((value) =>
    document.querySelector(`#tip${value}`)
  );

  const updateTip = (tip) => {
    const numPPL = Number(numberOfPpl.value);
    const billAmount = Number(billInput.value);
    tipAmount.textContent = ((billAmount / numPPL) * (tip / 100)).toFixed(2);
  };

  custom.addEventListener("input", () => updateTip(custom.value));

  reset.addEventListener("click", () => {
    [tipAmount, total, billInput, numberOfPpl].forEach(
      (el) => (el.value = (0).toFixed(1))
    );
    tipButtons.forEach((button) => button.classList.remove("hold"));
  });

  tipButtons.forEach((button, index) =>
    button.addEventListener("click", () => {
      updateTip([5, 10, 15, 25, 50][index]);
      tipButtons.forEach((b) => b.classList.toggle("hold", b === button));
    })
  );

  billInput.addEventListener(
    "input",
    () => (total.textContent = Number(billInput.value).toFixed(2))
  );

  numberOfPpl.addEventListener("input", () => {
    const numPPL = Number(numberOfPpl.value);
    const billAmount = Number(billInput.value);
    total.textContent =
      !isNaN(numPPL) && numPPL !== 0 ? (billAmount / numPPL).toFixed(2) : "N/A";
    tipAmount.textContent =
      !isNaN(tipPercent) && tipPercent !== 0
        ? ((billAmount / numPPL) * (tipPercent / 100)).toFixed(2)
        : "N/A";
  });
});

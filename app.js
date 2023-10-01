"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const billInput = document.getElementById("billAmount");
  const NumberOfppl = document.getElementById("numberPll");
  const TipAmount = document.querySelector(".side__2__numbox-num");
  const Total = document.querySelector(".side__2__numbox-num-2");
  const tip5 = document.querySelector("#tip5");
  const tip10 = document.querySelector("#tip10");
  const tip15 = document.querySelector("#tip15");
  const tip25 = document.querySelector("#tip25");
  const tip50 = document.querySelector("#tip50");
  const custom = document.querySelector("#Custom");
  // const tipButtons = document.querySelectorAll(".side__1__percentage-1");
  const reset = document.querySelector(".side__2-btn");

  custom.addEventListener("input", function () {
    const custominput = custom.value;
    tipCalc(custominput);
  });

  reset.addEventListener("click", function () {
    TipAmount.textContent = (0).toFixed(1);
    Total.textContent = (0).toFixed(1);
    billInput.value = (0).toFixed(1);
    NumberOfppl.value = 0;
    document.querySelector("#tip5").classList.remove("hold");
    document.querySelector("#tip10").classList.remove("hold");
    document.querySelector("#tip15").classList.remove("hold");
    document.querySelector("#tip25").classList.remove("hold");
    document.querySelector("#tip50").classList.remove("hold");
  });

  let tipPercent = NaN;
  const tipCalc = function (tip) {
    const numPPL = Number(NumberOfppl.value);
    const billAmount = Number(billInput.value);
    const newTip = (billAmount / numPPL) * (tip / 100);
    TipAmount.textContent = newTip.toFixed(2);
  };

  tip5.addEventListener("click", function () {
    tipCalc(5);
    document.querySelector("#tip5").classList.add("hold");
    document.querySelector("#tip10").classList.remove("hold");
    document.querySelector("#tip15").classList.remove("hold");
    document.querySelector("#tip25").classList.remove("hold");
    document.querySelector("#tip50").classList.remove("hold");
  });
  tip10.addEventListener("click", function () {
    tipCalc(10);
    document.querySelector("#tip5").classList.remove("hold");
    document.querySelector("#tip10").classList.add("hold");
    document.querySelector("#tip15").classList.remove("hold");
    document.querySelector("#tip25").classList.remove("hold");
    document.querySelector("#tip50").classList.remove("hold");
  });
  tip15.addEventListener("click", function () {
    tipCalc(15);
    document.querySelector("#tip5").classList.remove("hold");
    document.querySelector("#tip10").classList.remove("hold");
    document.querySelector("#tip15").classList.add("hold");
    document.querySelector("#tip25").classList.remove("hold");
    document.querySelector("#tip50").classList.remove("hold");
  });
  tip25.addEventListener("click", function () {
    tipCalc(25);

    document.querySelector("#tip5").classList.remove("hold");
    document.querySelector("#tip10").classList.remove("hold");
    document.querySelector("#tip15").classList.remove("hold");
    document.querySelector("#tip25").classList.add("hold");
    document.querySelector("#tip50").classList.remove("hold");
  });
  tip50.addEventListener("click", function () {
    tipCalc(50);
    document.querySelector("#tip5").classList.remove("hold");
    document.querySelector("#tip10").classList.remove("hold");
    document.querySelector("#tip15").classList.remove("hold");
    document.querySelector("#tip25").classList.remove("hold");
    document.querySelector("#tip50").classList.add("hold");
  });

  billInput.addEventListener("input", function () {
    const billAmount = Number(billInput.value);
    Total.textContent = billAmount.toFixed(2);
  });
  NumberOfppl.addEventListener("input", function () {
    const numPPL = Number(NumberOfppl.value);
    const billAmount = Number(billInput.value);

    if (!isNaN(numPPL) && numPPL !== 0) {
      const newTotal = billAmount / numPPL;
      Total.textContent = newTotal.toFixed(2);
    } else {
      Total.textContent = "N/A";
    }

    const newTip = (billAmount / numPPL) * (tipPercent / 100);

    if (!isNaN(tipPercent) && tipPercent !== 0) {
      TipAmount.textContent = newTip.toFixed(2); // Format to two decimal places
    } else {
      TipAmount.textContent = "N/A";
    }
  });
});

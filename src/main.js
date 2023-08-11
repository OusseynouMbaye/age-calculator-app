"use strict";

const inputDay = document.getElementById("dayInput");
const inputMonth = document.getElementById("monthInput");
const inputYear = document.getElementById("yearInput");

const dayOutput = document.getElementById("dayOutput");
const monthOutPut = document.getElementById("monthOutput");
const yearOutput = document.getElementById("yearOutput");

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validationInput() {
  const inputs = document.querySelectorAll("input");
  let valid = true;

  inputs.forEach((input) => {
    const p = input.parentElement;
    if (!input.value) {
      valid = false;
      input.classList.add("errorMessage");
    } else if (inputMonth.value > 12) {
      valid = false;
      // input.style.borderColor = "red";
      input.classList.add("errorMessage");
    } else if (inputDay.value > 31) {
      valid = false;
      input.classList.add("errorMessage");
      // input.style.borderColor = "red";
    } else if (inputYear.value > year) {
      valid = false;
      input.classList.add("errorMessage");
      // input.style.borderColor = "red";
    } else {
      input.style.borderColor = "black";
      valid = true;
    }
  });

  return valid;
}

function ageCalcul(e) {
  e.preventDefault();

  if (validationInput()) {
    if (inputDay.value > day) {
      day = day + months[month - 1];
      month = month - 1;
    }

    if (inputMonth.value > month) {
      month = month + 12;
      year = year - 1;
    }

    const d = day - inputDay.value;
    const m = month - inputMonth.value;
    const y = year - inputYear.value;

    dayOutput.innerHTML = d;
    monthOutPut.innerHTML = m;
    yearOutput.innerHTML = y;

    inputDay.value = "";
    inputMonth.value = "";
    inputYear.value = "";
  }
}

document.querySelector("form").addEventListener("submit", ageCalcul);

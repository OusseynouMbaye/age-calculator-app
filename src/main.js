"use strict";

//ERROR MESSAGES
const errorMessages = {
  emptyField: "This field is required!",
  badDay: "Must be a valid day!",
  badMonth: "Must be a valid month!",
  badYear: "Must be a valid year!",
};

const inputDay = document.getElementById("dayInput");
const inputMonth = document.getElementById("monthInput");
const inputYear = document.getElementById("yearInput");

const dayOutput = document.getElementById("dayOutput");
const monthOutPut = document.getElementById("monthOutput");
const yearOutput = document.getElementById("yearOutput");

const errorDay = document.querySelector(".error-day");
const errorMonth = document.querySelector(".error-month");
const errorYear = document.querySelector(".error-year");

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
      errorDay.textContent = errorMessages.emptyField;
      input.style.borderColor = "red";
    } else if (inputDay.value < 0 || inputDay.value > 31) {
      valid = false;
      errorDay.textContent = errorMessages.badDay;
      input.style.borderColor = "red";
    } else if (inputMonth.value < 0 || inputMonth.value > 12) {
      valid = false;
      errorMonth.textContent = errorMessages.badMonth;
      input.style.borderColor = "red";
    } else if (inputYear.value < 0 || inputYear.value > year) {
      valid = false;
      errorYear.textContent = errorMessages.badYear;
      input.style.borderColor = "red";
    } else {
      input.style.borderColor = "black";
      errorDay.textContent = "";
      errorMonth.textContent = "";
      errorYear.textContent = "";
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

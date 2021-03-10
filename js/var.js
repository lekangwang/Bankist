"use strict";

//import all the element variables
//Login
const loginGreeting = document.getElementById("login-greeting");
const loginUsername = document.getElementById("login-username");
const loginPin = document.getElementById("login-pin");

//Login/logout buttons
const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");

//Balance
const balanceVal = document.getElementById("balance-current-amount");
const balanceType = document.getElementById("balance-current-type");

//Main app
const mainElement = document.getElementById("main-app");

//Movements container
const movContainer = document.getElementById("mov-container");

//Transfer
const transferUsername = document.getElementById("app-transfer-input-username");
const transferAmount = document.getElementById("app-transfer-input-amount");
const transferBtn = document.getElementById("transfer-btn");

//Loan
const loanAmount = document.getElementById("app-loan-input-amount");
const loanBtn = document.getElementById("loan-btn");

//Close
const closeUsername = document.getElementById("app-close-input-username");
const closePin = document.getElementById("app-close-input-pin");
const closeBtn = document.getElementById("close-btn");

//Stats
const statsInVal = document.getElementById("stats-amounts-in");
const statsOutVal = document.getElementById("stats-amounts-out");
const statsInterestVal = document.getElementById("stats-amounts-interest");
const sortBtn = document.getElementById("sort-btn");
const statsLogoutTimer = document.getElementById("stats-timer-time");

//Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const account5 = {
  owner: "Le Kang Wang",
  movements: [1, 1, 1, 1, 1],
  interestRate: 1,
  pin: 5555,
};

// const account5 = {
//   owner: "Le Kang Wang",
//   movements: [1, 1, 1, 1, 1],
//   interestRate: 1,
//   pin: 5555,
// };

const accounts = [account1, account2, account3, account4, account5];

let currentUser = undefined;

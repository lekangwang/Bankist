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

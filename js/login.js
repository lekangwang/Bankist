"use strict";
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

const accounts = [account1, account2, account3, account4];

/*== login/logout function ==*/
const findUserInitials = function (username) {
  let nameArr = username.toLowerCase().split(" ");
  let initialsArr = nameArr.map((namePart) => {
    return namePart.slice(0, 1);
  });

  return initialsArr.join("");
};

loginBtn.addEventListener("click", () => {
  //check if username and pin is contained in accounts array
  const username = loginUsername.value.toLowerCase();
  const pin = loginPin.value;
  let userIndex = undefined;
  const userFound = accounts.some((user, i) => {
    const userInitials = findUserInitials(user.owner);
    const userPin = String(user.pin);
    userIndex = username === userInitials && pin === userPin ? i : undefined;
    return username === userInitials && pin === userPin;
  });

  if (userFound) {
    //reveal logout button, change greeting, show ui
    logoutBtn.style.cssText = "opacity:1;z-index:auto;";

    //change greeting
    const name = accounts[userIndex].owner;
    const firstName = name.slice(0, name.indexOf(" "));
    loginGreeting.innerText = `Hello, ${firstName}`;

    //disable login btn
    loginBtn.disabled = true;

    //show ui with appropriate information=======================
  }
  loginUsername.value = "";
  loginPin.value = "";
});

logoutBtn.addEventListener("click", () => {});

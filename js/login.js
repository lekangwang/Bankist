"use strict";

/*== login/logout function ==*/

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

    //Track the current user
    currentUser = accounts[userIndex];

    //display stats
    updateStats();

    //change greeting
    const name = currentUser.owner;
    const firstName = name.slice(0, name.indexOf(" "));
    loginGreeting.innerText = `Hello, ${firstName}`;

    //disable login btn
    loginBtn.disabled = true;

    //show ui with appropriate information=======================
    displayMovements(currentUser);
    mainElement.style.cssText = "opacity:1;z-index:auto;";
  }
  loginUsername.value = "";
  loginPin.value = "";
});

logoutBtn.addEventListener("click", logOut);

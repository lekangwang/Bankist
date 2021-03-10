//find initials of user
const findUserInitials = function (username) {
  let nameArr = username.toLowerCase().split(" ");
  let initialsArr = nameArr.map((namePart) => {
    return namePart.slice(0, 1);
  });

  return initialsArr.join("");
};

//clear inputs
const clearInputs = function (...inputs) {
  for (let input of inputs) {
    input.value = "";
  }
};

//logout of the account
const logOut = function () {
  //hide and disable ui & logout button
  mainElement.style.cssText = "opacity:0;z-index:-1;";
  logoutBtn.style.cssText = "opacity:0;z-index:-1;";
  //enable login button
  loginBtn.disabled = false;
  //change to old greeting
  loginGreeting.innerText = "Login to get started";
};

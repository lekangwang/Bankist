"use strict";

//Transfer
transferBtn.addEventListener("click", () => {
  //Take find the recipient, and add the deposit to movements array
  const recipient = transferUsername.value;
  const amount = transferAmount.value;
  const recipientIndex = 0;

  //Check if the user inputs are non-empty
  if (recipient === "" || amount === "") {
    clearInputs(transferAmount, transferUsername);
    return;
    //Check that the transfer is non-zero, is +, and is smaller or = their balance
  } else if (amount <= 0 || Number(amount) < Number(balanceVal.innerText)) {
    clearInputs(transferAmount, transferUsername);
    return;
  }

  amount = Number(amount);

  accounts.forEach((account, i) => {
    const username = findUserInitials(account.owner);
    recipientIndex = username === recipient ? i : 0;
  });

  const targetAccount = accounts[recipientIndex];
  targetAccount.movements.push(amount);

  //Add the withdrawal to the spender
  currentUser.movements.push(-amount);
  displayMovements(currentUser);
  clearInputs(transferAmount, transferUsername);
});

//Loan
loanBtn.addEventListener("click", () => {
  //find the loan amount, push to movements array
  const amount = loanAmount.value;

  //Check if the loan amount input is empty
  if (amount === "") {
    clearInputs(loanAmount);
    return;
  } else {
    amount = Number(amount);
  }
  currentUser.movements.push(amount);
  displayMovements(currentUser);
  clearInputs(loanAmount);
});

//Close account
closeBtn.addEventListener("click", () => {
  //check if the input data matches the current
  //account data
  const username = closeUsername.value;
  const pin = closePin.value;

  //check if username or pin is empty
  if (username === "" || pin === "") {
    clearInputs(closeUsername, closePin);
    return;
  }

  pin = Number(pin);

  //check if the input data matches the current
  //account data
  if (
    username !== findUserInitials(currentUser.owner) ||
    pin !== currentUser.pin
  ) {
    clearInputs(closeUsername, closePin);
    return;
  }

  //delete current account from accounts
  accounts.splice(accounts.indexOf(currentUser), 1);

  //logout
  clearInputs(closeUsername, closePin);
  logOut();
});

"use strict";

//Transfer
transferBtn.addEventListener("click", () => {
  //Take find the recipient, and add the deposit to movements array
  const recipient = transferUsername.value;
  let amount = transferAmount.value;
  let recipientIndex = 0;

  //Check if the user inputs are non-empty
  if (recipient === "" || amount === "") {
    clearInputs(transferAmount, transferUsername);
    return;
    //Check that the transfer is non-zero, is +, and is smaller or = their balance
  } else if (amount <= 0 || Number(amount) > Number(balanceVal.innerText)) {
    clearInputs(transferAmount, transferUsername);
    return;
  } else if (!findUsername(recipient)) {
    clearInputs(transferAmount, transferUsername);
    return;
  } else if (findUserInitials(currentUser.owner) === recipient) {
    clearInputs(transferAmount, transferUsername);
    return;
  }

  amount = Number(amount).toFixed(2);

  accounts.forEach((account, i) => {
    const username = findUserInitials(account.owner);
    recipientIndex = username === recipient ? i : 0;
  });

  const targetAccount = accounts[recipientIndex];
  targetAccount.movements.push(Number(amount));

  //Add the withdrawal to the spender
  currentUser.movements.push(-Number(amount));
  displayMovements(currentUser);
  clearInputs(transferAmount, transferUsername);
  updateStats();
});

//Loan
loanBtn.addEventListener("click", () => {
  //find the loan amount, push to movements array
  let amount = loanAmount.value;

  //Check if the loan amount input is empty
  if (amount === "" || amount < 0) {
    clearInputs(loanAmount);
    return;
  } else {
    amount = Number(amount).toFixed(2);
  }
  currentUser.movements.push(Number(amount));
  console.log(currentUser.movements);
  displayMovements(currentUser);
  clearInputs(loanAmount);
  updateStats();
});

//Close account
closeBtn.addEventListener("click", () => {
  //check if the input data matches the current
  //account data
  const username = closeUsername.value;
  let pin = closePin.value;

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

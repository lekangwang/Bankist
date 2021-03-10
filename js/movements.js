"use strict";

//display the movements based on the account
const displayMovements = function (account) {
  const movements = account.movements;
  movContainer.innerHTML = "";
  movements.forEach((mov, i) => {
    const movType = mov < 0 ? "withdrawal" : "deposit";
    const movHTML = `<div class="app-movements-row">
    <div class="app-movements-type app-movements-type-${movType}">
      ${i + 1} ${movType}
    </div>
    <div class="app-movements-amount">${mov} £</div>
  </div>`;

    movContainer.insertAdjacentHTML("afterbegin", movHTML);
  });
};

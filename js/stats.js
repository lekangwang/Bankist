"use strict";

const calcBalance = () => currentUser.movements.reduce((acc, mov) => acc + mov);

const calcIn = function () {
  const movements = [...currentUser.movements];
  const depositArr = movements.filter((mov) => mov > 0);

  return depositArr.reduce((acc, mov) => acc + mov);
};

const calcOut = function () {
  const movements = [...currentUser.movements];
  const withdrawalArr = movements.filter((mov) => mov < 0);
  if (withdrawalArr.length === 0) {
    return 0;
  }
  return Math.abs(withdrawalArr.reduce((acc, mov) => acc + mov));
};

const calcInterest = function () {
  let interest = 0;
  const movements = [...currentUser.movements];
  const depositArr = movements.filter((mov) => mov > 0);
  depositArr.forEach((mov) => {
    interest += mov * (currentUser.interestRate / 100);
  });

  return interest;
};

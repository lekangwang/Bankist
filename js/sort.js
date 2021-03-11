"use strict";

const sortMovements = function (arr) {
  //Take the movements array, sort them
  const movements = [...arr];
  const sortedMovements = [];

  //Insertion sort algorithm
  movements.forEach((mov, i) => {
    if (i == 0) {
      sortedMovements.push(mov);
    } else {
      sortedMovements.push(mov);
      for (let i = sortedMovements.length - 2; i >= 0; i--) {
        if (mov > sortedMovements[i]) {
          break;
        } else {
          swap(sortedMovements, i, i + 1);
        }
      }
    }
  });

  return sortedMovements;
};

let sortedState = false;

sortBtn.addEventListener("click", () => {
  if (!sortedState) {
    displayMovements(currentUser, !sortedState);
  } else {
    displayMovements(currentUser, !sortedState);
  }
  sortedState = !sortedState;
});

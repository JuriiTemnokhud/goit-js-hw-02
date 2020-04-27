// const logItems = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];

const logItems = function (array) {
  for (let i = 1; i < array.length; i += 1) {
    console.log(i);

    console.log(array[i]);
  }
  return;
};

const returnA = logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

console.log(returnA);

const returnB = logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

console.log(returnB);

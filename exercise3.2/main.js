let massiv = [];
let number;
while (true) {
  number = prompt(`Введите число`);
  if (number == 0) {
    break;
  } else {
    massiv.push(number);
  }
}

alert(massiv.reduce((a, b) => Number(a) + Number(b), 0));


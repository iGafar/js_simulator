let number = 0;

while (number != 100) {
  number = prompt("Введите 10");

  if (number == 10) {
    while (number != 100) {
      number = prompt("Введите 20");

      if (number == 20) {
        number = prompt("Введите 40");

        if (number == 40) {
          while (number != 100) {
            number = prompt("Введите 60");

            if (number == 60) {
              while (true) {
                number = prompt("Введите 100");

                if (number == 100) {
                  alert("Спасибо");
                }
                break;
              }
            }
          }
        }
      }
    }
  }
}

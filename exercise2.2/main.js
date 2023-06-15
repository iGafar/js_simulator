const numberOne = prompt('Введите первое число')
const numberTwo = prompt('Введите второе число')
const numberThree = prompt('Введите третье число')

if (numberOne > numberTwo) {
  if (numberOne > numberThree) {
    alert(`${numberOne} большк чем ${numberTwo} и ${numberThree}`)
  } else {
    alert(`${numberThree} больше чем ${numberOne} и ${numberTwo}`)
  }
} else if (numberTwo > numberOne) {
  if (numberTwo > numberThree) {
    alert(`${numberTwo} больше чем ${numberOne} и ${numberThree}`)
  } else {
    alert(`${numberThree} больше чем ${numberOne} и ${numberTwo}`)
  }
} else {
  alert(`${numberThree} больше чем ${numberOne} и ${numberTwo}`)
}
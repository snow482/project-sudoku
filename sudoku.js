const arr = [
  [1, '-', 5, 8, '-', 2, '-', '-', '-'],
  [9, '-', '-', 7, 6, 4, '-', 5, 2],
  ['-', '-', 4, '-', '-', 8, 1, 9, '-'],
  [1, 9, '-', '-', 7, 3, '-', 6, 7],
  [6, 7, 2, '-', 8, 3, '-', 9, '-'],
  ['-', '-', '-', '-', '-', 6, 1, '-', 5],
  ['-', '-', '-', 7, 6, '-', '-', '-', 3],
  [4, 3, '-', '-', 2, '-', 5, '-', 1],
  [6, '-', '-', 3, '-', 8, 9, '-', '-'],
];

const { log } = require('console');
const fs = require('fs');

function read() {
  const sudoku = fs.readFileSync('./puzzles.txt', 'utf8');

  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
}

function findEmpty(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] !== '-') {
        continue;
      } else {
        return [i, j];
      }
    }
  }
}

function solve(arr) {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
console.log(findEmpty(arr));

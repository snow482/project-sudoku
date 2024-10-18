// let arr = 
// [   
//   [1, '-', 5, 8, '-', 2, '-', '-', '-'],
//   [9, '-', '-', 7, 6, 4, '-', 5, 2],
//   ['-', '-', 4, '-', '-', 8, 1, 9, '-'],
//   [1, 9, '-', '-', 7, 3, '-', 6, 7],
//   [6, 7, 2, '-', 8, 3, '-', 9, '-'],
//   ['-', '-', '-', '-', '-', 6, 1, '-', 5],
//   ['-', '-', '-', 7, 6, '-', '-', '-', 3],
//   [4, 3, '-', '-', 2, '-', 5, '-', 1],
//   [6, '-', '-', 3, '-', 8, 9, '-', '-']
// ]

const fs = require("fs");
const { EOL } = require("os");

function read() {
  const filePath = './puzzles.txt';
  const data = fs.readFileSync(filePath, "utf8");
  let sudoku = data.split(EOL).slice(0, -1).map(el => {return el.split('')});
  const firstSudoku = sudoku[0]

  let res = []
  for (let i = 0; i < firstSudoku.length; i+=9) {
    res.push(firstSudoku.slice(i, i + 9))}
    return res.map(elArr => elArr.map(el => el === '-' ? ['-'] : (el)));
  }
  return res.map(elArr => elArr.map(el => el === '-' ? ['-'] : Number(el)).join(' ')).join((EOL));
}
console.log(read());
function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved(arr) {
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}

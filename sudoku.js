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
 

function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved(arr) {
}

function prettyBoard() {
  if (isSolved()){
    let conclusion = read()
  let r = conclusion.map(el => el.join(' '))
  return r.join((EOL))
}
  else{
    console.log('НеСобакиНеПолины!');
  }
}

 console.log(prettyBoard());
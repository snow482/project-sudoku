// let arr = 
//   [   
//     ['1', '-', '5', '8', '-', '2', '-', '-', '-'],
//     ['-', '9', '-', '-', '7', '6', '4', '-', '5'],
//     ['2','-', '-', '4', '-', '-', '8', '1', '9'],
//     ['-', '1', '9', '-', '-', '7', '3', '-', '6'],
//     ['7', '6', '2', '-', '8', '3', '-', '9', '-'],
//     ['-', '-', '-', '-', '6', '1', '-', '5', '-'],
//     ['-', '-', '7', '6', '-', '-', '-', '3', '-'],
//     ['4', '3', '-', '-', '2', '-', '5', '-', '1'],
//     ['6', '-', '-', '3', '-', '8', '9', '-', '-'],
//   ]

const SIZE = 9 // размер поля 9*9
const BOXSIZE = 3 // размер бокса

function read() {
  const fs = require("fs");
  const { EOL } = require("os");

  const filePath = './puzzles.txt';
  const data = fs.readFileSync(filePath, "utf8");
  let sudoku = data.split(EOL).slice(0, -1).map(el => {return el.split('')});
  const firstSudoku = sudoku[0]


  let res = []
  for (let i = 0; i < firstSudoku.length; i+=9) {
    res.push(firstSudoku.slice(i, i + 9))}
    return res.map(elArr => elArr.map(el => el === '-' ? ['-'] : (el)));
  }
  return res.map(elArr => elArr.map(el => el === '-' ? ['-'] : (el)))
  //return res.map(elArr => elArr.map(el => el === '-' ? ['-'] : Number(el)).join(' ')).join((EOL));
}

function findEmpty(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === '-') {
        return [i, j];
      }
    }
  }
  return null
}
//console.log(findEmpty(arr));


const validation =(readArr, number, position) => {
  const [row, column] = position

  for (let i = 0; i < SIZE; i++) {
    if (readArr[i][column] === number && i !== row) {
      return false
    }
  }

  for (let j = 0; j < SIZE; j++) {
    if (readArr[row][j] === number && j !== column) {
      return false
    }
  }

  const boxRow = Math.floor(row/BOXSIZE) * BOXSIZE
  const boxColumn = Math.floor(column/BOXSIZE) * BOXSIZE

  for (let i = boxRow; i < boxRow + BOXSIZE; i++) {
    for (let j = boxColumn; j < boxColumn + BOXSIZE; j++) {
        if (readArr[i][j] === number && i !== row && j !== column) {
            return false;
        }
    }
  }

  return true
}

//console.log(solve(read()))


function solve(arr) {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */

  console.log(findEmpty(arr));
  if (findEmpty(arr)) {
    for (let i = 1; i < SIZE + 1; i++) {
      let currentNumber = i
      if (validation(currentNumber, findEmpty(arr), arr)) {
        const [r,c] = findEmpty(arr);
        
        
        arr[r][c] = currentNumber;
  
        if(solve(arr)) {
          return true;
        }
        arr[r][c] = '.';
      }
    }
  }

  return null
}



console.log(solve(read()))

function isSolved(arr) {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */

  if (solve(arr)) {
    return arr
  } else {
    return false
  }

}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}



//console.log(read())
//console.log(solve(read()))
//console.log(isSolved(solve(read())));


//isSolved(solve(read()))




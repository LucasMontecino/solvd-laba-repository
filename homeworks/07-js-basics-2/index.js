// 1 https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
  return arr.reduce((acc, el) => {
    if (el > 0) {
      return acc + el;
    } else {
      return acc;
    }
  }, 0);
}

// 2 https://www.codewars.com/kata/5a3e1319b6486ac96f000049

function pairs(ar) {
  let count = 0;

  for (let i = 0; i < ar.length; i = i + 2) {
    if (ar[i] + 1 === ar[i + 1] || ar[i] - 1 === ar[i + 1]) {
      count++;
    }
  }

  return count;
}

// 3 https://www.codewars.com/kata/5aba780a6a176b029800041c

function maxMultiple(divisor, bound) {
  let result = 0;

  let i = 1;
  while (i <= bound) {
    if (i % divisor === 0) {
      result = i;
    }
    i++;
  }
  return result;
}

// 4 https://www.codewars.com/kata/514a6336889283a3d2000001

function getEvenNumbers(numbersArray) {
  return numbersArray.filter((item) => item % 2 === 0);
}

// 5 https://www.codewars.com/kata/5a090c4e697598d0b9000004

function solve(arr) {
  let cpyOne = [...arr];
  let cpyTwo = [...arr];

  cpyOne.sort((a, b) => (a < b ? 1 : -1));
  cpyTwo.sort((a, b) => (a > b ? 1 : -1));

  let result = [];
  for (let i = 0; i < cpyOne.length; i++) {
    if (!result.includes(cpyOne[i])) {
      result.push(cpyOne[i]);
    }

    if (!result.includes(cpyTwo[i])) {
      result.push(cpyTwo[i]);
    }
  }
  return result;
}

// 6 https://www.codewars.com/kata/566044325f8fddc1c000002c

function evenChars(string) {
  if (string.length < 2 || string.length > 100) return "invalid string";
  let result = [];

  for (let i = 1; i < string.length; i += 2) {
    result.push(string[i]);
  }

  return result;
}

// 7 https://www.codewars.com/kata/545a4c5a61aa4c6916000755

function gimme(triplet) {
  let cpyTriplet = triplet.slice().sort((a, b) => a - b);
  return triplet.indexOf(cpyTriplet[1]);
}

// 8 https://www.codewars.com/kata/578553c3a1b8d5c40300037c

function binaryArrayToNumber(arr) {
  let value = arr.join("");
  return parseInt(value, 2);
}

// 9 https://www.codewars.com/kata/585d7d5adb20cf33cb000235

function findUniq(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1] && arr[i + 1] !== arr[i + 2]) {
      return arr[i + 1];
    }

    if (arr[i] !== arr[i + 1] && arr[i] !== arr[i + 2]) {
      return arr[i];
    }
  }
}

// 10 https://www.codewars.com/kata/581e014b55f2c52bb00000f8

function decipherThis(str) {
  let arr = str.split(" ");

  for (let i = 0; i < arr.length; i++) {
    let firstLetter = "";
    let curr = arr[i];

    for (let j = 0; j < curr.length; j++) {
      if (Number(curr[j]) || curr[j] == 0) {
        firstLetter += curr[j];
      }
    }

    curr = String.fromCharCode(firstLetter) + curr.slice(firstLetter.length);
    if (curr.length > 2) {
      let secondLetter = curr[1];
      let lastLetter = curr[curr.length - 1];

      curr =
        curr.slice(0, secondLetter.length) +
        lastLetter +
        curr.slice(secondLetter.length + 1, curr.length - 1) +
        secondLetter;
    }

    arr[i] = curr;
  }

  return arr.join(" ");
}

// 11 https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

function sortArray(array) {
  let oddNumbers = array.filter((num) => num % 2 !== 0);

  oddNumbers.sort((a, b) => a - b);

  let index = 0;
  return array.map((num) => {
    if (num % 2 !== 0) {
      return oddNumbers[index++];
    } else {
      return num;
    }
  });
}

// advanced 1 https://www.codewars.com/kata/515bb423de843ea99400000a

class PaginationHelper {
  constructor(collection, itemsPerPage) {
    // The constructor takes in an array of items and a integer indicating how many
    // items fit within a single page
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }
  itemCount() {
    // returns the number of items within the entire collection
    return this.collection.length;
  }
  pageCount() {
    // returns the number of pages
    return Math.ceil(this.itemCount() / this.itemsPerPage);
  }
  pageItemCount(pageIndex) {
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range
    //
    if (pageIndex > this.pageCount() - 1 || pageIndex < 0) return -1;
    let currentPage = this.collection.slice(
      this.itemsPerPage * pageIndex,
      this.itemsPerPage + this.itemsPerPage * pageIndex
    );
    return currentPage.length;
  }
  pageIndex(itemIndex) {
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
    if (itemIndex > this.itemCount() - 1 || itemIndex < 0) return -1;

    return Math.ceil((itemIndex + 1) / this.itemsPerPage) - 1;
  }
}

module.exports = function check(str, bracketsConfig) {
  const openBrackets = ["(", "[", "{", "1", "3", "5"];
  const openBracketsDoubleFirst = ["|"];
  const openBracketsDoubleSecond = ["7"];
  const openBracketsDoubleThird = ["8"];

  const bracketsСouple = {
    [")"]: "(",
    ["]"]: "[",
    ["}"]: "{",
    ["|"]: "|",
    ["2"]: "1",
    ["4"]: "3",
    ["6"]: "5",
    ["7"]: "7",
    ["8"]: "8",
  };

  let storage = [];
  let countFirst = 0;
  let countSecond = 0;
  let countThird = 0;
  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    let lastInStorage = storage[storage.length - 1];

    if (openBrackets.includes(current)) {
      storage.push(current);
    } else if (openBracketsDoubleFirst.includes(current)) {
      countFirst = countFirst + 1;
      if (countFirst % 2 === 1) {
        storage.push(current);
      } else if (
        countFirst % 2 === 0 &&
        bracketsСouple[current] === lastInStorage
      ) {
        storage.pop();
        countFirst = 0;
      }
    } else if (openBracketsDoubleSecond.includes(current)) {
      countSecond = countSecond + 1;
      if (countSecond % 2 === 1) {
        storage.push(current);
      } else if (
        countSecond % 2 === 0 &&
        bracketsСouple[current] === lastInStorage
      ) {
        storage.pop();
        countSecond = 0;
      }
    } else if (openBracketsDoubleThird.includes(current)) {
      countThird = countThird + 1;
      if (countThird % 2 === 1) {
        storage.push(current);
      } else if (
        countThird % 2 === 0 &&
        bracketsСouple[current] === lastInStorage
      ) {
        storage.pop();
        countThird = 0;
      }
    } else {
      if (storage.length === 0) {
        return false;
      }

      if (bracketsСouple[current] === lastInStorage) {
        storage.pop();
      } else {
        return false;
      }
    }
  }
  return storage.length === 0;
};

const arr = [1, 2, 3, -1, -2, -3];

let isOnlyNum = true;

function getArrPositiveNum(arr) {
  const newArr = [];
  if (arr.length === 0) {
    isOnlyNum = false;
    return alert(`Array is empty.`);
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      newArr.push(arr[i]);
    }
  }
  if (newArr.length > 0) {
    return newArr;
  } else {
    return null;
  }
}

const result = getArrPositiveNum(arr);
if (isOnlyNum) {
  alert(result);
}

/* ----------------------------------------------------------------- */

/* Решение со вспомогательной функцией для проверки данных, если я правильно понял,
   что проверять необходимо, чтобы массив содержал однотипные данные. Если
   мною не верно понято задание из <P.S. Можно написать вспомогательную
   функцию для проверки данных (по желанию)>, тогда можно не учитывать это дополнение. */

/* const arr = [1, 2, 3, -1, -2, -3];

let isOnlyNum = true;

function checkIsArrayNum(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i]) || arr[i] === "") {
      alert(`There are not only numbers in the array.`);
      isOnlyNum = false;
      break;
    }
  }
}

function getArrPositiveNum(arr) {
  checkIsArrayNum(arr);
  const newArr = [];
  if (arr.length === 0) {
    alert(`Array is empty.`);
    isOnlyNum = false;
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      newArr.push(arr[i]);
    }
  }
  if (newArr.length > 0) {
    return newArr;
  } else {
    return null;
  }
}

const result = getArrPositiveNum(arr);

if (isOnlyNum) {
  alert(result);
}
 */

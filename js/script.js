const arr = [1, 2, 3, -1, -2, -3];

function getArrPositiveNum(arr) {
  const newArr = [];
  if (arr.length === 0) return `Array is empty.`;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) newArr.push(arr[i]);
  }
  return newArr.length > 0 ? newArr : null;
}

alert(getArrPositiveNum(arr));
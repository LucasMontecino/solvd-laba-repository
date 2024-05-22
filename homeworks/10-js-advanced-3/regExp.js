// 6. Digit or not

function digitOrNot(value) {
  let regex = /^[0-9]/g;

  if (!value) throw new Error("Please enter an string");

  return regex.test(value);
}

// 3. setTimeout/setInterval

function createInterval() {
  let i = 1;
  let intervalId = setInterval(() => {
    console.log(`Elapsed time ${i} sec`);
    i++;
  }, i * 1000);
  setTimeout(() => {
    clearInterval(intervalId);
  }, 6000);
}

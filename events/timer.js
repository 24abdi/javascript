function myfunction() {
  console.log("Hello World!");
  console.log("I am learning JavaScript timers.");
}

function setTinterval(func, delay) {
  func();
  return setInterval(func, delay);
}

let timer = setTinterval(myfunction, 2000);

function stopTimer() {
  clearInterval(timer);
}

setTimeout(stopTimer, 10000);

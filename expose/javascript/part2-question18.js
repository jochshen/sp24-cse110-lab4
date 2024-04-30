function printCurrenttime() {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}

printCurrenttime();

setInterval(printCurrenttime, 1000)

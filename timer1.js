const args = process.argv.slice(2);

for (let alarm of args) {
  alarm = Number(alarm);
  // console.log(typeof alarm); //string
  if (!isNaN(alarm)) {
    if (alarm >= 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
        process.stdout.write("HI");
      }, alarm * 1000);
    }
  }
}
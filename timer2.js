const chalk = require('chalk');

const stdIn = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
};

const seconds = {
  1 : 1,
  2 : 2,
  3 : 3,
  4 : 4,
  5 : 5,
  6 : 6,
  7 : 7,
  8 : 8,
  9 : 9,
};

const introMsg = () => {
  console.log(chalk.black.bgYellow.bold('Instructions'));
  console.log('---------------');
  console.log(chalk.cyanBright(`Press ${chalk.white("b")} to test Alarm`));

  console.log(chalk.cyanBright(`Press ${chalk.white("ctrl - c")} to exit`));
  console.log(chalk.cyanBright(`Press any key from ${chalk.white("1 - 9")} to set alarm in seconds`));
};

// process.stdout.write('\x07') => for sounds.
const timer = () => {
  const stdin = stdIn();
  const stdout = process.stdout;

  stdin.on('data', (key) => {
    if (key === 'b') {
      stdout.write(chalk.red('Testing\n'));
    } else if (seconds[key] !== undefined) {
      stdout.write(chalk.blue(`Setting timer for ${chalk.white(key)} seconds\n`));
      setTimeout(() => {
        stdout.write(chalk.red('Beep\n'));
      }, key * 1000);
    } else if (key === '\u0003') {
      stdout.write('Thank you for using me, Bye!\n');
      process.exit();
    }
  });
};

const play = () => {
  introMsg();
  timer();
};

play();


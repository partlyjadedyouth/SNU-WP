const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("구구단을 계산할 숫자를 입력해주세요 (1-9): ", (number) => {
  if (number < 1 || number > 9) {
    console.log("1부터 9 사이의 숫자를 입력해주세요.");
  } else {
    for (let i = 1; i <= 9; i++) {
      console.log(`${number} x ${i} = ${number * i}`);
    }
  }
  rl.close();
});

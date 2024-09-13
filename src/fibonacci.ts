import * as readline from 'readline';

function isFibonacci(num: number): boolean {
  if (num < 0) return false;

  const fibonacciNumbers: number[] = [0, 1];

  while (true) {
    const nextNumber =
      fibonacciNumbers[fibonacciNumbers.length - 1] +
      fibonacciNumbers[fibonacciNumbers.length - 2];

    if (nextNumber === num) return true;
    if (nextNumber > num) return false;

    fibonacciNumbers.push(nextNumber);
  }
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    'Enter a number to check if it is a Fibonacci number: ',
    (input) => {
      const numberToCheck = parseInt(input, 10);

      if (isNaN(numberToCheck)) {
        console.log('Please enter a valid number.');
      } else if (isFibonacci(numberToCheck)) {
        console.log(`${numberToCheck} is a Fibonacci number.`);
      } else {
        console.log(`${numberToCheck} is NOT a Fibonacci number.`);
      }

      rl.close();
    }
  );
}

main();

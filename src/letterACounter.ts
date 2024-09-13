import * as readline from 'readline';

function countLetterA(input: string): { exists: boolean; count: number } {
  const count = (input.match(/a/gi) || []).length;
  return { exists: count > 0, count };
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Enter a string to check for the letter "a": ', (input) => {
    const result = countLetterA(input);

    if (result.exists) {
      console.log(`The letter 'a' appears ${result.count} times.`);
    } else {
      console.log('The letter "a" does not appear in the string.');
    }

    rl.close();
  });
}

main();

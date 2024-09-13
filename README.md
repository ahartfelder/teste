# Test Project

This project includes two TypeScript applications:

1. **Fibonacci Number Checker**: Checks if a given number is part of the Fibonacci sequence.
2. **Letter 'a' Counter**: Counts the occurrences of the letter 'a' (both uppercase and lowercase) in a given string.

## Project Setup

To get started with this project, follow these steps:

### 1. Clone the Repository

If you haven't already, clone the repository to your local machine:

```bash
git clone https://github.com/ahartfelder/teste.git
cd teste
```

### 2. Install Dependencies

Make sure you have Node.js 20 installed. Then, install the required dependencies using npm:

```bash
npm install
```

### 3. Running the Applications

You can run the applications using the following npm commands:

- **Fibonacci Number Checker**:

  ```bash
  npm run fibonacci
  ```

  This will prompt you to enter a number to check if it is a Fibonacci number.

- **Letter 'a' Counter**:

  ```bash
  npm run counter
  ```

  This will prompt you to enter a string to count the occurrences of the letter 'a'.

### 4. How It Works

- **Fibonacci Number Checker**: The application calculates if the entered number is part of the Fibonacci sequence and outputs the result.

- **Letter 'a' Counter**: The application counts and displays the number of occurrences of the letter 'a' in the input string.

### 5. Project Structure

- **`src/fibonacci.ts`**: Contains the logic for checking if a number is in the Fibonacci sequence.
- **`src/letterACounter.ts`**: Contains the logic for counting occurrences of the letter 'a' in a string.

### 6. Development

This project uses TypeScript and `ts-node`. The development dependencies are listed in `package.json`:

- `ts-node`: TypeScript execution environment for Node.js
- `typescript`: TypeScript compiler

To update the dependencies or add new ones, modify the `package.json` file and run:

```bash
npm install
```

### 7. License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for more details.

## Example Usage

- **Fibonacci Number Checker**:

  When you run the application with `npm run fibonacci`, it will ask you to input a number:

  ```
  Enter a number to check if it is a Fibonacci number: 21
  ```

  It will then output:

  ```
  21 is a Fibonacci number.
  ```

  If you input a number that is not in the sequence, the output will be:

  ```
  4 is NOT a Fibonacci number.
  ```

- **Letter 'a' Counter**:

  When you run the application with `npm run counter`, it will ask you to input a string:

  ```
  Enter a string to check for the letter "a": Example string with multiple As.
  ```

  It will then output:

  ```
  The letter 'a' occurs 4 time(s) in the string.
  ```

## Contact

For any questions or feedback, you can reach out to [ahartfelder@gmail.com](mailto:ahartfelder@gmail.com).

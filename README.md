# Fibonacci Number Checker

This project is a TypeScript application that checks if a given number is part of the Fibonacci sequence. The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, starting from 0 and 1.

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

### 3. Running the Application

You can run the Fibonacci number checker script using the following npm command:

```bash
npm run fibonacci
```

### 4. How It Works

The application prompts you to enter a number via the command line. It then calculates if the number is part of the Fibonacci sequence and outputs the result.

### 5. Project Structure

- **`src/fibonacci.ts`**: The TypeScript source file containing the logic for checking if a number is in the Fibonacci sequence.

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

## Contact

For any questions or feedback, you can reach out to [ahartfelder@gmail.com](mailto:ahartfelder@gmail.com).

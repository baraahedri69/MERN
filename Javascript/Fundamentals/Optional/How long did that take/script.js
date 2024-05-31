const { performance } = require('perf_hooks');

// Optimized isPrime function
Number.prototype.isPrime = function() {
    if (this <= 1) return false;
    if (this === 2) return true;
    if (this % 2 === 0) return false;
    
    const sqrt = Math.sqrt(this);
    for (let i = 3; i <= sqrt; i += 2) {
        if (this % i === 0) {
            return false;
        }
    }
    return true;
};

function findNthPrime(n) {
    let primeCount = 0;
    let num = 2;
    const start = performance.now();

    while (primeCount < n) {
        if (num.isPrime()) {
            primeCount++;
        }
        num++;
    }

    console.log(`The ${n}th prime number is ${num - 1}`);
    console.log(`This took ${performance.now() - start} milliseconds to run`);
}

function compareFibonacci() {
    // Recursive Fibonacci
    function rFib(n) {
        if (n < 2) {
            return n;
        }
        return rFib(n - 1) + rFib(n - 2);
    }

    // Iterative Fibonacci
    function iFib(n) {
        const vals = [0, 1];
        while (vals.length - 1 < n) {
            let len = vals.length;
            vals.push(vals[len - 1] + vals[len - 2]);
        }
        return vals[n];
    }

    // Measuring performance of recursive Fibonacci
    let start = performance.now();
    console.log(rFib(20));
    console.log(`Recursive Fibonacci took ${performance.now() - start} milliseconds to run`);

    // Measuring performance of iterative Fibonacci
    start = performance.now();
    console.log(iFib(20));
    console.log(`Iterative Fibonacci took ${performance.now() - start} milliseconds to run`);
}

function reverseStringEfficiently() {
    const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";

    // Using loop
    function reverseString(str) {
        let reversed = '';
        for (let i = str.length - 1; i >= 0; i--) {
            reversed += str[i];
        }
        return reversed;
    }

    const start = performance.now();
    const reversed = reverseString(story);
    console.log(`Reversed string using loop: ${reversed}`);
    console.log(`String reversal using loop took ${performance.now() - start} milliseconds to run`);
}

// Run the functions
findNthPrime(1e4);  // Finding the 10,000th prime
findNthPrime(1e5);  // Finding the 100,000th prime
findNthPrime(1e6);  // Finding the 1,000,000th prime
compareFibonacci();  // Comparing Fibonacci implementations
reverseStringEfficiently();  // Reversing the string efficiently
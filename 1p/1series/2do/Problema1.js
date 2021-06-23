//Fibonacci
//Araujo Rubio Cesar 2A
function fibonacci(n)
{
    let number=[0,1];
    for (let i = 2; i <n; i++) {
        number[i] = number[i - 2] + number[i - 1];
    }
    return number;
} document.write(fibonacci(5));
  
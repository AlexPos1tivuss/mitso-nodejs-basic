// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

// Function to receive data from the main thread
tw.worker.addEventListener('message', function(event) {
    const n = event.data;
    const result = nthFibonacci(n);
    sendResult(result);
});

const sendResult = (result) => {
    // This function sends the result of nthFibonacci computations to the main thread
    tw.worker.postMessage(result);
};

sendResult();
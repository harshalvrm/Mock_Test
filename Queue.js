class Queue {
    constructor() {
      this.queueArray = [];
    }
  
    enqueue(element) {
      this.queueArray.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty. Cannot perform dequeue operation.";
      }
      return this.queueArray.shift();
    }
  
    isEmpty() {
      return this.queueArray.length === 0;
    }
  }
  
  // Example usage:
  const queue = new Queue();
  
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  
  console.log(queue.dequeue());  // Output: 1
  console.log(queue.dequeue());  // Output: 2
  console.log(queue.dequeue());  // Output: 3
  console.log(queue.dequeue());  // Output: Queue is empty. Cannot perform dequeue operation.
  console.log(queue.isEmpty());  // Output: true
  
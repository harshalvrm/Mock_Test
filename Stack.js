class Stack {
  constructor() {
    this.stackArray = [];
  }

  push(element) {
    this.stackArray.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty. Cannot perform pop operation.";
    }
    return this.stackArray.pop();
  }

  isEmpty() {
    return this.stackArray.length === 0;
  }
}

// Example usage:
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop());  // Output: 3
console.log(stack.pop());  // Output: 2
console.log(stack.pop());  // Output: 1
console.log(stack.pop());  // Output: Stack is empty. Cannot perform pop operation.
console.log(stack.isEmpty());  // Output: true

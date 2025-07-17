const isEven = (n) => (n & 1) === 0;

const number = 5;
const message = isEven(number) ? 'The number is even.' : 'The number is odd.';
console.log(message);

// Standard version using a ternary operator
// if(isEven(number)) {
//   message = 'The number is even.';
// } else {
//   message = 'The number is odd.';
// }

const note = {
    title: 'Ternary Operator Example',
    content: 'This example demonstrates the use of a ternary operator to determine if a number is even or odd.',
    date: Date.now(),
    isPublished: true,
}

const prompt = `
    Title: ${note.title}
    Content: ${note.content}
    Date: ${new Date(note.date).toLocaleDateString()}
    Status: ${note.isPublished ? 'Published' : 'Draft'}
`;
console.log(prompt);

// Short-circuit evaluation
// Returns the RHS if the LHS value is truthy, otherwise returns the LHS value
console.log(note.isPublished && 'This note is published.');
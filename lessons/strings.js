// Standard strings
let helloWorld = 'Hello, World!';
console.log(helloWorld);

// Concatenation
let firstName = 'John';
let lastName = 'Doe';

let standard = firstName + ' ' + lastName + '!'; // Standard concatenation
let template = `${firstName} ${lastName}!`; // Template literals

console.log(standard);
console.log(template);

// Usage example
const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const localeDate = date.toLocaleDateString();
    const localeTime = date.toLocaleTimeString();
    return `${localeDate} at ${localeTime}`;
}

const note = {
    title: 'Meeting Notes',
    content: 'Discuss project milestones and deadlines.',
    timestamp: Date.now()
}

console.log(`Last Edited: ${formatDate(note.timestamp)}`);
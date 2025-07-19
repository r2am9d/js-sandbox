const notes = [
    {
        title: 'First note', 
        content: 'Lorem ipsum 1',
        images: ['image1', 'image2'],
        sections: {references: 'references', footer: 'footer'},
    },
    {title: 'Second note', content: 'Lorem ipsum 2'},
    {title: 'Third note', content: 'Lorem ipsum 3'},
    {title: 'Fourth note', content: 'Lorem ipsum 4'},
    {title: 'Fifth note', content: 'Lorem ipsum 5'},
];

const [firstNote, secondNote, ...otherNotes] = notes;
const {
    title, 
    content, 
    sections: {references, footer}, // Nested destructuring
    images: [image1, image2] // Nested destructuring
} = firstNote;

// Data by value
console.log(firstNote);
console.log(secondNote);
console.log(otherNotes);

// Data by prop name
console.log(title, content);
console.log(references, footer);

// Data by value
console.log(image1, image2);
const note = {
    id: 1,
    title: 'First note', 
    content: 'Lorem ipsum 1',
    images: ['image1', 'image2'],
    sections: {references: 'references', footer: 'footer'},
    pinned: true,
}

const newNote = {
    ...note,
    color: 'red',
}

// Copy and assign new values
console.log(note)
console.log(newNote)
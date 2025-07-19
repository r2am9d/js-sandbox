const note = {
    id: 1,
    title: 'First note', 
    content: 'Lorem ipsum 1',
    images: ['image1', 'image2'],
    sections: {references: 'references', footer: 'footer'},
    pinned: true,
}

// Optional chaining and nullish coalesce
const city = note.address?.city ?? 'Colorado'
console.log(city)
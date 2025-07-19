const notes = [
    {
        id: 1,
        title: 'First note', 
        content: 'Lorem ipsum 1',
        images: ['image1', 'image2'],
        sections: {references: 'references', footer: 'footer'},
        pinned: true,
    },
    {id: 2, title: 'Second note', content: 'Lorem ipsum 2', pinned: true},
    {id: 3, title: 'Third note', content: 'Lorem ipsum 3', pinned: false},
    {id: 4, title: 'Fourth note', content: 'Lorem ipsum 4', pinned: false},
    {id: 5, title: 'Fifth note', content: 'Lorem ipsum 5', pinned: true},
];

// Map
const noteTitles = notes.map(n => n.title)
console.log(noteTitles)

// Filter
const pinnedNotes = notes.filter(n => n.pinned)
console.log(pinnedNotes)

// Reduce
const noteIdSum = notes.reduce((acc, cur) => acc + cur.id, 0)
console.log(noteIdSum)
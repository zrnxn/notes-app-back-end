const notes = [
  {
    id: 'unique-id',             // Replace with an actual unique string
    title: 'Example Title',       // Replace with a title string
    createdAt: new Date().toISOString(),  // Use the current date as an ISO string
    updatedAt: new Date().toISOString(),  // Same as createdAt
    tags: ['tag1', 'tag2'],       // Example array of strings
    body: 'This is the body of the note', // Replace with note content
  },
];

module.exports = notes;

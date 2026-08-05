import React from 'react';

const books = [
  { id: 1, title: 'React Patterns', author: 'Michael Chan' },
  { id: 2, title: 'Learning React', author: 'Alex Banks' }
];

export default function BookDetails({ showExtras }) {
  return (
    <div className="card">
      <h2>Book Details</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
      {showExtras && <p>Use element variables or conditional rendering to show extra content.</p>}
    </div>
  );
}

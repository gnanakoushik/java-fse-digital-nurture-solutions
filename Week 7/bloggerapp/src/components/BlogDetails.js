import React from 'react';

const posts = [
  { id: 1, title: 'Understanding JSX', summary: 'JSX is a syntax extension for JavaScript.' },
  { id: 2, title: 'Using React Hooks', summary: 'Hooks let you use state and other features without classes.' }
];

export default function BlogDetails({ showExtras }) {
  const listItems = posts.map((post) => (
    <li key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.summary}</p>
    </li>
  ));

  return (
    <div className="card">
      <h2>Blog Details</h2>
      <ul>{listItems}</ul>
      {showExtras ? <p>Map() renders list items with unique keys.</p> : null}
    </div>
  );
}

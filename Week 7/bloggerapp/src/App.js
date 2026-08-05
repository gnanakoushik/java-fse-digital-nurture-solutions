import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

const sections = [
  { id: 'book', label: 'Book Details' },
  { id: 'blog', label: 'Blog Details' },
  { id: 'course', label: 'Course Details' }
];

export default function App() {
  const [active, setActive] = useState('book');
  const [showExtras, setShowExtras] = useState(true);

  const renderSection = () => {
    if (active === 'book') return <BookDetails showExtras={showExtras} />;
    if (active === 'blog') return <BlogDetails showExtras={showExtras} />;
    if (active === 'course') return <CourseDetails showExtras={showExtras} />;
    return null;
  };

  return (
    <div>
      <h1>Blogger App</h1>
      <p>Demonstrates conditional rendering, list components, keys, and <code>map()</code>.</p>
      <div>
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActive(section.id)}
            style={{ fontWeight: active === section.id ? 'bold' : 'normal' }}
          >
            {section.label}
          </button>
        ))}
        <button onClick={() => setShowExtras((prev) => !prev)}>
          {showExtras ? 'Hide Extras' : 'Show Extras'}
        </button>
      </div>

      <div style={{ marginTop: 16 }}>{renderSection()}</div>
    </div>
  );
}

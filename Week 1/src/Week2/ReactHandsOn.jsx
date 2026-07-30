import React, { useState, useEffect } from 'react';

// Hands-on 1 & 2: Functional Component & State Management
export function CounterApp() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc' }}>
            <h2>React Hands-On: Counter Component</h2>
            <p>Current Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}

// Hands-on 3 & 4: Props & List Rendering
export function ItemList({ items }) {
    return (
        <div style={{ padding: '20px', marginTop: '10px' }}>
            <h3>React Hands-On: Component Props & List Rendering</h3>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

// Hands-on 5 & 9-13: useEffect API Hook & Event Handling
export function UserFetcher() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulating async API fetch call
        setTimeout(() => {
            setUsers(['Alice (Admin)', 'Bob (User)', 'Charlie (Manager)']);
            setLoading(false);
        }, 1000);
    }, []);

    if (loading) return <p>Loading React State Data...</p>;

    return (
        <div>
            <h3>Fetched Users List:</h3>
            <ul>
                {users.map((u, i) => <li key={i}>{u}</li>)}
            </ul>
        </div>
    );
}
import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [], hasError: false, error: null };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((resp) => {
        if (!resp.ok) throw new Error('Network response was not ok');
        return resp.json();
      })
      .then((data) => this.setState({ posts: data.slice(0, 10) }))
      .catch((err) => this.setState({ hasError: true, error: err }));
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    // Can log to reporting service
    this.setState({ hasError: true, error });
    alert('An error occurred in Posts component: ' + error);
  }

  render() {
    const { posts, hasError } = this.state;
    if (hasError) {
      return <div className="error">Error loading posts.</div>;
    }

    return (
      <div>
        <h2>Posts</h2>
        {posts.map((p) => (
          <Post key={p.id} title={p.title} body={p.body} />
        ))}
      </div>
    );
  }
}

export default Posts;

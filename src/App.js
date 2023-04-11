import React, { useState, useEffect } from "react";

function FetchApiList_rmove() {
  const apiUrl = "https://jsonplaceholder.typicode.com/posts";
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
    
  }, []);

  const handleRemoveClick = async (postId) => {
    try {
      const response = await fetch(`${apiUrl}/${postId}`, { method: "DELETE" });
      if (!response.ok) {
        throw new Error("Failed to delete post");
      }
      setPosts(posts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
            <td>
              <button onClick={() => handleRemoveClick(post.id)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default FetchApiList_rmove;


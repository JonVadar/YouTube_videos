import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { createPost } from "../../controllers/postsController";
import { PostContext } from "../../contexts/PostContext";
import Alert from "../../Components/Alert";

const Create = () => {
  // Use post context
  const { posts, setPosts } = useContext(PostContext);

  // Use navigate hook
  const navigate = useNavigate();

  // Error state
  const [error, setError] = useState(null);

  // Form data state
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleCreate = async (e) => {
    e.preventDefault();

    try {
      // Create a new post
      const data = await createPost(title, body);
      // Update the posts state
      setPosts([...posts, data.post]);
      // Navigate to dashboard
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className="card">
      <h1 className="title">Create a new post</h1>

      <form onSubmit={handleCreate}>
        <input
          type="text"
          placeholder="Post Title"
          className="input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <textarea
          rows="6"
          placeholder="Post Content"
          className="input"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button className="btn">Create</button>
      </form>

      {error && <Alert msg={error} />}
    </section>
  );
};

export default Create;

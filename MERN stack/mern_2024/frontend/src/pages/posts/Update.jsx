import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { updatePost } from "../../controllers/postsController";
import { PostContext } from "../../contexts/PostContext";
import Alert from "../../Components/Alert";

const Update = () => {
  // Use post context
  const { posts, setPosts } = useContext(PostContext);

  // Use navigate hook
  const navigate = useNavigate();

  // Use location hook to receive data from Dashboard 
  const { state } = useLocation();

  // Error state
  const [error, setError] = useState(null);

  // Form data state
  const [title, setTitle] = useState(state.title);
  const [body, setBody] = useState(state.body);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      // Update a post
      const data = await updatePost(state._id, title, body);
      // Exclude the old version of updated post from post context
      // So that there is no duplication of post with same _id
      const updatedPosts = posts.filter((post) => post._id !== state._id);
      // Update the posts state
      setPosts([...updatedPosts, data.post]);
      // Navigate to dashboard
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className="card">
      <h1 className="title">Update your post</h1>

      <form onSubmit={handleUpdate}>
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
        <button className="btn">Update</button>
      </form>

      {error && <Alert msg={error} />}
    </section>
  );
};

export default Update;

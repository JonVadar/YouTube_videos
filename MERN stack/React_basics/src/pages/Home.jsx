import { useState, useEffect } from "react";
import PostItem from "../components/PostItem";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => {
        data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    setPosts(posts.filter((posts) => posts.id !== id));

    fetch("http://localhost:3000/posts/" + id, {
      method: "DELETE",
    });
  };

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      <PostItem posts={posts} handleDelete={handleDelete} />
    </>
  );
};

export default Home;

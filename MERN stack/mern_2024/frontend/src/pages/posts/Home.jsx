import { useContext, useEffect, useState } from "react";
import { getPosts } from "../../controllers/postsController";
import { PostContext } from "../../contexts/PostContext";
import Post from "../../Components/Post";

const Home = () => {
  // Use post context
  const { posts, setPosts } = useContext(PostContext);

  // Loading state
  const [loading, setLoading] = useState(true);

  // Grab all the posts on page load
  useEffect(() => {
    setTimeout(async () => {
      // Grab all posts
      const data = await getPosts();
      // Update posts state
      setPosts(data.posts);
      // Remove the loading
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <section className="card">
      <h1 className="title">Latest posts</h1>

      {loading && (
        <i className="fa-solid fa-spinner animate-spin text-3xl text-center block"></i>
      )}

      {posts &&
        posts.map((post) => (
          <div key={post._id}>
            <Post post={post} />
          </div>
        ))}
    </section>
  );
};

export default Home;

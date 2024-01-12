import { useReducer, useRef } from "react";
import { postsReducer } from "./postsReducer";

const ObjectEX = () => {
  // const [state, dispatch] = useReducer(reducer, initialArg, init?)

  // Ref for title input field
  const titleRef = useRef();

  // Initial posts
  const initPosts = () => {
    return [{ id: 1, title: "post one", likes: 0 }];
  };

  // Reducer hook
  const [posts, setPosts] = useReducer(postsReducer, null, initPosts);

  // Handle add post
  const handleAdd = () => {
    setPosts({ type: "add", title: titleRef.current.value });
  };

  // Handle delete post
  const handleDelete = (id) => {
    setPosts({ type: "delete", id });
  };

  // Handle like post
  const handleLike = (id) => {
    setPosts({ type: "like", id });
  };

  return (
    <div>
      {/* Post title input */}
      <input type="text" ref={titleRef} />
      <button onClick={handleAdd}>Add</button>

      {/* Output posts if the array is not empty */}
      {posts.length > 0 &&
        posts.map((p) => (
          <div key={p.id}>
            <h2>{p.title}</h2>
            <button onClick={() => handleDelete(p.id)}>Delete</button>
            <button onClick={() => handleLike(p.id)}>Like {p.likes}</button>
          </div>
        ))}
    </div>
  );
};

export default ObjectEX;

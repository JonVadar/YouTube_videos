/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// Post context to be used in useContext hook
export const PostContext = createContext();

const PostProvider = ({ children }) => {
  // Posts global state
  const [posts, setPosts] = useState([]);

  // Return a custom component to expose Post state to the children components
  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;

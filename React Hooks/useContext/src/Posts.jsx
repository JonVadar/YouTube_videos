import { useContext } from "react";
import Form from "./Form";
import { MyContext } from "./MyContext";

const Posts = () => {

  // Use the context hook to access the value provided by context provider in App component
  const { posts } = useContext(MyContext)

  return (
    <>
      <h1>Posts</h1>
      <Form/>

      { posts.length > 0 &&
        posts.map(p => (
          <div key={p.id}>
            <h2>{p.title}</h2>
          </div>
        ))
      }
    </>
  );
};

export default Posts;

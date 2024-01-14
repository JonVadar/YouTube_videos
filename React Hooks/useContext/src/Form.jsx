import { useContext, useRef } from "react";
import { MyContext } from "./MyContext";

let nextId = 2
const Form = () => {
  // Use the ref hook to grab the value of input field
  const title = useRef();

  // Use the context hook to access the value provided by context provider in App component
  const { posts, setPosts } = useContext(MyContext);

  // Add the new post object to the state
  const handleAdd = () => {
    setPosts([...posts, { id: nextId++, title: title.current.value }])
  };

  return (
    <>
      <input type="text" placeholder="Name" ref={title} />
      <button onClick={handleAdd}>Add</button>
    </>
  );
};

export default Form;

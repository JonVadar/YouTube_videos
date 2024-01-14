import { useState } from "react";
import Posts from "./Posts";
import { MyContext } from "./MyContext";

function App() {
  const [posts, setPosts] = useState([{ id: 1, title: "post 1" }]);

  return (
    // Wrap all the components with the context provider and add the value 
    <MyContext.Provider value={{ posts, setPosts }}>
      <h1>React Hooks: useContext</h1>
      <Posts />
    </MyContext.Provider>
  );
}

export default App;

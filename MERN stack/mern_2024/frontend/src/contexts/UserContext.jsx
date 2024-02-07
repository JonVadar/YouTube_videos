/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// User context to be used in useContext hook
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  // User global state
  const [user, setUser] = useState({
    email: localStorage.getItem("email"),
    posts: [],
  });

  // Return a custom component to expose User state to the children components
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

import { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import { UserContext } from "../contexts/UserContext";

const Layout = () => {
  // Use navigate hook
  const navigate = useNavigate();

  // Grab the User global state
  const { user, setUser } = useContext(UserContext);

  // Handle logout
  const handleLogout = () => {
    if (confirm("Confirm Logout?")) {
      // Reset the User state
      setUser({ email: null, posts: [] });
      // Remove the items from local storage
      localStorage.removeItem("email");
      localStorage.removeItem("token");
      // Navigate to Home page
      navigate("/");
    }
  };

  return (
    <>
      <header className="bg-indigo-500 text-white">
        <nav className="flex items-center justify-between p-4">
          <Link
            title="Home"
            to="/"
            className="fa-solid fa-house-chimney nav-link"
          ></Link>

          {user.email ? (
            <div className="flex items-center gap-2">
              <Link
                title="Create Post"
                to="/create"
                className="fa-solid fa-circle-plus nav-link"
              ></Link>
              <Link
                title="Dashboard"
                to="/dashboard"
                className="fa-solid fa-circle-user nav-link"
              ></Link>
              <button
                title="Logout"
                onClick={handleLogout}
                className="fa-solid fa-right-from-bracket nav-link"
              ></button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                title="Login"
                to="/login"
                className="fa-solid fa-right-to-bracket nav-link"
              ></Link>
              <Link
                title="Register"
                to="/register"
                className="fa-solid fa-user-plus nav-link"
              ></Link>
            </div>
          )}
        </nav>
      </header>

      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;

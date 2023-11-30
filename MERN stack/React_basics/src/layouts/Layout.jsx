import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className="border-b pb-4">
        <nav className="flex items-center justify-between">
          <h1 className="font-bold text-indigo-600">MyBlog</h1>
          <div>
            <Link
              className="px-3 py-1 rounded-md hover:bg-indigo-600 hover:text-white"
              to="/"
            >
              Home
            </Link>
            <Link
              className="px-3 py-1 rounded-md hover:bg-indigo-600 hover:text-white ml-4"
              to="/create"
            >
              New Post
            </Link>
          </div>
        </nav>
      </header>

      <main className="py-8 px-2">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;

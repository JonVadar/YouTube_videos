import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AppProvider from "./Context/AppContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <App />
  </AppProvider>
);

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Popular from "./Popular";
import Battle from "./Battle";
import Nav from "./Nav";

const router = createBrowserRouter([
  {
    path: "/Dovban_React_18.05.23/",
    element: <Nav />,
    children: [
      {
        path: "/Dovban_React_18.05.23/home",
        element: <Home />,
      },
      {
        path: "/Dovban_React_18.05.23/popular",
        element: <Popular />,
      },
      {
        path: "/Dovban_React_18.05.23/battle",
        element: <Battle />,
      },
      {
        path: "*",
        element: <h2>Err</h2>,
      },
    ],
  },
]);

function App() {
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

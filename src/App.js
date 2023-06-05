import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Popular from "./Popular";
import Battle from "./Battle";
import Nav from "./Nav";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Nav />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/popular",
          element: <Popular />,
        },
        {
          path: "/battle",
          element: <Battle />,
        },
        {
          path: "*",
          element: <h2>Err</h2>,
        },
      ],
    },
  ],
  {
    basename: "/Dovban_React_18.05.23/",
  }
);

function App() {
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

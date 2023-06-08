import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Popular from "../pages/Popular";
import Battle from "../pages/Battle";
import Nav from "./Nav";
import Result from "../pages/Battle/Results";

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
          path: "battle/results",
          element: <Result />,
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

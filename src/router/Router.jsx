import { createBrowserRouter } from "react-router-dom";
import Home from "../home/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
]);

export default router;

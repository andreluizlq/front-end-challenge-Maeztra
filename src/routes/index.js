import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";

const router = createBrowserRouter([
    {
        path: "/front-end-challenge-maeztra",
        element: <Home />,
    },
]);

export default router;

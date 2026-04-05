import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/HomePage/Home";
import AboutMe from "../components/AboutMe/AboutMe";
import WhatiDo from "../components/WhatiDo/WhatiDo";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "about",
                element: <AboutMe />,
            },
            {
                path: "whatido",
                element: <WhatiDo></WhatiDo>
            }
        ],
    },
]);
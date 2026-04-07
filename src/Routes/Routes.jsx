import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/HomePage/Home";
import AboutMe from "../components/AboutMe/AboutMe";
import WhatiDo from "../components/WhatiDo/WhatiDo";
import Resume from "../components/Resume/Resume";
import Project from "../components/Project/Project";
import Contact from "../components/Contact/Contact";
import Footer from "../components/HomePage/Footer";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: "true",
                element: <Home />,
            },
            {
                path: "about",
                element: <AboutMe />,
            },
            {
                path: "whatido",
                element: <WhatiDo></WhatiDo>
            },
            {
                path: "resume",
                element: <Resume></Resume>
            },
            {
                path: "project",
                element: <Project></Project>
            },
            {
                path: "contact",
                element: <Contact></Contact>
            },
            {
                path: "footer",
                element: <Footer></Footer>
            }
        ],
    },
]);
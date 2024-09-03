import {createBrowserRouter} from "react-router-dom"
// import App from "../classmembers/src/App";
import App from "../src/App";
// import HomePage from "../classmembers/src/Pages/HomePage";
import HomePage from "../src/Pages/HomePage";
// import AboutPage from "../classmembers/src/Pages/AboutPage";
import AboutPage from "../src/Pages/AboutPage";
// import ContactPage from "../classmembers/src/Pages/ContactPage";
import ContactPage from "../src/Pages/ContactPage";
// import TeamPage from "../classmembers/src/Pages/TeamPage";
import TeamPage from "../src/Pages/TeamPage";
// import JoinPage from "../classmembers/src/Pages/JoinPage";
import JoinPage from "../src/Pages/JoinPage";


const AppRouter = createBrowserRouter([
    {
        path:"/",
        element:<App></App>,
        children:[
            {
                path:"/",
                element: <HomePage/>,
                index:true,
            },
            {
                path:"/about",
                element: <AboutPage/>
            },
            {
                path:"/contact",
                element: <ContactPage/>
            },
            {
                path:"/our",
                element:<TeamPage/>
            },
            {
                path:"/join",
                element:<JoinPage/>
            }
        ],
    },
]);

export default AppRouter;
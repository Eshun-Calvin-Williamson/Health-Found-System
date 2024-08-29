import {createBrowserRouter} from "react-router-dom"
// import App from "../classmembers/src/App";
import App from "classmembers/src/App.jsx"
import HomePage from "../classmembers/src/Pages/HomePage";
import AboutPage from "../classmembers/src/Pages/AboutPage";
import ContactPage from "../classmembers/src/Pages/ContactPage";
import TeamPage from "../classmembers/src/Pages/TeamPage";
import JoinPage from "../classmembers/src/Pages/JoinPage";


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
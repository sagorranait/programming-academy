import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home"
import Blog from "./pages/Blog";
import Courses from "./pages/Courses";
import FAQ from "./pages/FAQ";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";


const routers = createBrowserRouter([
   { 
      path: '/', 
      element: <App/>,
      children: [
         { index: true, element: <Home/> },
         { path: 'courses', element: <Courses/> },
         { path: 'blog', element: <Blog/> },
         { path: 'faq', element: <FAQ/> },
         { path: 'signin', element: <SignIn/> },
         { path: 'signup', element: <SignUp/> }
      ],
   },
 ]);

 export { routers }
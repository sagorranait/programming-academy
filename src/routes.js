import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home"
import Blogs, { blogsLoader } from "./pages/Blogs";
import Courses, { coursesLoader } from "./pages/Courses";
import FAQ from "./pages/FAQ";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import BlogDetails, { blogDetailsLoader } from "./components/BlogDetails";

const routers = createBrowserRouter([
   { 
      path: '/', 
      element: <App/>,
      children: [
         { index: true, element: <Home/> },
         { path: 'courses', element: <Courses/>, loader: coursesLoader },
         { path: '/course/details/:id', element: <>saogr</>, },
         { path: 'blogs', element: <Blogs/>, loader: blogsLoader },
         { path: '/blog/details/:id', element: <BlogDetails/>, loader: blogDetailsLoader },
         { path: 'faq', element: <FAQ/> },
         { path: 'signin', element: <SignIn/> },
         { path: 'signup', element: <SignUp/> },
         { path: 'profile', element: <Profile/> }
      ],
   },
 ]);

 export { routers }
import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Blogs, { blogsLoader } from "./pages/Blogs";
import Courses, { coursesLoader } from "./pages/Courses";
import BlogDetails, { blogDetailsLoader } from "./components/BlogDetails";
import CourseDetails, { courseDetailsLoader } from "./components/CourseDetails";

const routers = createBrowserRouter([
   { 
      path: '/', 
      element: <App/>,
      children: [
         { index: true, element: <Home/> },
         { path: 'courses', element: <Courses/>, loader: coursesLoader },
         { path: '/course/details/:id', element: <CourseDetails/>, loader: courseDetailsLoader },
         { path: '/premium/:id', element: <>sagor</>,},
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
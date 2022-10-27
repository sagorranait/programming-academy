import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import NotFound from "./components/NotFound";
import Blogs, { blogsLoader } from "./pages/Blogs";
import Courses, { coursesLoader } from "./pages/Courses";
import { feedbackLoader } from "./components/Feedbacks";
import BlogDetails, { blogDetailsLoader } from "./components/BlogDetails";
import CourseDetails, { courseDetailsLoader } from "./components/CourseDetails";
import PremiumAccess, { premiumAccessLoader } from "./components/PremiumAccess";

const routers = createBrowserRouter([
   { 
      path: '/', 
      element: <App/>,
      children: [
         { index: true, element: <Home/>, loader: feedbackLoader },
         { path: 'courses', element: <Courses/>, loader: coursesLoader },
         { path: '/course/details/:id', element: <CourseDetails/>, loader: courseDetailsLoader },
         { path: '/premium/:id', element: <PremiumAccess/>, loader: premiumAccessLoader},
         { path: 'blogs', element: <Blogs/>, loader: blogsLoader },
         { path: '/blog/details/:id', element: <BlogDetails/>, loader: blogDetailsLoader },
         { path: 'faq', element: <FAQ/> },
         { path: 'signin', element: <SignIn/> },
         { path: 'signup', element: <SignUp/> },
         { path: 'profile', element: <Profile/> }
      ],
      errorElement: <NotFound/>
   },
 ]);

 export { routers }
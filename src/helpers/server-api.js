// API Functionality for Blogs Start
export async function getBlogs(){
   const response = await fetch('https://programming-academy.vercel.app/blogs');
   if (!response.ok) {
      throw new Error('Failed to fetch Blog.');
   }
   return response.json();
}

export async function getSingleBlogs(id) {
   const response = await fetch(`https://programming-academy.vercel.app/blog/details/${id}`);
   if (!response.ok) {
     throw new Error('Failed to fetch Single Blogs.');
   }
   return response.json();
 }

// API Functionality for Blogs End

// API Functionality for Courses Start
export async function getCourses(){
   const response = await fetch('https://programming-academy.vercel.app/courses');
   if (!response.ok) {
      throw new Error('Failed to fetch Courses.');
   }
   return response.json();
}

export async function getSingleCourse(id) {
   const response = await fetch('https://programming-academy.vercel.app/course/details/' + id);
   if (!response.ok) {
     throw new Error('Failed to fetch Single Course.');
   }
   return response.json();
 }
// API Functionality for Courses End
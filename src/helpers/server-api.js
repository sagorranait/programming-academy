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
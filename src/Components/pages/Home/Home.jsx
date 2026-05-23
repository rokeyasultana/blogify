import React, { useState } from 'react'

const Home = () => {
  const [topic, setTopics]= useState('')
  const [blog, setBlog]= useState('')
  const[loading, setLoading]= useState(false)

  // generate blog
  const generateBlog = () => {
setLoading(true)
setTimeout(()=>{
  setBlog(`AI-generated blog about "${topic}"`)
  setLoading(false)
}, 2000)
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-5'>
<input 
type="text"
placeholder='Write the blog topic'
value={topic}
onChange={(e)=> setTopics(e.target.value)}
className='border p-3 rounded-lg text-xl text-center w-80 h-30 '
/>

{/* blog generate button */}
<button onClick={generateBlog} className='bg-black text-xl text-white px-4 py-3 rounded-lg hover:bg-gray-500 hover:text-black'>
  Generate Blog
</button>
{
  loading && (
   <p className='text-blue-700'>✋Generating Blog...</p>
  )
}
{
  blog && (
    <div className='bg-gray-100 p-5 rounded-lg max-w-2xl'>
      {blog}
    </div>
  )
}

    </div>
  )
}

export default Home

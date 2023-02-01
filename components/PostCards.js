import React from 'react'
import Link from 'next/link'
import moment from 'moment/moment'

function PostCards({ post }) {

  // console.log(post)
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className='object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg'
        />
      </div>
      <h1 className='transition duration-700 text-center  mb-8 cursor-pointer hover:text-blue-900  text-3xl font-semibold'>
        <Link href={`/post/${post.slug}`}>
          {post.title}
        </Link>
      </h1>
      <div className='block  lg:flex text-center items-center justify-center mb-8 w-full'>
        <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
          <img
            src={post.author.photo.url}
            alt={post.author.name}
            height='30px'
            width='30px'
            className='align-middle rounded-full '
          />
          <p className='inline align-middle text-blue-700 ml-2 text-lg'>
            {post.author.name}
          </p>

        </div>
        <div className=' flex font-medium text-blue-700'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
          </svg>
          <span>
            {moment(post.createdAt).format('MMM DD, YYYY')}
          </span>


        </div>

      </div>
      <p className='text-center text-gray-700 font-normal lg:px-4'>
        {post.excert}
      </p>
      <div className='text-center'>
        <Link href={`post/${post.slug}`}>
        <span className='transition duration-500  hover:-transform-y text-white cursor-pointer inline-block bg-pink-500 rounded-full font-medium px-8 py-3 mt-8' >
        Continue Reading
      </span>
          
           </Link>
     
      </div>
     


    </div>


  )
}

export default PostCards
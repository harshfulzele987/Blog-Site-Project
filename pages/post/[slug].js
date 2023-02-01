import React from 'react'
import { useRouter } from 'next/router';
import Categories from '../../components/Categories'
import PostWidgets from '../../components/PostWidgets'
import PostDetail from '../../components/PostDetail'
import Author from '../../components/Author'
import CommentForm from '../../components/CommentForm'
import Comments from '../../components/Comments'
import Loader from '../../components/Loader'
import { getPostDetails, getPosts } from '../../services'


function PostDetails({post}) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }
    
    return (
    <div className='container mx-auto px-10 mb-8'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            <div className='col-span-1 lg:col-span-8'>
                <PostDetail post ={post}></PostDetail>
                <Author author={post.author}></Author>
                <CommentForm slug={post.slug}></CommentForm>
                <Comments slug={post.slug}></Comments>
            </div>
            <div className='col-span-1 lg:col-span-4'>
                <div className='relative lg:stickey top-8'>
                    {/* <PostWidgets slug={post.slug} categories={post.categories}></PostWidgets> */}
                    <Categories></Categories>

                </div>

            </div>

        </div>
    </div>
  )
}

export default PostDetails


// Fetch data at build time
export async function getStaticProps({ params }) {
    const data = await getPostDetails(params.slug);
    return {
      props: {
        post: data,
      },
    };
  }

  export async function getStaticPaths() {
    const posts = await getPosts();
    return {
      paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
      fallback: false,
    };
  }
  
import React,{useState , useEffect} from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'

import { getRecentPosts , getSimilarPosts } from '../services';

function PostWidgets({categories ,slug}) {
  const [relatedPosts, setRelatedPosts] = useState([]);
  console.log (categories)
  let temp_categoris;
  if(categories != null){
    temp_categoris   = Object.keys(categories);
  }


  useEffect(  () => {
   ( async() => {

      try {
        if (slug) {
            const result = await getSimilarPosts(temp_categoris, slug);
            console.log("result-->" , result);
            setRelatedPosts(result);
        } else {
            const result = await getRecentPosts();
            setRelatedPosts(result);
        }
    } catch (error) {
        console.log(error);
    }

    } )();
    
  }, [slug]);

  
  // getRecentPosts().then((result) => {setRelatedPosts(result);})
  //     .catch((err)=>{console.log(err)});;


  // getRecentPosts().then((result)=>{
  //   result.map((i)=>{
  //     console.log(i);

  //   })
  // }).catch((err)=>{
  //   console.log(err);
  // });


  // getSimilarPosts(categories, slug)
  //     .then((result) => {
  //       result.map((i)=>{
  //         console.log(i);

  //       })
      
  //     }).catch((err)=>{console.log(err)});
  const grpahCMSImageLoader = ({ src }) => src;
  
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        {
          slug ? 'Realated Post' : 'Recent Post'
        }
      </h3>
      
        <div>
         {

          relatedPosts.map((index ,key)=>{
            return(
              <div key={key} className='flex items-center rounded-full h '>
                <div className='w-16 flex-none'>
                <Image
                loader={grpahCMSImageLoader}
                src={index.featuredImage.url}
                alt={index.title}
                height={50}
                width={50}
                className='rounded-full mr-4 mb-4 align-middle object-cover cursor-pointer'
               />
                  </div>
                
                  <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">{moment(index.createdAt).format('MMM DD, YYYY')}</p>
            <Link href={`/post/${index.slug}`} className="text-md hover:text-pink-700 font-semibold" key={key}>{index.title}</Link>
          </div>
                </div>
            )
          })
        }
        </div>
      
    </div>

  )
}

export default PostWidgets;
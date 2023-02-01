import React,{useState , useEffect}from 'react'
import moment from 'moment'
import { getCategories } from '../services'



export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    }).catch((err)=>{
      console.log(err);
    });
  }, []);
// console.log(categories);
  
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <div className='text-xl mb-8 font-semibold border-b pb-4'>
      Categories
      </div>

      {categories.map((index , newIndex) => {
        return (
          <span className='cursor-pointer block' key={newIndex}>
            {index.name}
            
            </span>

        )

      })}
      
      </div>
  )
}







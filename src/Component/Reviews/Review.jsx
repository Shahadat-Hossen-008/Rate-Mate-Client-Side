import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import ReviewCard from '../Review Card/ReviewCard';

function Review ({serviceId}) {
    
    const[reviews, setReviews] = useState([]);
    const review = async ()=>{
        try{
            const {data} = await axios.get('http://localhost:5000/all-review')
            setReviews(data)
            
        }
        catch(err){
            toast.error(err.message)
        }
       
    }
    const specificReview = reviews.filter(rev => rev.serviceId === serviceId);
    useEffect(()=>{
        review();
    },[])
   
   
    console.log(specificReview)
  return (
    <div><h2 className='text-xl text-gray-900 font-montserrat font-semibold mt-5'> { specificReview.length} Reviews</h2>
    <div className='mt-5 mb-5'>
        {specificReview.map(rev =><ReviewCard key={rev._id} review={rev}></ReviewCard>)}
    </div>
    </div>
    
  )
}

export default Review
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import useAuth from '../../Context/Custom Hook/useAuth';
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
    <div><h2 className='text-2xl text-gray-900 font-montserrat font-bold mt-5'>Review : { specificReview.length}</h2>
    <div className='mt-5 mb-5'>
        {specificReview.map(rev =><ReviewCard key={rev._id} review={rev}></ReviewCard>)}
    </div>
    </div>
    
  )
}

export default Review
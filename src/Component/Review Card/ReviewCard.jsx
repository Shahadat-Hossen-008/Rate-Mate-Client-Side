import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa6'
import Rating from 'react-rating'

function ReviewCard ({review}) {
  return (
    <div className="p-4 bg-white rounded-md shadow-md w-1/2 mb-4 hover:shadow-xl mt-5 ">
        <div className="flex items-center gap-4">
        <img
          src={review.user_Photo}
          alt={review.userName}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{review.user_Name}</h3>
          <p className="text-sm text-gray-500">{review.formateDate}</p>
        </div>
    </div>
    <p className="text-gray-700 mt-2">{review.review}</p>
    <div className="flex items-center mt-2">
              <Rating
                initialRating={review.rating}
                readonly
                emptySymbol={<FaRegStar className="text-yellow-500 text-xl" />}
                fullSymbol={<FaStar className="text-yellow-500 text-xl" />}
                fractions={2} 
              />
              <span className="ml-2 text-gray-700 mb-1">({review.rating}/5)</span>
            </div>
    </div>
  )
}

export default ReviewCard
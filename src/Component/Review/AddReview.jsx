import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { FaRegStar, FaStar } from "react-icons/fa6";
import Rating from "react-rating";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import { format } from "date-fns";
import useAuth from "../../Context/Custom Hook/useAuth";
import axios from "axios";
import toast from "react-hot-toast";


function AddReview({serviceId}) {
    
    const {user} = useAuth();
    const user_Email = user.email;
    const user_Name = user.displayName;
    const user_Photo = user.photoURL;
  const [rating, setRating] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const[error, setError] = useState(false);
  const [review, setReview] = useState("");
  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };
  const handleRatingChange = (value) => {
    setRating(value);
    if (value > 0) {
      setError(false); // Clear error if rating is selected
    }
  };
  const handleReview = async e =>{
    e.preventDefault();
    const review = e.target.review.value;
    if (rating === 0) {
        setError(true);
        return; // Prevent form submission
      }
      const formateDate = format(new Date(startDate), 'P')
      const data = {review, rating, formateDate, user_Email, user_Name, user_Photo, serviceId }
     
      try{
        const response = await axios.post('http://localhost:5000/all-reviews', data)
        toast.success('Review added successfully')
        console.log('Response', response.data)
      }catch(err){
          toast.error(err.message)
      }
    console.log({review, rating, formateDate, user_Email, user_Name, user_Photo, serviceId });
    resetForm()
  }
  const resetForm = () => {
    setRating(0);
    setReview("");
    setStartDate(new Date());
    setError(false);
  };
  
  return (
    <div className="p-6 w-full bg-white rounded-md shadow-md flex-1 md:min-h-[350px]">
      <h2 className="text-lg font-semibold text-gray-700 capitalize font-montserrat">
        Add Your Review
      </h2>
      <form onSubmit={handleReview}>
        <div className="grid grid-cols-1 gap-6 mt-3">
          <TextField
            id="outlined-multiline-static"
            label="Review"
            name="review"
            multiline
            rows={4}
            required
            value={review}
            onChange={handleReviewChange}
          />
          <div className="mt-2">
            <label className="font-poppins text-gray-700">
              Rate this service:
            </label>
          </div>
          <div>
            <Rating
             start={0}
              initialRating={rating}
              onChange={handleRatingChange}
              fractions={2}
              emptySymbol={<FaRegStar className="text-yellow-500 text-2xl" />}
              fullSymbol={<FaStar className="text-yellow-500 text-2xl" />}
            />
            { error && <p className="text-red-500">Please select a rating before submitting</p>}
          </div>
          <div className="mt-4 relative ml-3">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="border border-black"
              required
            />
            <FaCalendarAlt
              className="absolute -left-6 top-1/2 transform -translate-y-1/2 text-gray-500"
              size={20}
            />
          </div>
        </div>
        <Button type="submit" className="mt-4" variant="outlined">Add Review</Button>
      </form>
    </div>
  );
}

export default AddReview;

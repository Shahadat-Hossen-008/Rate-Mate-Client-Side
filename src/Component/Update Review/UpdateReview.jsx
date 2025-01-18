import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import DatePicker from "react-datepicker";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import React from "react";
import Rating from "react-rating";
import { format } from "date-fns";

function UpdateReview({ review }) {
  const navigate = useNavigate();
  const [reviewText, setReviewText] = useState(review.review);
  const [rating, setRating] = useState(review.rating || 0);
  const [startDate, setStartDate] = useState(
    review.formateDate ? new Date(review.formateDate) : new Date()
  );

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formateDate = format(new Date(startDate), "P");

    const initial = { review: reviewText, rating, formateDate };
    try {
      await axios.put(
        `http://localhost:5000/update-review/${review._id}`,
        initial
      );
      toast.success("Review Updated Successfully");
      navigate(0);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen max-w-2xl shadow-xl p-20 mx-auto mt-5">
      <Typography
        sx={{ mt: 2, mb: 2, fontFamily: "montserrat" }}
        variant="h6"
        component="h2"
      >
        Update Your Review
      </Typography>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            sx={{ width: "100%" }}
            id="outlined-multiline-static"
            label="Review"
            name="review"
            multiline
            rows={4}
            onChange={(e)=>setReviewText(e.target.value)}
            required
            defaultValue={review.review}
          />
          <Typography sx={{ mt: 2, fontFamily: "poppins" }}>
            <label>Rate this service:</label>
          </Typography>
          <Typography>
            <Rating
              initialRating={rating}
              onChange={handleRatingChange}
              emptySymbol={<StarBorderIcon sx={{ color: "yellow" }} />}
              fullSymbol={<StarIcon sx={{ color: "yellow" }} />}
              fractions={2}
            />
            ({review.rating}/5)
          </Typography>
          <Typography
            sx={{ mt: 2, mb: 2, fontFamily: "poppins" }}
          >
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              required
            />
          </Typography>
        </div>
        <Button type="submit" sx={{ mt: 2 }} variant="outlined">
          Update Review
        </Button>
      </form>
    </div>
  );
}

export default UpdateReview;

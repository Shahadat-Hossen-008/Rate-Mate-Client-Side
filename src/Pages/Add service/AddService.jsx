import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import useAuth from "../../Context/Custom Hook/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function AddService() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const names = [
    "Technology",
    "Design",
    "Marketing",
    "Writing",
    "Media",
    "Education",
    "Automotive",
    "Translation",
    "Cleaning",
    "Gym",
  ];

  const [startDate, setStartDate] = useState(new Date());
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initial = Object.fromEntries(formData.entries());
    try {
      await axios.post("http://localhost:5000/add-services", initial);
      toast.success("Service Added Successfully");

      navigate("/allServices");
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <div className="min-h-screen max-w-2xl shadow-xl p-20 mx-auto mt-5">
      <h1 className="font-montserrat text-2xl text-center text-blue-500">
        Add Your Service
      </h1>
      <p className="text-center font-poppins text-gray-700 my-3 bg-base-200 p-4 font-semibold">
        Add your service now to showcase your expertise, gather reviews, and
        connect with a wider audience.{" "}
      </p>
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <label className="text-gray-700 font-poppins text-lg">
            Service Image
          </label>
          <TextField
            type="url"
            fullWidth
            name="serviceImage"
            id="outlined-basic"
            label="Enter PhotoURL"
            variant="outlined"
            className="my-2"
            required
          />
        </div>
        <div className="my-3">
          <label className="text-gray-700 font-poppins text-lg">
            Service Title:
          </label>
          <TextField
            type="text"
            fullWidth
            name="serviceTitle"
            id="outlined-basic"
            label="Enter title"
            variant="outlined"
            className="my-2"
            required
          />
        </div>
        <div className="my-3">
          <label className="text-gray-700 font-poppins text-lg">
            Company Name
          </label>
          <TextField
            type="text"
            fullWidth
            name="companyName"
            id="outlined-basic"
            label="Enter Company Name"
            variant="outlined"
            className="my-2"
            required
          />
        </div>
        <div className="my-3">
          <label className="text-gray-700 font-poppins text-lg">
            Website Link
          </label>
          <TextField
            type="url"
            fullWidth
            name="website"
            id="outlined-basic"
            label="Enter Your Url"
            variant="outlined"
            className="my-2"
            required
          />
        </div>
        <div className="my-3">
          <div>
            <label className="text-gray-700 font-poppins text-lg">
              Description
            </label>
          </div>
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="Enter Your Description"
            name="description"
            multiline
            rows={4}
            required
            className="my-2"
          />
        </div>
        <div className="flex items-center gap-10">
          <div className="my-3 mr-5">
            <div>
              <label className="text-gray-700 font-poppins text-lg">
                Price
              </label>
            </div>
            <TextField
              id="filled-number"
              label="Price"
              type="number"
              name="price"
              variant="standard"
              required
              className="my-2"
            />
          </div>
          <div>
            <div>
              <label className="text-gray-700 font-poppins text-lg">
                Select Category
              </label>
            </div>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="category"
                label="category"
              >
                <MenuItem key="">
                  <em>None</em>
                </MenuItem>
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="mt-4 relative ml-3">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="border border-black pl-8"
            name="addedDate"
            required
          />
          <FaCalendarAlt
            className="absolute left-0 pl-2 top-1/2 transform -translate-y-1/2 text-gray-500"
            size={20}
          />
        </div>
        <div className="my-3">
          <label className="text-gray-700 font-poppins text-lg">
            User Email
          </label>
          <TextField
            type="email"
            fullWidth
            name="user_email"
            id="outlined-basic"
            label="User Email"
            variant="outlined"
            className="my-2"
            defaultValue={user.email}
            required
          />
        </div>
        <div className="grid items-center mt-5">
          <Button variant="contained" type="submit">
            Add Service
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddService;

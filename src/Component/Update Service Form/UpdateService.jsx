import {
    Button,
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  
  import DatePicker from "react-datepicker";
  import { FaCalendarAlt } from "react-icons/fa";
  import useAuth from "../../Context/Custom Hook/useAuth";
  import axios from "axios";
  import toast from "react-hot-toast";
  import { useNavigate } from "react-router-dom";
  
  function UpdateService({service}) {
    const { user } = useAuth();
    const navigate = useNavigate();
    console.log(service);
    
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
        <Typography sx={{ mt: 2 , mb:2, fontFamily:'montserrat' }} variant="h6" component="h2">
          Update Your Service
        </Typography>
        <form onSubmit={handleSubmit}>
          <div className="my-3">
            <Typography  sx={{ mt: 2 , mb:2 }}>
              Service Image
            </Typography>
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
            <Typography  sx={{ mt: 2 , mb:2 }}>
              Service Title:
            </Typography>
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
            <Typography  sx={{ mt: 2 , mb:2 }}>
              Company Name
            </Typography>
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
            <Typography  sx={{ mt: 2 , mb:2 }}>
              Website Link
            </Typography>
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
              <Typography  sx={{ mt: 2 , mb:2 }}>
                Description
              </Typography>
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
                <Typography  sx={{ mt: 2 , mb:2 }}>
                  Price
                </Typography>
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
                <Typography  sx={{ mt: 2 , mb:2 }}>
                  Select Category
                </Typography>
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
          <Typography  sx={{ mt: 2 , mb:2, border:'1px solid #000' }}>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              
              name="addedDate"
              required
            />
          </Typography>
          <div className="my-3">
            <Typography  sx={{ mt: 2 , mb:2 }}>
              User Email
            </Typography>
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
  
  export default UpdateService;
  
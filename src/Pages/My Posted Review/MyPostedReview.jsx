import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../../Context/Custom Hook/useAuth";
import {
  Box,
  Button,
  IconButton,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import UpdateReview from "../../Component/Update Review/UpdateReview";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflowY: "auto",
  maxHeight: "90vh",
};

function MyPostedReview() {
  const [open, setOpen] = useState(false);
  const [selectedReviews, setSelectedReviews] = useState(null);
  const { user } = useAuth();
  const [reviews, setReviews] = useState([]);
  const[search, setSearch] = useState("");
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/all-review/${user?.email}`
      );
      setReviews(data);
    } catch (err) {
      toast.error(err.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, [user]);
  //handleDelete
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:5000/all-review/${id}`
      );
      fetchData();
      toast.success("Delete Successfully");
    } catch (err) {
      toast.error(err.message);
    }
  };

  //Confirmation delete
  const deleteConfirmation = (id) => {
    toast((t) => (
      <div>
        <p className="font-poppins font-semibold my-2">Are you sure</p>
        <div className="flex items-center gap-2">
          <Button
            className="bg-red-500"
            variant="contained"
            onClick={() => {
              toast.dismiss(t.id);
              handleDelete(id);
            }}
          >
            Delete
          </Button>
          <Button
            className="bg-green-500"
            variant="contained"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </Button>
        </div>
      </div>
    ));
  };
  const handleOpen = (review) => {
    setSelectedReviews(review);
    setOpen(true);
  };
  const handleClose = () => {
    setSelectedReviews(null);
    setOpen(false);
  };
  //data search
  const searchData = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/all-reviews?searchParams=${search}`
      );
      setReviews(data);
    } catch (err) {
      toast.error(err.message);
    }
  };
  useEffect(()=>{
    searchData()
  },[search])
  return (
    <div className="w-11/12 mx-auto">
      <div className="my-5 w-1/3 mx-auto">
        <label className="input input-bordered flex items-center gap-2 w-full ">
          <input type="text" className="grow"
          onChange={(e)=>setSearch(e.target.value)}
           placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
            
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <h1 className="font-montserrat text-xl font-semibold my-8">
        My Posted Reviews{" "}
        <span className="bg-blue-400 rounded-2xl py-1 px-4">
          {reviews.length}
        </span>
      </h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Review</TableCell>
              <TableCell align="left">Rating</TableCell>
              <TableCell align="left">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reviews.map((service) => (
              <TableRow
                key={service._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {service.serviceTitle}
                </TableCell>
                <TableCell align="left">{service.formateDate}</TableCell>
                <TableCell align="left">
                  {service.review.substring(0, 40)}.....
                </TableCell>
                <TableCell align="left"> {service.rating}</TableCell>

                <TableCell align="left">
                  <IconButton
                    onClick={() => deleteConfirmation(service._id)}
                    aria-label="delete"
                  >
                    <MdDeleteOutline />
                  </IconButton>
                  <IconButton
                    onClick={() => handleOpen(service)}
                    aria-label="delete"
                  >
                    <MdEdit />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* // Modal use state for save service  */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {selectedReviews && <UpdateReview review={selectedReviews} />}
        </Box>
      </Modal>
    </div>
  );
}

export default MyPostedReview;

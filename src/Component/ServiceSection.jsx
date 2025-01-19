import { Button, responsiveFontSizes } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"
import ServiceCard from "./Service Card/ServiceCard";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";


function ServiceSection () {
const[services, setServices] = useState([]);
useEffect(()=>{
    const fetchData = async()=>{
        try{
            const {data} = await axios.get('https://rate-mate-server.vercel.app/service-section')
             setServices(data);
             
        }
        catch(err){
           toast.error( err.message);
        }
    };
    fetchData();
},[])
  return (
    <div className="w-11/12 mx-auto mt-20">
          <div className="banner bg-blue-500 text-white p-10 text-center">
        <h1 className="text-4xl font-bold font-montserrat">Discover All Offered Services</h1>
        <p className="mt-4">Check out the most popular services people are raving about.</p>
      </div>
      <div className="md:flex md: justify-between my-5">
      <h2 className="text-xl font-semibold ">
       Top 6 Services
      </h2>
      <Link to='/allServices'><Button variant="outlined">See More</Button></Link>
      </div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {
        services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
      }
     </div>
    </div>
  )
}

export default ServiceSection
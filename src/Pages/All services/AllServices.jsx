import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ServiceCard from '../../Component/Service Card/ServiceCard';
import toast from 'react-hot-toast';
import DynamicTitle from '../../Dynamic Title/DynamicTitle';

function AllServices () {
    const [services, setServices] = useState([]);
    const[search, setSearch] = useState("");
    const[filter, setFilter] = useState("");
    //filter data
    useEffect(()=>{
        const filterData = async () => {
            try {
              const { data } = await axios.get(
                `http://localhost:5000/allService?filter=${filter}`
              );
              setServices(data);
            } catch (err) {
              toast.error(err.message);
            }
          };
          filterData();
    },[filter])
     //data search
  const searchData = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/all-service?searchParams=${search}`
      );
      setServices(data);
    } catch (err) {
      toast.error(err.message);
    }
  };
  useEffect(()=>{
    searchData();
  },[search])
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const {data} = await axios.get('http://localhost:5000/all-services')
                setServices(data);
                
            }catch(err){
                toast.error(err.message)
            }
        }
        fetchData();
    },[])
  return (
    <div className='w-11/12 mx-auto'>
    <DynamicTitle title={"All Service | RateMate"} description={"See  All Service Information"} />
    <div className='flex justify-center items-center gap-5 my-5'>
    <select
              onChange={(e)=>setFilter(e.target.value)}
              name='category'
              id='category'
              className='border p-4 rounded-lg'
            >
              <option value=''>Filter By Category</option>
              <option value='Technology'>Technology</option>
              <option value='Design'>Design</option>
              <option value='Marketing'>Marketing</option>
              <option value='Cleaning'>Cleaning</option>
              <option value='Writing'>Writing</option>
            </select>

            <label className="input input-bordered flex items-center gap-2  ">
          <input type="text" className="grow"
          onChange={(e)=>setSearch(e.target.value)}
           placeholder="Search title" />
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
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {
            services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
        }
    </div>
    </div>
  )
}

export default AllServices
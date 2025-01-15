import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ServiceCard from '../../Component/Service Card/ServiceCard';

function AllServices () {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const {data} = await axios.get('http://localhost:5000/all-services')
                setServices(data);
                
            }catch(err){
                console.log(err.message)
            }
        }
        fetchData();
    },[])
  return (
    <div className='w-11/12 mx-auto'>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {
            services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
        }
    </div>
    </div>
  )
}

export default AllServices
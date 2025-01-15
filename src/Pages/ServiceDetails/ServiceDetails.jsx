import { useLoaderData } from "react-router-dom";
import AddReview from "../../Component/Review/AddReview";



const ServiceDetails = () => {
    const service = useLoaderData();
  return (
    <div className='flex flex-col md:flex-row justify-around gap-5 items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto'>
      {/* Service Details */}
      <div className='flex-1 px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]'>
      <img
      className="mb-5" 
      src={service.serviceImage}
       alt={service.title} />
        <div className='flex items-center gap-5'>
          <span className='text-sm font-light text-gray-800'>
            Added Date: {service?.addedDate}
          </span>
          <span className='px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full'>
            {service?.category}
          </span>
        </div>

        <div>
          <h1 className='mt-2 text-3xl font-semibold text-gray-800 font-montserrat'>
            {service?.title}
          </h1>

          <p className='mt-2 text-lg text-gray-600'>{service.description}</p>

          <div className='flex items-center gap-5 mt-6'>
            <div>
              <p className='text-sm font-bold text-gray-600'>
                Company Name: {service.companyName}
              </p>
              <p className='text-sm text-gray-600'>
                Website:{' '}
                <a
                  href={service.website}

                  className='text-blue-600 hover:underline'
                >
                  {service.website}
                </a>
              </p>
              <p className='text-sm font-bold text-gray-600 mt-6'>
                Price: ${service.price}
              </p>
            </div>
           
          </div>
        </div>
      </div>
      
      {/* Add Review Form */}
     <AddReview serviceId = {service._id}></AddReview>

      {/* Service Reviews Section */}
      
    </div>
  );
};

export default ServiceDetails;

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const { serviceImage, serviceTitle, description, category, price, _id } = service || {};

  return (
    <motion.div
      whileHover={{ scale: 1.05 }} 
      whileTap={{ scale: 0.95 }}   
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4"
    >
      {/* Service Image */}
      <img className="w-full h-48 object-cover" src={serviceImage} alt={serviceTitle} />
      
      {/* Card Body */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 font-montserrat">{serviceTitle}</div>
        <p className="text-gray-700 text-base">
          {description.substring(0,70)}...
        </p>
      </div>
      

      {/* Service Details */}
      <div className="px-6 pt-2 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {category}
        </span>
        <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700">
          ${price}
        </span>
      </div>

      {/* View Details Button */}
      <div className="px-6 pb-4">
        <Link to={`/allServices/${_id}`}>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: '#4CAF50', color: '#fff' }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            View Details
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;


import Aos from "aos";
import React, { useEffect } from "react";
import { FaThumbsUp, FaShieldAlt, FaUsers, FaCogs } from "react-icons/fa";

function WhyTrustUs() {
  const trustPoints = [
    {
      id: 1,
      icon: <FaThumbsUp className="text-4xl text-blue-500" />,
      title: "Proven Reliability",
      description:
        "Our platform is built on trust and reliability, serving thousands of satisfied customers globally.",
    },
    {
      id: 2,
      icon: <FaShieldAlt className="text-4xl text-green-500" />,
      title: "Secure and Safe",
      description:
        "We ensure top-level security protocols to protect your data and maintain the utmost confidentiality.",
    },
    {
      id: 3,
      icon: <FaUsers className="text-4xl text-purple-500" />,
      title: "Millions of Users",
      description:
        "Join a community of millions of users who have trusted our platform for their needs.",
    },
    {
      id: 4,
      icon: <FaCogs className="text-4xl text-orange-500" />,
      title: "24/7 Support",
      description:
        "Our dedicated support team is available around the clock to assist with any issues or concerns.",
    },
  ];
  useEffect(() => {
    Aos.init({duration: 600, easing: 'ease-in-sine'});
    Aos.refresh();
  }, []);
  return (
    <section className="w-10/12 mx-auto my-16 p-8 bg-gray-100 rounded-lg shadow-lg" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center mb-8">Why Trust Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {trustPoints.map((point) => (
          <div
            key={point.id}
            className="bg-white p-6 rounded-lg flex flex-col justify-center items-center shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
          >
            <div className="mb-4">{point.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
            <p className="text-gray-600">{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyTrustUs;

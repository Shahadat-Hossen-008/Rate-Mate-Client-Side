import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import team1 from "../../assets/Team1.jpg"; 
import team2 from "../../assets/Team2.jpg";
import team3 from "../../assets/Team3.jpg";
import team4 from "../../assets/Team4.jpg";

// Team data
const team = [
  {
    name: "Alice Johnson",
    role: "Project Manager",
    image: team1,
    description:
      "Alice is a seasoned Project Manager with over 8 years of experience in leading high-performance teams. She ensures smooth project flow and client satisfaction.",
  },
  {
    name: "Mark Smith",
    role: "Lead Developer",
    image: team2,
    description:
      "Mark is the brains behind our development efforts. With expertise in full-stack development, he brings innovative solutions to life and ensures all technical aspects are flawless.",
  },
  {
    name: "Sarah Lee",
    role: "UI/UX Designer",
    image: team3,
    description:
      "Sarah is a passionate UI/UX designer who crafts intuitive and user-friendly designs. She focuses on creating stunning interfaces that deliver seamless user experiences.",
  },
  {
    name: "David Miller",
    role: "QA Engineer",
    image: team4,
    description:
      "David is our QA expert who makes sure that every project we deliver is bug-free and performs flawlessly. His keen eye for detail ensures the highest quality standards.",
  },
];

function MeetOurTeam() {
  const { scrollYProgress } = useViewportScroll();

  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -190]);

  return (
    <section className="min-h-screen bg-gray-100 py-20">
      <div className="container mx-auto text-center mb-10">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-4 font-montserrat"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Meet Our Team
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Our dedicated team of professionals.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-11/12 mx-auto">
        {team.map((member, index) => {
          const motionY = [y1, y2, y3, y4][index]; 
          return (
            <motion.div
              key={index}
              className="flex flex-col lg:flex-row items-center my-8 bg-white shadow-lg rounded-lg overflow-hidden gap-8"
              style={{ y: motionY }} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Left side: Text */}
              <div className="lg:w-1/2 p-6 flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-gray-600 font-semibold mb-1">{member.role}</p>
                <p className="text-gray-500">{member.description}</p>
              </div>

              {/* Right side: Image */}
              <motion.div
                className="lg:w-1/2 flex-1"
                style={{ backgroundImage: `url(${member.image})` }}
                initial={{ scale: 1.2 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-64 lg:h-full"
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default MeetOurTeam;

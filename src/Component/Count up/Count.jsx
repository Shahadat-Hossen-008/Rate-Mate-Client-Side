import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import toast from "react-hot-toast";

function Count() {
  const [serviceCount, setServiceCount] = useState(null);
  const [reviewCount, setReviewCount] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://rate-mate-server.vercel.app/reviewCount");

        setReviewCount(data?.count);
      } catch (err) {
        toast.error(err.message);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://rate-mate-server.vercel.app/serviceCount");

        setServiceCount(data?.count);
      } catch (err) {
        toast.error(err.message);
      }
    };
    fetchData();
  }, []);
  
  return (
    <div className="w-9/12 mx-auto bg-gray-300 my-10 p-10 text-center rounded-2xl" >
     <h2 className="text-2xl font-bold mb-6">Statistics Overview</h2>
     <div className="grid grid-cols-3 gap-8 items-center ">
        <div>
          <h3 className="text-xl font-semibold">Service</h3>
          {serviceCount !== null && (
            <CountUp
              start={0}
              end={serviceCount}
              duration={2.35}
              delay={0}
              useEasing={false}
              enableScrollSpy={true}
              scrollSpyOnce={true}
              scrollSpyDelay={2.75}
              className="text-3xl font-bold mt-2"
            />
          )}
        </div>
        <div>
          <h3 className="text-xl font-semibold">Review</h3>
          {reviewCount !== null && (
            <CountUp
              start={0}
              end={reviewCount}
              duration={2.35}
              delay={0}
              useEasing={false}
              enableScrollSpy={true}
              scrollSpyOnce={true}
              scrollSpyDelay={2.75}
              className="text-3xl font-bold mt-2"
            />
          )}
        </div>
        <div>
          <h3 className="text-xl font-semibold">User</h3>
          <CountUp
            start={0}
            end={100}
            delay={0}
            useEasing={false}
            duration={2.35}
            enableScrollSpy={true}
            scrollSpyOnce={true}
            scrollSpyDelay={2.75}
            className="text-3xl font-bold mt-2"
          />
        </div>
      </div>
    </div>
  );
}

export default Count;

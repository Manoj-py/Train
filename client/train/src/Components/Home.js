import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Home.css"; // Import a separate CSS file for styling

const HomePage = () => {
  const [allTrainsData, setAllTrainsData] = useState([]);
  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const response = await axios.post("http://localhost:9000/getAllTrains");
      setAllTrainsData(response.data);
      return response;
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>ALL TRAINS IN NEXT 12 HRS</h1>
      {allTrainsData.map((e) => {
        return (
          <div
            className="home-wrapper"
            onClick={() => {
              navigate(`/singleTrain/${e.trainNumber}`);
            }}
          >
            <div>{e.trainNumber}</div>
            <div>{e.trainName}</div>
            <div>{`${e.departureTime.Hours.toString().padStart(
              2,
              "0"
            )}:${e.departureTime.Minutes.toString().padStart(
              2,
              "0"
            )}:${e.departureTime.Seconds.toString().padStart(2, "0")}`}</div>
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;

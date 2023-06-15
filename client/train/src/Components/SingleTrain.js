import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./singleTrain.css"; // Import a separate CSS file for styling

const AllTrainsPage = () => {
  const [trainData, setTrainData] = useState({});
  const [inputtrainNumber, setInputTrainNumber] = useState("");

  const { trainNumber } = useParams();
  console.log("trainNumber", trainNumber);

  const singleTrainInfo = async () => {
    try {
      const response = await axios.get(
        `http://localhost:9000/getSingleTrainInfo/${
          trainNumber || inputtrainNumber
        }`
      );
      setTrainData(response.data);
      return response;
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (trainNumber) {
      singleTrainInfo();
    }
  }, []);

  const handleInputChange = (event) => {
    setInputTrainNumber(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await singleTrainInfo();
    setInputTrainNumber("");
  };
  return (
    <>
      {trainNumber || trainData.length > 0 ? (
        <>
          <div className="singleTrain-wrapper">
            <div className="header">Train Name: {trainData.trainName}</div>
            <div className="header"> Delayed by : {trainData.delayedBy}hrs</div>
            <div className="  price">
              Price
              <div>
                <div>AC {trainData?.price?.AC}</div>
                <div>Sleeper {trainData?.price?.sleeper}</div>
              </div>
            </div>
            <div className="  price">
              Availablity
              <div>
                <div>AC {trainData?.seatsAvailable?.AC}</div>
                <div>Sleeper {trainData?.seatsAvailable?.sleeper}</div>
              </div>
            </div>
            <div>
              Departure Time{" "}
              {`${trainData?.departureTime?.Hours?.toString().padStart(
                2,
                "0"
              )}:${trainData?.departureTime?.Minutes.toString().padStart(
                2,
                "0"
              )}:${trainData?.departureTime?.Seconds?.toString().padStart(
                2,
                "0"
              )}`}
            </div>
          </div>
        </>
      ) : (
        <div className="trainNumberInput">
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              value={trainNumber}
              onChange={handleInputChange}
              placeholder="Enter train number"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </>
  );
};

export default AllTrainsPage;

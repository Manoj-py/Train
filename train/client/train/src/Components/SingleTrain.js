import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./singleTrain.css";

const AllTrainsPage = () => {
  const [trainData, setTrainData] = useState({});
  const [inputtrainNumber, setInputTrainNumber] = useState("");

  const { trainNumber } = useParams();
  console.log("trainNumber", trainNumber);

  const singleTrainInfo = async () => {
    try {
      const response = await axios.get(`http://localhost:9000/getSingleTrainInfo/${trainNumber || inputtrainNumber}`);
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
    console.log("am i even entering here..");
    await singleTrainInfo();
    setInputTrainNumber("");
  };
  return (
    <>
      {trainNumber || Object.keys(trainData).length ? (
        <>
          <div className="singleTrain-wrapper">
            <div>Train Name: {trainData.trainName}</div>
            <div>
              {" "}
              Delayed by :<span className="green"> {trainData.delayedBy}hrs</span>
            </div>
            <div className="price">
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
              )}:${trainData?.departureTime?.Seconds?.toString().padStart(2, "0")}`}
            </div>
          </div>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            value={inputtrainNumber}
            onChange={handleInputChange}
            placeholder="Enter train number"
            className="Input-bar"
          />
          <button className="submit" type="submit">
            Submit
          </button>
        </form>
      )}
    </>
  );
};

export default AllTrainsPage;

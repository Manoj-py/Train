import express from "express";
import fetch from "node-fetch";

const app = express();
const port = 9000;

const requestedBody = {
  companyName: "Manoj-gowda-v",
  clientID: "e8338784-3fa7-4ded-af21-bff44b28601c",
  clientSecret: "mweLRmsdTIwtLUDq",
  ownerName: "Manoj",
  ownerEmail: "manojgowda.vr@gmail.com",
  rollNo: "R20EJ113",
};

const getAuthtoken = async () => {
  try {
    const response = await fetch("http://104.211.219.98/train/auth", {
      method: "POST",
      body: JSON.stringify(requestedBody),
    });

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const data = await response.json();
    console.log("data", data);
    return data.access_token;
  } catch (error) {
    console.log("error", error);
  }
};

const getAllTrains = async (req, res) => {
  try {
    const authToken = await getAuthtoken(); // Await the getAuthtoken function
    const response = await fetch("http://104.211.219.98/train/trains", {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const data = await response.json();
    const currentTime = new Date();
    const next12Hours = new Date();
    next12Hours.setHours(currentTime.getHours() + 12);

    const filteredTrains = data.filter((train) => {
      const departureTime = new Date();
      departureTime.setHours(train.departureTime.Hours);
      departureTime.setMinutes(train.departureTime.Minutes);
      departureTime.setSeconds(train.departureTime.Seconds);
      return departureTime >= currentTime && departureTime <= next12Hours;
    });

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSingleTrainInfo = async (req, res) => {
  const trainNumber = req.params.trainNumber;

  const authToken = await getAuthtoken(); // Await the getAuthtoken function
  const response = await fetch(
    `http://104.211.219.98/train/trains/${trainNumber}`,
    {
      headers: {
        Authorization: `Bearer ${authToken}`, // Use the retrieved authToken
      },
    }
  );

  if (!response.ok) {
    throw new Error("Request failed");
  }
  const data = await response.json();
  res.json(data);
  return data;
};

app.post("/getAllTrains", getAllTrains);
app.post("/getAuthtoken", getAuthtoken);
app.get("/getSingleTrainInfo/:trainNumber", getSingleTrainInfo);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

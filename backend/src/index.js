// import express from "express";
// import authRouter from "./routes/auth.route.js";
// import dotenv from "dotenv";
// import { ConnectDB } from "./lib/db.js";

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT;
// const io = new Server(server, {
//   cors: { origin: "*" }, // Allow all origins
// });

// app.use(express.json());

// const driverSchema = new mongoose.Schema({
//   driverId: String,
//   latitude: Number,
//   longitude: Number,
// });

// app.use("/api/auth", authRouter);

// app.use("/api/collect", authRouter);

// const Driver = mongoose.model("Driver", driverSchema);

// // Handle socket connections
// io.on("connection", (socket) => {
//   console.log("A driver connected:", socket.id);

//   // Listen for driver's location updates
//   socket.on("updateLocation", async (data) => {
//     const { driverId, latitude, longitude } = data;

//     await Driver.findOneAndUpdate(
//       { driverId },
//       { latitude, longitude },
//       { upsert: true, new: true }
//     );

//     // Emit updated location to all clients
//     io.emit("driverLocationUpdate", { driverId, latitude, longitude });
//   });

//   socket.on("disconnect", () => {
//     console.log("A driver disconnected:", socket.id);
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
//   ConnectDB();
// })

import express from "express";
import { Server } from "socket.io";
import http from "http";
import authRouter from "./routes/auth.route.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { ConnectDB } from "./lib/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }, // Allow all origins
});

app.use(express.json());

// Connect to MongoDB
ConnectDB();

// Driver Schema
const driverSchema = new mongoose.Schema({
  driverId: String,
  latitude: Number,
  longitude: Number,
});
const Driver = mongoose.model("Driver", driverSchema);

// Routes
app.use("/api/auth", authRouter);
app.use("/api/collect", authRouter);

// Handle socket connections
io.on("connection", (socket) => {
  console.log("A driver connected:", socket.id);

  // Listen for driver's actual location updates
  socket.on("updateLocation", async (data) => {
    const { driverId, latitude, longitude } = data;

    await Driver.findOneAndUpdate(
      { driverId },
      { latitude, longitude },
      { upsert: true, new: true }
    );

    // Emit updated location to all clients
    io.emit("driverLocationUpdate", { driverId, latitude, longitude });
  });

  socket.on("disconnect", () => {
    console.log("A driver disconnected:", socket.id);
  });
});

// Function to simulate location updates
const simulateDriverMovement = async () => {
  const driverId = "test-driver"; // Dummy driver ID
  let driver = await Driver.findOne({ driverId });

  if (!driver) {
    driver = new Driver({
      driverId,
      latitude: 17.3850, // Initial Hyderabad coordinates
      longitude: 78.4867,
    });
    await driver.save();
  }

  setInterval(async () => {
    // Simulate random movement
    driver.latitude += (Math.random() - 0.5) * 0.001;
    driver.longitude += (Math.random() - 0.5) * 0.001;

    await Driver.findOneAndUpdate(
      { driverId },
      { latitude: driver.latitude, longitude: driver.longitude },
      { new: true }
    );

    // Emit updated location
    io.emit("driverLocationUpdate", {
      driverId,
      latitude: driver.latitude,
      longitude: driver.longitude,
    });

    console.log(`Updated location: ${driver.latitude}, ${driver.longitude}`);
  }, 3000); // Update every 3 seconds
};

// Start the simulation
simulateDriverMovement();

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

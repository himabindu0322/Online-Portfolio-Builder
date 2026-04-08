const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to Local MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/portfolioDB")
.then(() => console.log("MongoDB Connected Successfully"))
.catch(err => console.log(err));

// Test Route
app.get("/", (req, res) => {
    res.send("Portfolio Backend Running...");
});
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/portfolio", require("./routes/portfolioRoutes"));

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

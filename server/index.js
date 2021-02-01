require("dotenv").config({ path: "./config.env" });
const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const cors = require('cors');

// Connect to db
connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/urls", require("./routes/urls"));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

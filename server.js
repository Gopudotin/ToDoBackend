const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/database");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

connectDB();

app.get("/", (req, res) => res.send("API is running..."));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/projects/:projectId/todos", require("./routes/todoRoutes"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

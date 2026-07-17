const express = require("express");
const app = express();
const PORT = 3000;
const employeeRoutes = require("./routes/employeeRoutes");
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Welcome to Employee Backend API  | Akhila Anapa");
});
app.use("/api", employeeRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

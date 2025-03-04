const express = require("express");
const patient = require("./routes/patientRoutes");

const app = express();
const PORT = 3000;

app.use("/patients", patient);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

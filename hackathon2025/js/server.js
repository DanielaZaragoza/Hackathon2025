const express = require("express");
const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const cors = require("cors");

const app = express();
const PORT = 5500;

app.use(cors());

app.get("/datos", (req, res) => {
    const results = [];
    fs.createReadStream(path.join(__dirname, "data", "datos.csv"))
        .pipe(csv())
        .on("data", (data) => results.push(data))
        .on("end", () => {
            res.json(results);
        });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});



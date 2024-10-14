const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5555;

app.get("/", (req, res) => {
    res.send("Hello world!");
});
app.listen(PORT, () => {
 console.log(`Express app iniciada na porta ${PORT}.`);
});
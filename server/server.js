const express = require("express");
const path = require('path');
const app = express();
let PORT = 3000;

// Parse incoming requests
app.use(express.json());

app.use(express.static(path.join(__dirname, '../dist')));
// Server listening on port 3000
app.listen(PORT, () => console.log(`Server listening on ${PORT}..`));
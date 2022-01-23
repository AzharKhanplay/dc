const express = require("express");
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors());

app.post('/contact', (req, res) => {
    console.log(req.body);
    res.send('success');
});

app.listen(PORT, ()=> console.log(`App is listing on http://localhost:${PORT}`));
const express = require('express');
require('./db/config');
const User= require("./db/User")
const app = express();
app.use(express.json());

app.post('/register', async (req, resp) => {
        let user = new User(req.body);
        let result = await user.save();
        resp.send(result);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});








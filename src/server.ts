const express = require("express");

const app = express();
const port = 3300;

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.get("/", (req, res) => {
    res.send("hello, joe")
})

app.listen(port, () => {
    console.log(`server is running on port: http://localhost:${port}`)
})

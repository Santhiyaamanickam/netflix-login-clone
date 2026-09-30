const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@gmail.com" && password === "123456") {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
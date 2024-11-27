import express from "express";
import dotenv from "dotenv";
dotenv.config("./env");
const app = express();

app.get("/get", (req, res) => {
  res.json({ name: "John", age: 30 });
});

app.get("/getDetails", (req, res) => {
  res.json({ name: "David", age: 30 });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`); // Print the server port in the console
});

export default app;

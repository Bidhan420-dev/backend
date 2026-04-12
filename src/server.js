import express from "express";
import mongoose from "mongoose";
import dns from "node:dns/promises";
dns.setServers(["1.1.1.1",
    "0.0.0.0"
]);
import { configDotenv } from "dotenv";
const app = express();
configDotenv();

app.get("/", (req,res) => {
    res.send("Hello World")
});
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Database connected"))
.catch((err) => console.log(err));
app.listen(3000, () =>{
    console.log("server is running on port 3000")
});

// 2pQpLYkr5h4zFT07
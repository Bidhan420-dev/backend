import express from "express";
import mongoose from "mongoose";
import dns from "node:dns/promises";
import Travel from "./models/travelModel.js";
dns.setServers(["1.1.1.1",
    "0.0.0.0"
]);
import { configDotenv } from "dotenv";
const app = express();
app.use(express.json());

configDotenv();

app.get("/", (req,res) => {
    res.send("Hello World through backend")
});
app.post("/app/post", async (req, res) => {
    const{title, location, description, price, rating} = req.body

    const travel = new Travel({
        title,
        location,
        description,
        rating,
        price,
    });
    await travel.save();
    res.status (201).json(travel);
});

app.get("/app/post", async (req, res) => {
    const travels = await Travel.find();
    res.status(200).json(travels)
})

app.get("/app/post/:id", async (req, res) => {
    const travels = await Travel.findById(req.params.id);
    res.status(200).json(travels)
})

app.put("/app/post/:id", async (req,res) => {
    const{title, location, description, price, rating} = req.body;
    const travel = await Travel.findByIdAndUpdate(
        req.params.id,
        {
        title,
        location,
        description,
        rating,
        price,    
        },
        {new : true},
    )

    res.status(200).json(travel);
})

app.delete("/app/post/:id", async(req, res) => {
    await Travel.findByIdAndDelete(req.params.id);
    res.status(204).json()
})
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Database connected"))
.catch((err) => console.log(err));
app.listen(3000, () =>{
    console.log("server is running on port 3000")
});

// 2pQpLYkr5h4zFT07
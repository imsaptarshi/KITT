import express from "express";
import mongoose from "mongoose";
import cors from "cors";
require("dotenv").config();

const app=express()
const port=process.env.PORT || 3000;

app.use(express.json())
app.use(cors());

const uri:any = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
});

const settingsRouter=require("./routes/settings.route");
app.use("/settings",settingsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});



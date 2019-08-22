import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../src/App";

const app = express();

app.use(express.static("../build"));

app.listen(3001, () => {
    console.log('Server running on PORT 3000');
})

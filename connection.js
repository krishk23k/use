import express from "express";
import * as bodyparser from "body-parser";
import * as mongoose from "mongoose";

const app = express();

export function Dbconfig(){
    const db = mongoose.connect("mongodb://localhost:27017")
    .then(() => {
        console.log("DataBase Connected")
    }).catch((err) => {
        console.log(`DataBase is not connected`)
    });
}

Dbconfig()

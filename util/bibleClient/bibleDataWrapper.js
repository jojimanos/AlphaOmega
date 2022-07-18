import React, {Component} from "react";
import { connectToDatabase } from "../mongodb";

export default function fetchNewTestCollection() {
        const { db } = await connectToDatabase();
      
        const newtest = await db
          .collection("newtest")
          .find({})
          .sort({})
          .limit(20)
          .toArray();
      
      };
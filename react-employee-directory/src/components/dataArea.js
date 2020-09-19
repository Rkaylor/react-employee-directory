import React, { useState, useEffect } from "react";
import dataTable from "./dataTable";
import nav from "./nav.js";
import API from "../utils/API";
import "../styles/dataArea.css";
import DataAreaContext from "../utils/DataAreaContext";

const dataArea = () => {
    const [developerState, setDeveloperState] = useState({
        users:[],
        order: "descend",
        filteredUsers: [],
        headings:[
            {name: "Image", width: "10%", order: "descend"},
            {name: "name", width: "10%", order: "descend"},
            {name: "phone", width: "20%", order: "descend"},
            {name: "email", width: "20%", order: "descend"},
            {name: "dob", width: "10%", order: "descend"},
        ]
    });
}
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

    const handleSort = heading => {
        let currentOrder = developerState.headings
        .filter(elem => elem.name === heading)
        .map(elem => elem.order)
        .toString(); 

        if(currentOrder === "descend") {
        currentOrder = "ascend";
        } else {
            currentOrder = "descend";
        }


        const compareFnc = (a, b) => {
            if(currenOrder === "ascend"){
            if(a[heading]=== undefined) {
                return 1;
            }

            else if (heading === "name") {
                return a[heading].first.localCompare(b[heading].first);
            }
            else if (heading === "dob"){
                return a[heading].age - b[heading].age;
            } else {
                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined){
                    return -1;
                }
                else if (heading === "name") {
                    return b[heading].first.localeCompare(a[heading].first);
                  }else if (heading === "dob") {
                    return b[heading].age - a[heading].age;
                  }  else {
                    return b[heading].localeCompare(a[heading]);
                  }
                }
              };
            }
        }
        }
    
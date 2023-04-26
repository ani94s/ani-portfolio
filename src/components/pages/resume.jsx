import React from "react";
import { useState } from "react";
import Sidebar from "../sidebar";
import Subpanel from "../subpanel";

const subHeadings = [
    {
        id:'key-skills',
        name:'Key Skills',
    },
    {
        id:'prof-exp',
        name:'Professional Experience',
    },
    {
        id:'other-exp',
        name:'Other Experience',
    },
    {
        id:'education',
        name:'Education',
    },
]

const MyDetails = () => {
    const [selectedHeading, setSelectedHeading] = useState();
    return(
        <div className="flex flex-row w-full h-full">
            <Sidebar 
                subHeadings={subHeadings} 
                selectedHeading={selectedHeading} 
                setSelectedHeading={setSelectedHeading}
            />
            <Subpanel />
        </div>
    )
};

export default MyDetails;

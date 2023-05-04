import React from "react";
import { useState } from "react";
import Sidebar from "../components/sidebar";
import Subpanel from "../components/subpanel";
import { profExp } from "../assets";
import { otherExp } from "../assets";
import { education } from "../assets";
import { skills } from "../assets";

const subHeadings = [
    {
        id:'prof-exp',
        name:'Professional Experience',
        icon: profExp
    },
    {
        id:'other-exp',
        name:'Other Experience',
        icon: otherExp
    },
    {
        id:'education',
        name:'Education',
        icon: education
    },
    {
        id:'key-skills',
        name:'Key Skills',
        icon: skills
    },
]

const MyDetails = () => {
    const [selectedHeading, setSelectedHeading] = useState(subHeadings[0].id);
    return(
        <div className="sm:px-8 px-0 pb-8 flex flex-row w-full h-full">
            {/* <Sidebar 
                subHeadings={subHeadings} 
                selectedHeading={selectedHeading} 
                setSelectedHeading={setSelectedHeading}
            /> */}
            <Subpanel 
                subHeadings={subHeadings}
                selectedHeading={selectedHeading}
            />
        </div>
    )
};

export default MyDetails;

import React from "react";
import { useState } from "react";
import Sidebar from "../sidebar";
import Subpanel from "../subpanel";
import { profExp } from "../../assets";
import { otherExp } from "../../assets";
import { education } from "../../assets";
import { skills } from "../../assets";
import styles from "../../style";

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
        <div className={`${styles.paddingX} flex flex-row w-full h-full`}>
            <Sidebar 
                subHeadings={subHeadings} 
                selectedHeading={selectedHeading} 
                setSelectedHeading={setSelectedHeading}
            />
            <Subpanel 
                subHeadings={subHeadings}
            />
        </div>
    )
};

export default MyDetails;

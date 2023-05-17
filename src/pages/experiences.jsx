import React from "react";
import { profExp } from "../assets";
import { otherExp } from "../assets";
import { educationLogo } from "../assets";
import { skills } from "../assets";
import Experience from "../components/experience";
import { education, otherExperience, workExperience,  } from "../constants";
import Education from "../components/education";

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
        icon: educationLogo
    },
    {
        id:'key-skills',
        name:'Key Skills',
        icon: skills
    },
]

const Experiences = () => {
    return(
        <>
        <section id="professional-exp" className="sm:px-8 py-8 px-4 w-full">
            <Experience id={subHeadings[0].id} experiences={workExperience} title="Professional Experience" />
        </section>
        <section id="other-exp" className="sm:px-8 pb-8 px-4 w-full">
            <Experience id={subHeadings[1].id} experiences={otherExperience} title="Other Experience" />
        </section>
        <section id="education" className="sm:px-8 pb-8 px-4 w-full bg-gradient-to-t from-apricot">
            <Education id={subHeadings[2].id} education={education} title="Education" />
        </section>
        </>
    )
};

export default Experiences;

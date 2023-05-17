import React from "react";
import { IconContext } from "react-icons";
import { SiGithub } from "react-icons/si";
import ResumeContainer from "../components/wrappers/resume-container";
import ThumbnailCard from "../components/wrappers/thumbnail-card";
import { allSkills, projects } from "../constants";
import styles from "../style";

const Projects = () => {
    return(
    <section id="projects" className={`${styles.padding} w-full`}>
        <ResumeContainer id="projects" title="Projects">
            <div className="grid justify-center py-8 sm:gap-6 gap-4 grid-col grid-cols-project w-full">
                {projects.map((project) => {
                    return(
                        <ThumbnailCard key={project.id} className="pt-6 flex flex-col justify-between flex-1 px-6 bg-dimWhite" thumbnail={project.image} imageDesc={project.id}>
                            <div id="project-details" className="flex-1 flex flex-col ">
                            <h2 className='text-center text-2xl font-medium text-primary'>{project.title}</h2>
                            <p className='py-4 text-lg font-normal text-justify text-primary'>{project.desc} </p>
                            { project.githubLink &&
                                <a href={project.githubLink} target="_blank" rel="noreferrer noopener" className="flex w-max mb-4 underline text-blue-600 gap-1 items-center">
                                    <p>Explore code</p>
                                    <span className="text-black flex no-underline"><SiGithub /></span>
                                </a>
                            }
                            </div>
                            <div className="flex py-4 border-t border-blueberry flex-row overflow-x-clip justify-center items-center gap-4">
                                {project.techstack.map((tech)=>{
                                    const techDesc = allSkills.find(skill => skill.id === tech);
                                    return(
                                        <IconContext.Provider key={tech} value={{color:techDesc.color ?? 'blue', size: '32px'}} >
                                            {techDesc.icon}
                                        </IconContext.Provider>
                                    )
                                })}
                            </div>
                        </ThumbnailCard>
                    )
                })}
            </div>
        </ResumeContainer>
    </section>
    )
};

export default Projects;

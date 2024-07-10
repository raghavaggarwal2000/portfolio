"use client";
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';

function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section
      ref={ref}
      className='scroll-mt-28 mb-28 sm:mb-40 '
        id="projects"
    >
        <SectionHeading>My Projects</SectionHeading>
        <div className='flex flex-col '>

        {projectsData && projectsData.map((project, index) =>(
            <PinContainer
            title={project.title}
            href={project.webUrl}
            key = {index}
            >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                    {project.title}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                    {project.description}
                </span>
                <ul className="flex flex-wrap mt-5 gap-2 sm:mt-auto">
                {project.tags.map((tag, index) => (
                <li
                    className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                    key={index}
                >
                    {tag}
                </li>
                ))}
            </ul>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            </div>
            </PinContainer>
        ))}
        </div>
        {/* <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
        >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Live chat Application
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              A Real live chat application, for users to text with each other.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer> */}
    </section>
  )
}

export default Projects
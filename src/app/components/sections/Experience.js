import Section from "../layout/Section"

import ExperienceItem from "../layout/ExperienceItem"
import Link from "../Link"
import ButtonContainer from "../button/ButtonContainer"


const Projects = () => {

    return (
        <Section title="Experience" sectionId='experience'>
            <ExperienceItem
                position={"Full Stack Developer"}
                employer={"VCS INC."}
                startDate={new Date(2023, 4)}
                duties={[
                    "Part-time freelance backend software and UI development for AI chat applications.",
                    "Deployed applications on Fly.io."
                ]}
            />
            <ExperienceItem
                position={"Lab Technologist"}
                employer={"Camosun College"}
                startDate={new Date(2023, 4)}
                duties={[
                    "Modified and maintained computer hardware, software, and related network services in computer laboratories.",
                    "Analyzed, designed, documented, developed, and tested computer software and hardware for courses and departmental operations.",
                    "Tested apparatus using debugging tools, and constructed lab apparatus."
                ]}
            />
            <ExperienceItem
                position={"Lab Assistant, Technologies"}
                employer={"Camosun College"}
                startDate={new Date(2021, 3)}
                endDate={new Date(2023, 3)}
                duties={[
                    "Provided comprehensive support to students, including addressing basic inquiries, demonstrating the use of specialized software and equipment/tools, and assisting in troubleshooting programming complexities and other discipline-specific lab tasks.",
                    "Maintained a Docker Swarm platform that hosted several department services."
                ]}
            />
            <ExperienceItem
                position={"Developer, Capstone"}
                employer={"Three Trees Technical and Oculus Design"}
                startDate={new Date(2020, 5)}
                endDate={new Date(2020, 7)}
                duties={[
                    "Worked in a team to develop a WordPress calendar and course manager to aid non-profit organizations.",
                    "Built a performant REST API using Node JS and Sequelize JS with 7 endpoints.",
                    "Wrote detailed technical documentation",
                ]}
            />
            <ButtonContainer>
                <Link href='https://fmacal-portfolio-data.s3.amazonaws.com/resume.pdf' text="See Full Résumé"/>
                <Link href='https://www.superprof.ca/post-secondary-technologies-lab-assistant-with-year-diploma-information-technology-tutor-students-with-lab-and-course-work.html' text="Superprof Profile"/>
            </ButtonContainer>
        </Section>
    )
}

export default Projects
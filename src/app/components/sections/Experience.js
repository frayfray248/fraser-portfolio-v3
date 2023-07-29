import Section from "../layout/Section"

import ExperienceItem from "../layout/ExperienceItem"
import Link from "../Link"
import ButtonContainer from "../button/ButtonContainer"


const Projects = () => {

    return (
        <Section title="Experience" sectionId='experience'>
            <ExperienceItem
                position={"Lab Technologist"}
                employer={"Camosun College"}
                startDate={new Date(2023, 4)}
                duties={[
                    "Maintains, repairs, and calibrates electronic equipment, diagnosing faults and malfunctions",
                    "Modifies and maintains computer hardware, software, and related network services",
                    "Analyzes, designs, documents, develops, and tests computer software and hardware for courses and departmental operations",
                    "Tests apparatus using debugging tools, constructs lab apparatus, and maintains printed circuit board manufacturing equipment"
                ]}
            />
            <ExperienceItem
                position={"Lab Assistant, Technologies"}
                employer={"Camosun College"}
                startDate={new Date(2021, 3)}
                endDate={new Date(2023, 3)}
                duties={[
                    "Help students with basic questions and demonstrate the use of specialized software and equipment/tools",
                    "Assist students in troubleshooting programming complexities and other discipline-specific lab tasks",
                    "Set up computer labs by preparing equipment and software",
                    "Research and implement new technologies for use in lab environments",
                ]}
            />
            <ExperienceItem
                position={"Instructor, Part time"}
                employer={"Camosun College"}
                startDate={new Date(2022, 3)}
                endDate={new Date(2022, 5)}
                duties={[
                    "Taught a 7-week computer literacy course (COMP152)",
                    "Delivered weekly lectures and provided support during lab sessions",
                    "Evaluated student submissions and provided feedback"
                ]}
            />
            <ExperienceItem
                position={"Developer, Capstone"}
                employer={"Three Trees Technical"}
                startDate={new Date(2020, 5)}
                endDate={new Date(2020, 7)}
                duties={[
                    "Worked in an Agile team of three students to develop a WordPress calendar and course manager for non-profit organizations",
                    "Created a fast and asynchronous Node JS Express REST API using ES6 and Sequelize JS ORM",
                    "Wrote detailed technical documentation, including a project charter, team bios, user manual, and final report",
                    "Sponsored by Victoria-based companies Three Trees Technical and Oculus Design",
                ]}
            />
            <ButtonContainer>
                <Link href='/resume.pdf' text="See Full Résumé" />
                <Link href='https://www.superprof.ca/post-secondary-technologies-lab-assistant-with-year-diploma-information-technology-tutor-students-with-lab-and-course-work.html' text="Superprof Profile" />
            </ButtonContainer>
        </Section>
    )
}

export default Projects
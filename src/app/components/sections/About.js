import Section from "../layout/Section"
import GridList from "../layout/GridList"

const About = ({ innerRef }) => {

    const technologies = [
        "HTML",
        "CSS",
        "ES6 JavaScript",
        "Node JS",
        "Express JS",
        "Styled Components",
        "React",
        "Next JS",
        "jQuery",
        "Git",
        "Docker",
        "MongoDB",
        "Socket IO",
        "Traefik",
        "Bootstrap",
        "Sequalize JS"
    ]

    return (
        <Section title="About" sectionId='about' ref={innerRef}>
            <p>
                My professional journey includes developing a full-stack <a href="http://capstone.camosun.ca/archived-capstone/June2020/public/TeamPages/Team%20Three%20Trees.php" target="_blank">WordPress app</a> for a Victoria tech company as part of my capstone project,
                along with two years of valuable experience as a lab technician at <a href="https://camosun.ca/" target="_blank">Camosun College</a>.
                In addition to my professional work, I have also dedicated time to <a href="#projects">personal projects</a>, honing my web
                development skills further. I've also been a <a href="https://www.superprof.ca/post-secondary-technologies-lab-assistant-with-year-diploma-information-technology-tutor-students-with-lab-and-course-work.html" target="_blank">tutor</a> and a <a href="http://capstone.camosun.ca/cosc/2023" target="_blank">capstone sponsor</a>.
            </p>
            <p>
                I'm currently looking to obtain a full-stack or backend position for a business or startup where I can build dynamic web applications and improve my skills with professional development.
            </p>
            <p>
                My diverse experiences in web development, systems administration, and tutoring has equipped me with a versatile skill set to tackle a wide range of challenges.
            </p>
            <p>
                Here's a list of some of the technologies I've worked with:
            </p>
            <GridList items={technologies} />
            <p>
                During my downtime, I run D&D campaigns, 3D print miniatures, practice golf swings, and go on hiking adventures with my cat.
            </p>
            <p>
                Continue scrolling to see some of my projects, or click <a href="#contact">here</a> to get in touch!
            </p>


        </Section>
    )
}

export default About
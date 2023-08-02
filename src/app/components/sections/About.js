import Section from "../layout/Section"
import GridList from "../layout/GridList"

const About = ({ innerRef }) => {

    const technologies = [
        "ES6 JavaScript",
        "Node JS",
        "Express JS",
        "React",
        "jQuery",
        "HTML",
        "CSS",
        "Git",
        "Axios",
        "MongoDB",
        "Docker CE",
        "Portainer",
        "Traefik",
        "Bootstrap",
        "Socket IO",
        "Postman",
    ]

    return (
        <Section title="About" sectionId='about' ref={innerRef}>
            <p>
                Hello there! I'm a skilled lab technologist and web developer with a passion for creating innovative solutions.
            </p>
            <p>
                My professional journey includes developing a full-stack <a href="http://capstone.camosun.ca/archived-capstone/June2020/public/TeamPages/Team%20Three%20Trees.php" target="_blank">WordPress app</a> for a Victoria tech company as part of my capstone project,
                along with two years of valuable experience as a lab technician at <a href="https://camosun.ca/" target="_blank">Camosun College</a>.
                In addition to my professional work, I have also dedicated time to <a href="#projects">personal projects</a>, honing my web
                development skills further. I've also been a <a href="https://www.superprof.ca/post-secondary-technologies-lab-assistant-with-year-diploma-information-technology-tutor-students-with-lab-and-course-work.html" target="_blank">tutor</a>, 
                an <a href="#experience">instructor</a>, and a <a href="http://capstone.camosun.ca/cosc/2023" target="_blank">capstone sponsor</a>.
            </p>
            <p>
                With a unique combination of expertise in both lab technology and web development, I bring a distinct
                advantage to the table, especially in the areas of backend development, documentation, and research.
            </p>
            <p>
                Here's a list of some of the technologies I've worked with:
            </p>
            <GridList items={technologies} />
            <p>
                I specialize in making MERN (MongoDB, Express, React, Node) apps, but I'm always more than willing to learn new technologies.
            </p>
            <p>
                By leveraging my diverse background, I aim to deliver top-notch solutions tailored to your specific
                requirements. Whether you need a powerful web app or robust backend support, I'm well-equipped to handle it.
            </p>
            <p>
            During my downtime, I run D&D campaigns, build Factorio bases, 3D print miniatures, practice golf swings at the local driving range, and go on hiking adventures with my cat.
            </p>
            <p>
                Continue scrolling to see some of my projects, or click <a href="#contact">here</a> to get in touch!
            </p>


        </Section>
    )
}

export default About
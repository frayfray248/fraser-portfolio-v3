import Section from "../layout/Section"
import GridList from "../layout/GridList"

const About = () => {

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
        "Mongoose",
        "MongoDB",
        "Docker CE",
        "Portainer",
        "Traefik",
        "Bootstrap",
        "Socket IO",
    ]

    return (
        <Section title="About">
            <p>
                My interest in programming started when I experimented with map 
                editors for my favorite real-time strategy games. 
                I fed this interest when I pursued a computer science 
                diploma at <a href="https://camosun.ca/" target="_blank">Camosun College</a> in 2018.
            </p>
            <p>
                My love for codding grew when I took my first algorithms 
                course. My passion for web development was fully formed when 
                I delivered an API for my <a href="http://capstone.camosun.ca/archived-capstone/June2020/public/TeamPages/Team%20Three%20Trees.php" target="_blank">WordPress Capstone project</a>. 
                My mission to become a full stack developer began.
            </p>
            <p>
                Since then, I have made several <a href="#" target="_blank">personal web app projects </a> and have been a <a href="#" target="_blank">lab technologist</a>, a <a href="#" target="_blank">tutor</a>, an <a href="#" target="_blank">instructor</a>, 
                and a <a href="#" target="_blank">project sponsor</a>.
            </p>
            <p>
                During my downtime, I run D&D campaigns, build Factorio bases, 
                3D print miniatures, practice golf swings at the local driving 
                range, and go on hiking adventures with my cat.
            </p>
            <p>Here are some technologies I've used:</p>
            <GridList items={technologies} />
        </Section>
    )
}

export default About
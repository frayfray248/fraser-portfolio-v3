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
            Hello! My name is Fraser, and I enjoy 
            making apps for the internet. My interest 
            in programming started when I explored map 
            editors for my favorite real-time strategy 
            games. I fed this interest when I pursued 
            a computer science diploma at <a href="https://camosun.ca/">Camosun 
            College</a> in 2018.</p> <p>I discovered My love for 
            codding when I took my first algorithms course. 
            My passion for web development was fully formed 
            when I created a REST Node JS Express API for my 
            WordPress Capstone project. My mission to become a 
            full stack developer began.
            </p>
            <p>Here are some technologies I've used:</p>
            <GridList items={technologies}/>
        </Section>
    )
}

export default About
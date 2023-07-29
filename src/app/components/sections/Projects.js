

import Project from "../layout/Project"
import Section from "../layout/Section"



const Projects = () => {

    return (
        <Section title="Projects" sectionId='projects'>
            <Project 
            title="Evolution Sim" 
            img='images/evolutionSim.png'
            desc='A web app that simulates the natural selection of 2D lifeforms'
            tags={['HTML', 'JavaScript', 'Canvas API']}
            link='https://github.com/frayfray248/evolution-sim'
            />
            <Project 
            title="Chat Rooms" 
            img='images/chatrooms.png'
            desc='A socket chatroom web app'
            tags={['HTML', 'CSS', 'JavaScript', 'Socket.io', 'Node.js']}
            link='https://github.com/frayfray248/chat-rooms'
            />
            <Project 
            title="This Portfolio" 
            img='/favicon.png'
            desc='This portfolio website! Made with React and styled-components'
            tags={['Next JS', 'React', 'styled-components', 'JavaScript', 'HTML', 'CSS']}
            link='https://github.com/frayfray248/fraser-portfolio-v3'
            />
            <Project 
            title="Three Trees Calendar" 
            img='images/threetreescalendar.png'
            desc='A class/workshop manager WordPress plugin'
            tags={['WordPress', 'PHP', 'Sequalize JS', 'Express JS', 'MySQL', 'jQuery', 'CSS']}
            link='http://capstone.camosun.ca/archived-capstone/June2020/public/TeamPages/Team%20Three%20Trees.php'
            />
            <Project 
            title="NeoMerchant" 
            img='images/neomerchant.png'
            desc='An Ecommerce React web app and Node Express REST API.'
            tags={['Node.js', 'Express JS', 'React', 'MongoDB', 'Paypal API']}
            link='https://github.com/frayfray248/neomerchant-app'
            />
            <Project 
            title="RealmCraft RPG" 
            img='images/realmCraft.png'
            desc='My first personal project: A tile-based fantasy RPG made in Java'
            tags={['Java Swing']}
            link='https://github.com/frayfray248/Fantasy-RPG-RealmCraft-Java'
            />
        </Section>
    )
}

export default Projects
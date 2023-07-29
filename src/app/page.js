'use client'

import React, { useEffect, useRef, useState } from "react"
import GlobalStyles from "./styles/GlobalStyles"
import { ThemeProvider } from "styled-components"

// theme
import { mainTheme } from './styles/themes'

// components
import Container from "./components/layout/Container"
import ColumnBorder from "./components/layout/ColumnBorder"
import Header from "./components/header/Header"
import Main from "./components/layout/Main"
import About from "./components/sections/About"
import Projects from "./components/sections/Projects"
import Experience from "./components/sections/Experience"
import Contact from "./components/sections/Contact"
import Footer from "./components/sections/Footer"

export default function Home() {

    // state
    const [theme, setTheme] = useState(mainTheme)
    const [activeSection, setActiveSection] = useState('about')

    // refs
    const aboutRef = useRef(null)
    const projectsRef = useRef(null)
    const experienceRef = useRef(null)
    const contactRef = useRef(null)

    // handlers
    const themeChangeHandler = theme => setTheme(theme)

    // effects
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.4
        }

        const callback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.dataset.section)
                }
            })
        }

        const observer = new IntersectionObserver(callback, options)

        if (aboutRef.current 
            && projectsRef.current 
            && experienceRef.current
            && contactRef.current) {
            observer.observe(aboutRef.current)
            observer.observe(projectsRef.current)
            observer.observe(experienceRef.current)
            observer.observe(contactRef.current)
        }

        return () => {
            if (aboutRef.current 
                && projectsRef.current 
                && experienceRef.current
                && contactRef.current) {
                observer.unobserve(aboutRef.current)
                observer.unobserve(projectsRef.current)
                observer.unobserve(experienceRef.current)
                observer.unobserve(contactRef.current)
            }
        }

    }, [])

    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Container>
                    <Header themeButtonHandler={themeChangeHandler} activeSection={activeSection} />
                    <ColumnBorder />
                    <Main>
                        <div ref={aboutRef} data-section="about" ><About/></div>
                        <div ref={projectsRef} data-section="projects"><Projects/></div>
                        <div ref={experienceRef} data-section="experience"><Experience/></div>
                        <div ref={contactRef} data-section="contact"><Contact/></div>
                        <Footer/>
                    </Main>
                </Container>
            </ThemeProvider>
        </React.Fragment>
    )
}

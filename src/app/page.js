'use client'

import React, { useEffect, useRef, useState } from "react"
import GlobalStyles from "./styles/GlobalStyles"
import { ThemeProvider } from "styled-components"

// theme
import { mainTheme } from './styles/themes'

// components
import Container from "./components/layout/Container"
import Header from "./components/header/Header"
import Main from "./components/layout/Main"
import About from "./components/sections/About"
import Projects from "./components/sections/Projects"

export default function Home() {

    // state
    const [theme, setTheme] = useState(mainTheme)
    const [activeSection, setActiveSection] = useState('about')

    // refs
    const aboutRef = useRef(null)
    const projectsRef = useRef(null)

    // handlers
    const themeChangeHandler = theme => setTheme(theme)

    // effects
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        }

        const callback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.dataset.section)
                }
            })
        }

        const observer = new IntersectionObserver(callback, options)

        if (aboutRef.current && projectsRef.current) {
            observer.observe(aboutRef.current)
            observer.observe(projectsRef.current)
        }

        return () => {
            if (aboutRef.current && projectsRef.current) {
                observer.unobserve(aboutRef.current)
                observer.unobserve(projectsRef.current)
            }
        }

    }, [])

    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Container>
                    <Header themeButtonHandler={themeChangeHandler} activeSection={activeSection} />
                    <Main>
                        <div ref={aboutRef} data-section="about" ><About/></div>
                        <div ref={projectsRef} data-section="projects"><Projects/></div>
                    </Main>

                </Container>
            </ThemeProvider>
        </React.Fragment>
    )
}

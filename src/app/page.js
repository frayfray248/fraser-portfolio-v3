'use client'

import React from "react"
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


    const [theme, setTheme] = React.useState(mainTheme)

    const themeChangeHandler = (theme) => {

        setTheme(theme)

    }

    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Container>
                    <Header themeButtonHandler={themeChangeHandler} />
                    <Main>
                        <About />
                        <Projects />
                    </Main>

                </Container>
            </ThemeProvider>
        </React.Fragment>
    )
}

'use client'

import React from "react"
import GlobalStyles from "./styles/GlobalStyles"
import { ThemeProvider } from "styled-components"

// theme
import { mainTheme, secTheme } from './styles/themes'

// components
import Container from "./components/layout/Container"
import Header from "./components/layout/Header"
import Main from "./components/layout/Main"
import About from "./components/sections/About"

export default function Home() {
    return (
        <React.Fragment>
            <ThemeProvider theme={mainTheme}>
                <GlobalStyles />
                <Container>
                    <Header />
                    <Main>
                        <About />
                    </Main>

                </Container>
            </ThemeProvider>
        </React.Fragment>
    )
}

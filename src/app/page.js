'use client'

import React from "react"
import GlobalStyles from "./styles/GlobalStyles"

import Container from "./components/layout/Container"
import Header from "./components/layout/Header"
import Section from "./components/layout/Section"
import Main from "./components/layout/Main"

export default function Home() {
    return (
        <React.Fragment>
            <GlobalStyles />
            <Container>
                <Header />
                <Main>
                    <Section />
                    <Section />
                    <Section />
                    <Section />
                    <Section />
                    <Section />
                    <Section />
                    <Section />
                    <Section />
                </Main>

            </Container>
        </React.Fragment>
    )
}

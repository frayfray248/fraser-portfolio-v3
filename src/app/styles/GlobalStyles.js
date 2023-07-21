'use client'

import { createGlobalStyle } from 'styled-components'
import variables from './variables'

const GlobalStyles = createGlobalStyle`
    ${variables};

    html {
        width: 100%;
        height: 100%;
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        width: 100%;
        min-height: 100%;
        background-color: ${props => props.theme.colors.mainBackground};
        background-image: ${props => props.theme.colors.backgroundImage};
        background-repeat: no-repeat;
        background-attachment: fixed;
        color: ${props => props.theme.colors.defaultText};
        font-family: var(--font-calibre);
        font-weight: 600;
        font-size: 1.125rem;
        line-height: 1.5;
        display: block;
    }

    h1, h2, h3, h4, h5, h6 {
        color: ${props => props.theme.colors.headers};
    }

    a {
        color: ${props => props.theme.colors.link};
        text-decoration: none;
        transition: color 0.2s ease-in-out;
    }

    a:visited {
        color: ${props => props.theme.colors.link};
    }

    a:hover {
        color: ${props => props.theme.colors.highlight};
    }

`

export default GlobalStyles
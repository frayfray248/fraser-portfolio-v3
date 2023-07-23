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
        /* positioning */
        display: block;
        margin: 0;

        /* sizing */
        width: 100%;
        min-height: 100%;

        /* colors */
        background-color: ${props => props.theme.colors.mainBackground};
        background-image: ${props => props.theme.colors.backgroundImage};
        background-repeat: no-repeat;
        background-attachment: fixed;
        color: ${props => props.theme.colors.defaultText};

        /* fonts */
        font-family: var(--font-calibre);
        font-weight: 600;
        font-size: 1.125rem;
        line-height: 1.5;

        /* transitions */
        transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
        -webkit-transition: background-image 1s ease-in-out;
        transition: background-image 1s ease-in-out;  
        
    }

    h1, h2, h3, h4, h5, h6 {
        color: ${props => props.theme.colors.headers};
    }

    a {
        color: ${props => props.theme.colors.link};
        text-decoration: none;
        transition: color 0.2s ease-in-out;
    }



    a:hover {
        color: ${props => props.theme.colors.highlight};
    }

`

export default GlobalStyles
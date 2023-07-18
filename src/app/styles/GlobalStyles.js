'use client'

import { createGlobalStyle } from 'styled-components'
import variables from './variables'

const GlobalStyles = createGlobalStyle`
    ${variables};

    html {
        width: 100%;
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        width: 100%;
        min-height: 100%;
        background-color: var(--dark-navy);
        color: var(--white);
        font-family: var(--font-calibre);
    }

`

export default GlobalStyles
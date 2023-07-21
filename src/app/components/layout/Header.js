import styled from 'styled-components'

import { singleColumnMaxWidth } from '@/app/config/config'

const StyledHeader = styled.div`
    width: 50%;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    align-self: flex-start;
    padding: 2rem;

    @media ${singleColumnMaxWidth} {
        width: unset;
        position: relative;
    }

`

const StyledHeaderTitle = styled.h1`
    font-size: 3rem;
`

const Header = () => {
    return (
        <StyledHeader>
            <StyledHeaderTitle>Fraser Macallum</StyledHeaderTitle>
            <p>I'm a lab technologist and my goal is to become a Full Stack Developer.</p>
        </StyledHeader>
    )
}

export default Header
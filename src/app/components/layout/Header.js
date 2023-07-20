import styled from 'styled-components'

import { singleColumnMaxWidth } from '@/app/config/config'

const StyledHeader = styled.div`
    width: 50%;
    position: -webkit-sticky; /* for Safari */
    position: sticky;
    top: 0;
    align-self: flex-start; /* <-- this is the fix */

    @media ${singleColumnMaxWidth} {
        width: 100%;
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
        </StyledHeader>
    )
}

export default Header
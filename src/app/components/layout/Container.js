import styled from 'styled-components'

import { singleColumnMaxWidth } from '@/app/config/config'

const StyledContainer = styled.div`
    display: flex;
    max-width: 900px;
    margin: 0 auto;

    @media ${singleColumnMaxWidth} {
        flex-direction: column;
    }
`

export default function Container({ children }) {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}
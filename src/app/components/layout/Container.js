import styled from 'styled-components'

import { singleColumnMaxWidth } from '@/app/config/config'

const StyledContainer = styled.div`
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    gap: 2rem;

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
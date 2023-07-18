import styled from 'styled-components'

const StyledContainer = styled.div`
    display: flex;
`

export default function Container({ children }) {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}
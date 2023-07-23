import styled from 'styled-components'

const StyledButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 2rem;
    gap: 1rem;
`

const ButtonContainer = ({ children }) => {
    return (
        <StyledButtonContainer>
            {children}
        </StyledButtonContainer>
    )
}

export default ButtonContainer
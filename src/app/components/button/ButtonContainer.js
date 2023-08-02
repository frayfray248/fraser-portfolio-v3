import styled from 'styled-components'

const StyledButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
`

const ButtonContainer = ({ children, className }) => {
    return (
        <StyledButtonContainer className={className}>
            {children}
        </StyledButtonContainer>
    )
}

export default ButtonContainer
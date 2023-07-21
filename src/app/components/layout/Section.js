import styled from 'styled-components'

const StyledSection = styled.section`
    padding: 2rem;
`

const Section = ({ title, children }) => {
    return (
        <StyledSection>
            <h1>{title}</h1>
            {children}
        </StyledSection>
    )
}

export default Section
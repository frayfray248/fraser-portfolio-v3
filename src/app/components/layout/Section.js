import styled from 'styled-components'

const StyledSection = styled.section`
    margin: 5rem 0rem;
    min-height: 400px;
`

const StyledSectionTitle = styled.h1`
    font-size: 3rem;
`

const Section = ({ title, sectionId, children }) => {
    return (
        <StyledSection id={sectionId}>
            <StyledSectionTitle>{title}</StyledSectionTitle>
            {children}
        </StyledSection>
    )
}

export default Section
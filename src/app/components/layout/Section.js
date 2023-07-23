import styled from 'styled-components'

const StyledSection = styled.section`
    margin-bottom: 10rem;
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
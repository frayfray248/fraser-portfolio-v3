import styled from 'styled-components'

const StyledSection = styled.section`
    margin-bottom: 10rem;
`

const Section = ({ title, sectionId, children }) => {
    return (
        <StyledSection id={sectionId}>
            <h1>{title}</h1>
            {children}
        </StyledSection>
    )
}

export default Section
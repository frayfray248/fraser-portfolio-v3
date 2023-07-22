import styled from 'styled-components'

const StyledSection = styled.section`
    margin-bottom: 10rem;
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
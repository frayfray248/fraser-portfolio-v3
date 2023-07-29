import styled from 'styled-components'

import Section from "../layout/Section"

const StyledFooterContainer = styled.div`
    margin: 50px auto;
`

const StyledP = styled.p`
    font-size: 0.8rem;
`

const Contact = () => {

    return (
        <StyledFooterContainer>
            <StyledP>Built with <a href="https://nextjs.org/" target="_blank">Next JS</a> and <a href="https://react.dev/" target="_blank">React</a>. 
            Styled used <a href="https://styled-components.com/" target="_blank">Styled-Components</a>. Hosted on <a href="https://aws.amazon.com/amplify" target="_blank">AWS Amplify</a></StyledP>
        </StyledFooterContainer>
    )
}


export default Contact
// modules
import styled from 'styled-components'

// components
import ButtonContainer from "./button/ButtonContainer"

// icons
import { LinkedInIcon, GitHubIcon, EnvelopeAtIcon } from './icons/Icon'

const StyledButtonContainer = styled(ButtonContainer)`
    margin-top: 1rem;
`

const SocialMediaLinks = ({ className }) => (
    <StyledButtonContainer className={className}>
        <a href="https://www.linkedin.com/in/fraser-macallum-752b2716b" target="_blank" rel="noreferrer" ><LinkedInIcon /></a>
        <a href="https://github.com/frayfray248" target="_blank" rel="noreferrer"><GitHubIcon /></a>
        <a href="mailto:fmacallum@shaw.ca"><EnvelopeAtIcon /></a>
    </StyledButtonContainer>
)

export default SocialMediaLinks
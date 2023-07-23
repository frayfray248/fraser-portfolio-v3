import ButtonContainer from "./button/ButtonContainer";

// icons
import { LinkedInIcon, GitHubIcon, EnvelopeAtIcon } from './icons/Icon'

const SocialMediaLinks = () => (
    <ButtonContainer>
        <a href="https://www.linkedin.com/in/fraser-macallum-752b2716b" target="_blank" rel="noreferrer" ><LinkedInIcon /></a>
        <a href="https://github.com/frayfray248" target="_blank" rel="noreferrer"><GitHubIcon /></a>
        <a href="mailto:fmacallum@shaw.ca"><EnvelopeAtIcon /></a>
    </ButtonContainer>
)

export default SocialMediaLinks
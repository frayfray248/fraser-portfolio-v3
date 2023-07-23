//styled
import styled, { css } from "styled-components"

// SVGs
import Image from "next/image"
import LinkedinSVG from "@/app/res/svg/LinkedinSVG"
import GitHubSVG from "@/app/res/svg/GitHubSVG"
import EnvelopeAtSVG from "@/app/res/svg/EnvelopeAtSVG"

const style = css`
    color: ${props => props.theme.colors.defaultText};

    transition: color 0.2s ease-in-out;

    &:hover {
        color: ${props => props.theme.colors.highlight};
    }
`

export const LinkedInIcon = styled(({className}) => <LinkedinSVG className={className} width={32} height={32}/>)`${style}`
export const GitHubIcon = styled(({className}) => <GitHubSVG className={className} width={32} height={32} />)`${style}`
export const EnvelopeAtIcon = styled(({className}) => <EnvelopeAtSVG className={className} width={32} height={32} />)`${style}`
import styled from 'styled-components'

// config
import { singleColumnMaxWidth } from '@/app/config/config'

const StyledNavList = styled.ul`
    margin-top: 4rem;
    list-style-type: none;
    padding: 0;

    @media ${singleColumnMaxWidth} {
        display: none;
    }
`

const StyledNavItem = styled.li`
    margin-top: 20px;
`

const StyledNavLink = styled(({ href, children, className }) => <a className={className} href={href}>{children}</a>)`
    position: relative;
    padding: 10px;
    color: ${props => props.theme.colors.defaultText};
    

    font-size: 1.5rem;

    /* pseudo element for expanding underline on mouse over */

    &::after {
        content: ''; 
        background-color: ${props => props.theme.colors.containerBackground};
        position: absolute; 
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        transition: all .2s ease-out;
        border-radius: 5px;
    }

    ${props => props.activelink === 'true' ?
        `
    background-position: bottom left;
    color: ${props.theme.colors.highlight};
    &::after {
        width: 100%;
        right: 0;
    }
    `
        :
        `
    &:hover {
        background-position: bottom left;
        color: ${props.theme.colors.highlight};
        &::after {
            width: 100%;
            right: 0;
        }
    }
    `}
`



const Nav = ({ activeSection }) => {

    const aboutActive = activeSection === 'about' ? 'true' : 'false'
    const projectsActive = activeSection === 'projects' ? 'true' : 'false'
    const experienceActive = activeSection === 'experience' ? 'true' : 'false'

    return (


        <StyledNavList>
            <StyledNavItem><StyledNavLink activelink={aboutActive} href='#about'>&lt;About /&gt;</StyledNavLink></StyledNavItem>
            <StyledNavItem><StyledNavLink activelink={projectsActive} href='#projects'>&lt;Projects /&gt;</StyledNavLink></StyledNavItem>
            <StyledNavItem><StyledNavLink activelink={experienceActive} href='#experience'>&lt;Experience /&gt;</StyledNavLink></StyledNavItem>
        </StyledNavList>
    )
}

export default Nav
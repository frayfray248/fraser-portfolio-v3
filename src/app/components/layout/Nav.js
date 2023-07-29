import styled from 'styled-components'

// config
import { singleColumnMaxWidth, singleColumnMaxHeight } from '@/app/config/config'

const StyledNavList = styled.ul`
    margin-top: 2rem;
    margin-left: 2rem;
    list-style-type: none;
    padding: 0;

    font-size: 1.3rem;
    font-weight: 400;

    @media ${singleColumnMaxWidth} {
        display: none;
    }

    @media ${singleColumnMaxHeight} {
        display: none;
    }
`

const StyledNavItem = styled.li`
    margin-top: 20px;
`

const StyledNavItemContainer = styled.div`
    display: flex;
`

const StyledNavLink = styled(({ href, children, className }) => <a className={className} href={href}>{children}</a>)`
    position: relative;
    padding: 10px;
    color: ${props => props.theme.colors.defaultText};


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
    const contactActive = activeSection === 'contact' ? 'true' : 'false'

    return (


        <StyledNavList>
            <StyledNavItem>
                <StyledNavLink activelink={aboutActive} href='#about'>&lt;About /&gt;</StyledNavLink>
            </StyledNavItem>
            <StyledNavItem>
                <StyledNavLink activelink={projectsActive} href='#projects'>&lt;Projects /&gt;</StyledNavLink>
            </StyledNavItem>
            <StyledNavItem>
                <StyledNavLink activelink={experienceActive} href='#experience'>&lt;Experience /&gt;</StyledNavLink>
            </StyledNavItem>
            <StyledNavItem>
                <StyledNavLink activelink={contactActive} href='#contact'>&lt;Contact /&gt;</StyledNavLink>
            </StyledNavItem>
        </StyledNavList>
    )
}

export default Nav
import styled from 'styled-components'

const StyledLink = styled.a`
background : none;
border: 2px solid ${props => props.theme.colors.link};
border-radius: 5px;
color: ${props => props.theme.colors.link};
padding: 20px;
text-decoration: none;
transition: all .2s ease-out;

&:hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.highlight};
    border: 2px solid ${props => props.theme.colors.highlight};
    color: ${props => props.theme.colors.mainBackground};
}

&:active:hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.highlight};
    border: 2px solid ${props => props.theme.colors.highlight};
    color: ${props => props.theme.colors.mainBackground};
}
`

const ProfilePicture = ({ href, text }) => (
    <StyledLink href={href} >{text}</StyledLink>
)

export default ProfilePicture
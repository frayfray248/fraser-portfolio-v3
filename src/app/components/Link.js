import styled from 'styled-components'

const StyledLink = styled.a`
padding: 20px;
white-space: nowrap;
border: 2px solid ${props => props.theme.colors.link};
border-radius: 5px;
background : none;
color: ${props => props.theme.colors.link};
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

const StyledContainer = styled.div`
    padding: 20px 0px;
`

const ProfilePicture = ({ href, text }) => (
    <StyledContainer><StyledLink href={href}  target="_blank">{text}</StyledLink></StyledContainer>
)

export default ProfilePicture
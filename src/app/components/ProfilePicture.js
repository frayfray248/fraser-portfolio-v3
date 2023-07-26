import styled from 'styled-components'

const StyledImage = styled.img`
    width: 150px;
    border-radius : ${props => props.radius}%;
    border: 4px solid ${props => props.theme.colors.highlight};
    filter: grayscale(75%);
    transition: all 0.5s;
    &:hover {
        filter: grayscale(0%);
    }
`

const ProfilePicture = ({ img, className, radius=100 }) => (
    <StyledImage src={img} className={className} radius={radius}/>
)

export default ProfilePicture